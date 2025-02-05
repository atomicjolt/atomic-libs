import { describe, it, expect, afterEach, vi } from 'vitest';
import { listLineItems, showLineItem, createLineItem, updateLineItem, deleteLineItem } from './line_items';
import { NewLineItem, UpdateLineItem } from '../../types';

const accessToken = 'not a real token';

describe('API Tests', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should list line items', async () => {
    const response = [
      {
        id: "line_item_1",
        scoreMaximum: 100.0,
        label: "Test Item",
        tag: "test",
        resourceId: "res1",
        resourceLinkId: "link1",
        submission_type: null,
        launch_url: null
      }
    ];

    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        headers: {
          get: () => {
            return null;
          },
        },
        json: () => {
          return Promise.resolve(response);
        },
      });

    const url = 'http://example.com/line_items';
    const result = await listLineItems(accessToken, url);
    expect(result.length).toEqual(1);
  });

  it('should show a line item', async () => {
    const response = {
      id: "line_item_1",
      scoreMaximum: 100.0,
      label: "Test Item",
      tag: "test",
      resourceId: "res1",
      resourceLinkId: "link1",
      submission_type: null,
      launch_url: null
    };

    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        headers: {
          get: () => {
            return null;
          },
        },
        json: () => {
          return Promise.resolve(response);
        },
      });


    const lineItemUrl = 'http://example.com/line_item_1';
    const result = await showLineItem(accessToken, lineItemUrl);

    expect(result.id).toEqual(response.id);
  });

  it('should create a line item', async () => {
    const now = new Date();
    const isoString = now.toISOString();
    const newLineItem: NewLineItem = {
      scoreMaximum: 100.0,
      label: 'New Item',
      tag: 'new',
      resourceId: 'res_new',
      resourceLinkId: 'link_new',
      endDateTime: isoString,
    };

    const response = {
      id: 'new_line_item',
      scoreMaximum: 100.0,
      label: 'New Item',
      tag: 'new',
      resourceId: 'res_new',
      resourceLinkId: 'link_new',
      submission_type: null,
      launch_url: null,
    }

    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        headers: {
          get: () => {
            return null;
          },
        },
        json: () => {
          return Promise.resolve(response);
        },
      });

    const lineItemsUrl = 'http://example.com/line_items';
    const result = await createLineItem(accessToken, lineItemsUrl, newLineItem);
    expect(result.id).toEqual(response.id);

  });

  it('should update a line item', async () => {
    const now = new Date();
    const isoString = now.toISOString();
    const updateData: UpdateLineItem = {
      scoreMaximum: 100.0,
      label: 'New Item',
      tag: 'new',
      resourceId: 'res_new',
      resourceLinkId: 'link_new',
      endDateTime: isoString,
    };

    const response = {
      "id": "line_item_1",
      "scoreMaximum": 95.0,
      "label": "Updated Item",
      "tag": "updated",
      "resourceId": "res1",
      "resourceLinkId": "link1",
      "submission_type": null,
      "launch_url": null
    };

    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        headers: {
          get: () => {
            return null;
          },
        },
        json: () => {
          return Promise.resolve(response);
        },
      });

    const lineItemUrl = 'http://example.com/line_item_1';
    const result = await updateLineItem(accessToken, lineItemUrl, updateData);
    expect(result.id).toEqual(response.id);
  });

  it('should delete a line item', async () => {
    const response = {
      "id": "line_item_1",
      "scoreMaximum": 95.0,
      "label": "Updated Item",
      "tag": "updated",
      "resourceId": "res1",
      "resourceLinkId": "link1",
      "submission_type": null,
      "launch_url": null
    };

    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        ok: true,
        headers: {
          get: () => {
            return null;
          },
        },
        json: () => {
          return Promise.resolve(response);
        },
      });


    const lineItemUrl = 'http://example.com/line_item_1';
    const result = await deleteLineItem(accessToken, lineItemUrl);
    expect(result.id).toEqual(response.id);
  });

});
