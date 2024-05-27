import { FC, ReactNode } from "react";

export interface IProduct {
  id: number;
  productName: string;
  productPrice: number;
  productPhoto: string;
}

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

export interface IProductList {
  products: IProduct[];
}

export interface IEditableInputProps {
  initialValue: string | number | null;
}

export interface IProductTitleProps {
  title: string;
  clickEvent: () => void;
}

export interface IProductInputProps {
  classes?: string;
  blurEvent: (e: React.FocusEvent<HTMLInputElement>) => void;
  defaultValue: string | number;
}
