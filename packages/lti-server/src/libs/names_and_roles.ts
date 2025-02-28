import { MembershipContainer, Member, MemberStatus } from "@atomicjolt/lti-types";
import { parseLinkHeader } from "./link_header";

export interface NamesAndRolesResponse {
  result: MembershipContainer;
  next?: string;
  differences?: string;
}

export interface NamesAndRolesParams {
  role?: string;
  limit?: number;
  rlid?: string;
  next?: string;
  since?: string; // For differences API
}

// Helper function to convert string status to MemberStatus enum
function toMemberStatus(status: string | undefined): MemberStatus {
  if (!status) return MemberStatus.Active;

  switch (status.toLowerCase()) {
    case 'inactive':
      return MemberStatus.Inactive;
    case 'deleted':
      return MemberStatus.Deleted;
    case 'active':
    default:
      return MemberStatus.Active;
  }
}

export async function fetchMemberships(
  accessToken: string,
  contextMembershipsUrl: string,
  params?: NamesAndRolesParams
): Promise<NamesAndRolesResponse> {
  // If next URL is provided, use it instead of building the URL
  const url = params?.next ? new URL(params.next) : new URL(contextMembershipsUrl);

  // Only build query parameters if we're not using a next URL
  if (!params?.next) {
    const query = new URLSearchParams();

    // Per section 2.4.1, role can be simplified (e.g., 'Learner' instead of full URI)
    if (params?.role) {
      query.set('role', params.role);
    }

    // Per section 2.4.2
    if (params?.limit) {
      query.set('limit', params.limit.toString());
    }

    // Per section 3, resource link membership
    if (params?.rlid) {
      query.set('rlid', params.rlid);
    }

    // Per section 2.4.3, for differences API
    if (params?.since) {
      query.set('since', params.since);
    }

    url.search = query.toString();
  }

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.ims.lti-nrps.v2.membershipcontainer+json',
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Names and roles request failed: ${response.status} ${text}`);
    }

    const rawResult = await response.json();

    // Validate minimum required fields
    if (!rawResult.context?.id) {
      throw new Error('Invalid Names and roles response: missing required context.id');
    }

    // Convert the raw response to proper types
    const result: MembershipContainer = {
      ...rawResult,
      members: rawResult.members.map((member: any) => ({
        ...member,
        status: toMemberStatus(member.status)
      })) as Member[]
    };

    const { next, differences } = parseLinkHeader(response.headers.get('Link') || '');

    return {
      result,
      next,
      differences,
    };
  } catch (error) {
    // Preserve stack trace while adding context
    const wrappedError = new Error(
      `Names and roles service error for ${url.toString()}: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
    wrappedError.cause = error;
    throw wrappedError;
  }
}