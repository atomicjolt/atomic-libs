import { LineItem, LineItemListParams, NewLineItem, UpdateLineItem } from "../../types";


export async function listLineItems(apiToken: string, lineItemsUrl: string, params?: LineItemListParams): Promise<LineItem[]> {
  const url = new URL(lineItemsUrl);
  const queryString = new URLSearchParams(params as any).toString();

  const response = await fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Accept': 'application/vnd.ims.lis.v2.lineitemcontainer+json'
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function showLineItem(apiToken: string, lineItemUrl: string): Promise<LineItem> {
  const response = await fetch(lineItemUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Accept': 'application/vnd.ims.lis.v2.lineitem+json'
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function createLineItem(apiToken: string, lineItemsUrl: string, newLineItem: NewLineItem): Promise<LineItem> {
  const response = await fetch(lineItemsUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Accept': 'application/vnd.ims.lis.v2.lineitem+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newLineItem)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function updateLineItem(apiToken: string, lineItemUrl: string, updateLineItem: UpdateLineItem): Promise<LineItem> {
  const response = await fetch(lineItemUrl, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Accept': 'application/vnd.ims.lis.v2.lineitem+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateLineItem)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export async function deleteLineItem(apiToken: string, lineItemUrl: string): Promise<LineItem> {
  const response = await fetch(lineItemUrl, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${apiToken}`
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
