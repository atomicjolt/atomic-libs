import { LineItemResult, ResultListParams } from "../../types";

// Show results for a given line item.
// Parameters:
//   accessToken: Aquired by calling requestServiceTokenCached
//   params:
//     user_id: filter the results to a single user. The results MUST contain at most 1 result.
//             An empty array MAY be returned if the user does not have any result recorded.
//     limit: restrict the number of results returned; the platform MAY further reduce the number
//            of results returned at its own discretion.

export async function listResults(
  accessToken: string,
  lineItemId: string,
  params?: ResultListParams,
): Promise<LineItemResult[]> {
  const url = `${lineItemId}/results`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/vnd.ims.lis.v2.resultcontainer+json',
  };

  const queryString = new URLSearchParams(params as any).toString();
  const response = await fetch(`${url}?${queryString}`, { headers });
  const body = await response.json();
  return body as LineItemResult[];
}

export async function showResult(
  accessToken: string,
  lineItemId: string,
  resultId: string,
): Promise<LineItemResult> {
  const url = `${lineItemId}/results/${resultId}`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/vnd.ims.lis.v2.resultcontainer+json',
  };
  const response = await fetch(url, { headers });
  const body = await response.json();
  return body as LineItemResult;
}
