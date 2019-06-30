export class Product {
    constructor(public id: number, public name: string, public photoUrl: string, public description: string, public price: number) {
        this.id = id;
        this.name = name;
        this.photoUrl = photoUrl;
        this.description = description;
        this.price = price;
    }
}