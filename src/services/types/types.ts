import { type ReactNode } from "react";

export type TIngridient = {
  name: string;
  _id: string;
  type: string;
  proteins: number;
  fat: number;
  carbohyrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number
}

export type TIngridientUid = TIngridient & { elemID: string }
export type TIngridientIdx = TIngridient & { id: number }

export type TOrder = {
  ingredients: string[];
  _id: string;
  status: string;
  number: number;
  name: string;
  createdAt: string;
  updatedAt: string
}

export type TUser = {
  email: string;
  name: string
}

export type TSignIn = {
  email: string;
  password: string
}

export type TSignUp = TSignIn & { name: string }
export type TChildren = { children?: ReactNode }