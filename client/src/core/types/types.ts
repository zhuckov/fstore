import { FC, ReactNode } from "react";

export type Rating = 0 | 1 | 2 | 3 | 4 | 5;
export type ProductId = number;

export interface ILogoProps {
  pathToLogo: string;
}

export interface IIcon {
  isActive: boolean;
  width?: number;
  height?: number;
  link?: string;
}

export interface ISideLink {
  Icon: FC<IIcon>;
  link: string;
  linkText: string;
}

export interface IHeaderLink {
  link: string;
  children: ReactNode;
}

export interface IEditableInputProps {
  postfix?: string;
  emptyText?: string;
  value?: string | number;
  setValue: (value: number) => void;
  placeholder?: string;
  valueValidator?: (value: number | string) => boolean;
}
export interface IEditableHeading {
  productName?: string;
  setProductName: (newProductName: string) => void;
}

export interface IProductTitleProps {
  title: string;
  clickEvent: () => void;
}

export interface IProductInputProps {
  classes?: string;
  placeholder?: string;
  blurEvent: (e: React.FocusEvent<HTMLInputElement>) => void;
  defaultValue?: string | number;
}

export interface IProductFormProps {
  submitCreateProduct?: () => void;
  price: number;
  productName: string;
  setProductName: (newProductName: string) => void;
  setPrice: (newPrice: number) => void;
  sale: number;
  setSale: (percent: number) => void;
  isSale: boolean;
  setIsSale: () => void;
}

export interface IStoreProduct {
  id: number;
  productName: string;
  productPrice: number;
  productPhoto: string;
}
