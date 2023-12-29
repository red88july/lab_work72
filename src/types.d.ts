export interface DishesPost {
  title: string,
  price: string,
  photo: string
}

export interface GetDishesDetails {
  id: string,
  title: string,
  price: string,
  photo: string
}

export type ApiDishes = Omit<GetDishesDetails, 'id'>
export type ApiUpdDishes = Omit<GetDishesDetails, 'id'>

export interface DishesList {
  [id: string]: ApiDishes;
}

export interface UpdateDish {
  id: string,
  dish: ApiDishes,
}