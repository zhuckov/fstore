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

export interface IAdminCatalog {}
