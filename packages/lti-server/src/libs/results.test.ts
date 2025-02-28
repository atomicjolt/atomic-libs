import { expect, describe, vi, it } from 'vitest';
import { listResults, showResult } from './results';

describe('list function', () => {
  it('should list results', async () => {
    const id = 'http://platform.example.com/api/lti/courses/5/line_items/2/results/1';
    const response = [
      {
        id: id,
        userId: "50",
        resultScore: 50,
        resultMaximum: 50,
        comment: null,
        scoreOf: "http://platform.example.com/api/lti/courses/5/line_items/2"
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


    const accessToken = 'not a real token';
    const lineItemId = `http://platform.example.com/api/lti/courses/5/line_items`;
    const results = await listResults(accessToken, lineItemId);

    expect(results.length).toEqual(1);
    expect(results[0]?.id).toEqual(id);
  });
});

describe('show function', () => {
  it('should return a single result', async () => {
    const id = 'http://platform.example.com/api/lti/courses/5/line_items/2/results/1';
    const response = {
      id: id,
      userId: "50",
      resultScore: 50,
      resultMaximum: 50,
      comment: null,
      scoreOf: "http://platform.example.com/api/lti/courses/5/line_items/2"
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

    const accessToken = 'not a real token';
    const result = await showResult(accessToken, id, '1');

    expect(result.id).toEqual(id);
  });
});
