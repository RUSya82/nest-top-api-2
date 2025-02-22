class ProductCharacteristic {
  name: string;

  value: string;
}
export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating: number;

  description: number;

  advantages: string;

  disAdvantages: string;

  categories: string[];

  tags: string[];
  characteristics: ProductCharacteristic[];
}
