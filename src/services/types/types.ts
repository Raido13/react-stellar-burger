import { ChangeEvent, FC, type ReactNode } from "react";

export type TIngridient = {
  name: string;
  _id: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number
}

export type TIngridientUid = TIngridient & { elemID: string }
export type TIngridientIdx = TIngridient & { id: number }
export type TIngridientCount = TIngridient & { counter: number }

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

export interface IFormProps { name: string, initialValue: string, placeholder: string, fillForm: (e: ChangeEvent<HTMLInputElement>) => void }
export interface IField extends IFormProps { Field: FC<IFormProps> }
