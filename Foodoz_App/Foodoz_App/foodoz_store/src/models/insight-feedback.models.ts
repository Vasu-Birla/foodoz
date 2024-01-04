export class FeedbackInsight {
    summary: Array<{ feedback_question_id: number; rank: number; total: number; feedback_question_title: string; percent: string; }>;
    constructor() {
        this.summary = [];
    }
}