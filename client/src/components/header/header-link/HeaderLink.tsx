import { FC } from "react";

interface IHeaderLink {
  link: string;
  name: string;
}

const HeaderLink: FC<IHeaderLink> = ({ link, name }) => {
  return <a href={link}>{name}</a>;
};

export default HeaderLink;
