import { expect, it, describe, vi, afterEach } from 'vitest';
import { Score } from '../../types';
import { ActivityProgress, GradingProgress, sendScore } from './scores';

describe('scores', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  });

  it('should send score', async () => {
    const response = {
      resultUrl: 'https://platform.example.com/url/to/result',
      'https://canvas.instructure.com/lti/submission': {
        content_items: [
          {
            type: 'file',
            url: 'https://example.com/test_file.txt',
            title: 'Submission File',
            progress: 'https://platform.example.com/url/to/progress',
          },
        ],
      },
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

    const id = "https://platform.example.com/line_items/1"
    const timestamp = new Date().toISOString();
    const accessToken = 'not a real token';
    const userId = '1';
    const score: Score = {
      user_id: userId,
      score_given: 9.0,
      score_maximum: 10.0,
      comment: 'Good job!',
      activity_progress: ActivityProgress.Completed,
      grading_progress: GradingProgress.FullyGraded,
      timestamp,
    };

    const result = await sendScore(accessToken, id, score);

    expect(result.resultUrl).toBe(response.resultUrl);
    expect(result["https://canvas.instructure.com/lti/submission"].content_items.length).toBe(1);
  });
});
