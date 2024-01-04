export class FeedbackMatter {
    questions: Array<FeedbackQuestion>;
    options: Array<FeedbackAnserOption>;

    static defaultMatter(): FeedbackMatter {
        let toReturn = new FeedbackMatter();
        toReturn.questions = [new FeedbackQuestion(""), new FeedbackQuestion(""), new FeedbackQuestion(""), new FeedbackQuestion("")];
        toReturn.options = [new FeedbackAnserOption("Excellent", 1), new FeedbackAnserOption("Good", 2), new FeedbackAnserOption("Average", 3), new FeedbackAnserOption("Not Good", 4)];
        return toReturn;
    }

    static getRequest(fmIn: FeedbackMatter): FeedbackMatter {
        let toReturn = new FeedbackMatter();
        toReturn.questions = [];
        toReturn.options = [];
        for (let ques of fmIn.questions) {
            let quesToPush = new FeedbackQuestion(ques.title);
            quesToPush.id = ques.id;
            toReturn.questions.push(quesToPush);
        }
        for (let opt of fmIn.options) {
            let optToPush = new FeedbackAnserOption(opt.title, opt.rank);
            optToPush.id = opt.id;
            toReturn.options.push(optToPush);
        }
        return toReturn;
    }
}
export class FeedbackQuestion {
    id: number;
    title: string;
    meta: any;
    vendor_id: number;
    constructor(title: string) {
        this.title = title;
    }
}
export class FeedbackAnserOption {
    id: number;
    rank: number;
    title: string;
    vendor_id: number;

    constructor(title: string, rank: number) {
        this.title = title;
        this.rank = rank;
    }
}