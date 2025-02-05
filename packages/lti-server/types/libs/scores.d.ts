import { Score, ScoreResponse } from "../../types";
export declare enum ActivityProgress {
    Initialized = 0,
    Started = 1,
    InProgress = 2,
    Submitted = 3,
    Completed = 4
}
export declare enum GradingProgress {
    NotReady = 0,
    Failed = 1,
    Pending = 2,
    PendingManual = 3,
    FullyGraded = 4
}
export declare function createScore(userId: string, scoreGiven: number, scoreMaximum: number, comment?: string, activityProgress?: ActivityProgress, gradingProgress?: GradingProgress): Score;
export declare function sendScore(accessToken: string, id: string, score: Score): Promise<ScoreResponse>;
//# sourceMappingURL=scores.d.ts.map