import { Score, ScoreResponse } from "../../types";

export enum ActivityProgress {
  Initialized,
  Started,
  InProgress,
  Submitted,
  Completed,
}

export enum GradingProgress {
  NotReady,
  Failed,
  Pending,
  PendingManual,
  FullyGraded,
}

// Example usage:
//
// const accessToken = 'not a real token';
// const userId = '1';
// const score = createScore(userId, 9.0, 10.0);
// const id = 'https://example.com';
// sendScore(accessToken, id, score)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


export function createScore(
  userId: string,
  scoreGiven: number,
  scoreMaximum: number,
  comment?: string,
  activityProgress: ActivityProgress = ActivityProgress.Initialized,
  gradingProgress: GradingProgress = GradingProgress.NotReady
): Score {
  const now = new Date();
  const isoString = now.toISOString();
  return {
    user_id: userId,
    score_given: scoreGiven,
    score_maximum: scoreMaximum,
    comment,
    timestamp: isoString,
    activity_progress: activityProgress,
    grading_progress: gradingProgress,
  };
}

// Send a score to the platform
// Parameters:
//   accessToken: Aquired by calling requestServiceTokenCached
//   id: ID of the score. This will be a complete url to the score.
//   score: Score object containing users score details
export async function sendScore(
  accessToken: string,
  id: string,
  score: Score
): Promise<ScoreResponse> {
  const url = `${id}/scores`;

  const json = JSON.stringify(score);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/vnd.ims.lis.v1.score+json',
      'Accept': 'application/json',
    },
    body: json,
  });

  const body = await response.json();
  return body as ScoreResponse;
}
