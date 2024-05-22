import { FC, ReactElement } from "react";

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
  iconColor: string;
  width?: number;
  height?: number;
}

export interface ISideLink {
  Icon: ReactElement;
  link: string;
  linkText: string;
}
