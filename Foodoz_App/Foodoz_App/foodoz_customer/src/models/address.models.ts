export class MyAddress {
    id: number;
    user_id: number;
    title: string;
    formatted_address: string;
    latitude: string;
    longitude: string;

    static getDemoAddress(): MyAddress {
        let toReturn = new MyAddress();
        toReturn.id = -1;
        toReturn.formatted_address = "New York";
        toReturn.latitude = "40.6971494";
        toReturn.longitude = "-74.2598655";
        return toReturn;
    }
}