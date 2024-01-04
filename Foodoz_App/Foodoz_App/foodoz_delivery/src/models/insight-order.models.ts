export class OrderInsight {
    orders_count: number;
    distance_travelled: number;
    earnings: number;
    orders_chart_data: Array<{ period: string, total: string }>;

    constructor() {
        this.orders_count = 0;
        this.distance_travelled = 0;
        this.earnings = 0;
        this.orders_chart_data = [{ period: "1", total: "10" }, { period: "2", total: "10" }, { period: "3", total: "10" }, { period: "4", total: "10" }, { period: "5", total: "10" }];
    }
}