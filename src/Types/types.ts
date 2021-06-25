export interface productType {
  _productId: any;
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
}
export interface CartItem{
  setCart: any;
  cart: any;
}
export interface AddProducts{
  ProductName: string;
  ImageLink: string;
  Price: number;
  Category: string;
}

export interface cartType {
  _productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  click: boolean;
}

export interface stateType {
  cart: cartType[];
}
