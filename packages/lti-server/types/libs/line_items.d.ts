import { LineItem, LineItemListParams, NewLineItem, UpdateLineItem } from "../../types";
export declare function listLineItems(apiToken: string, lineItemsUrl: string, params?: LineItemListParams): Promise<LineItem[]>;
export declare function showLineItem(apiToken: string, lineItemUrl: string): Promise<LineItem>;
export declare function createLineItem(apiToken: string, lineItemsUrl: string, newLineItem: NewLineItem): Promise<LineItem>;
export declare function updateLineItem(apiToken: string, lineItemUrl: string, updateLineItem: UpdateLineItem): Promise<LineItem>;
export declare function deleteLineItem(apiToken: string, lineItemUrl: string): Promise<LineItem>;
//# sourceMappingURL=line_items.d.ts.map