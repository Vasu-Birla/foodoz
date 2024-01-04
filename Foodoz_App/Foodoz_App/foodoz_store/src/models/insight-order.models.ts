export class OrderInsight {
    orders: number;
    revenue: number;
    pending: number;
    items_sold: number;
    chart_data: Array<{ period: string; total: string; }>;
    items_sold_chart: Array<{ period: string; total: string; }>;

    constructor() {
        this.orders = 0;
        this.revenue = 0;
        this.pending = 0;
        this.chart_data = [{ period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }];
        this.items_sold_chart = [{ period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }, { period: "0", total: "10" }];
    }
}