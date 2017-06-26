export enum ShoeType {
    BASKETBALL,
    CASUAL,
    RUNNING,
    UNKNOWN,
}

export interface IShoe {
    id: number;
    name: string;
    brand: string;
    type: ShoeType;
}

export const DEFAULT_SHOE = {
    id: -1,
    name: '',
    brand: '',
    type: ShoeType.UNKNOWN,
};

export class Shoe {
    id: number;
    name: string;
    brand: string;
    type: ShoeType;

    constructor(shoe: IShoe) {
        this.id    = shoe.id;
        this.name  = shoe.name;
        this.brand = shoe.brand;
        this.type  = shoe.type;
    }

    static Deserialize(shoeResponse: Partial<IShoe>): Shoe {
        return new Shoe(Object.assign({}, DEFAULT_SHOE, shoeResponse));
    }
}