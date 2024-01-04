export class EarningInsight {
    total_earnings: number;
    earnings_chart_data: Array<{ period: string, total: string }>;

    constructor() {
        this.total_earnings = 0;
        this.earnings_chart_data = [{ period: "1", total: "10" }, { period: "2", total: "10" }, { period: "3", total: "10" }, { period: "4", total: "10" }, { period: "5", total: "10" }];
    }
}