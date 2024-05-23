import { FC } from "react";
import { IIcon } from "../../../../types/types";

export const UsersIcon: FC<IIcon> = ({ isActive, width, height }) => {
  return (
    <svg width={width ? width : "12"} height={height ? height : "16"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.97047 4.46829C9.97047 6.67106 8.2043 8.43733 5.99998 8.43733C3.7964 8.43733 2.02949 6.67106 2.02949 4.46829C2.02949 2.26552 3.7964 0.5 5.99998 0.5C8.2043 0.5 9.97047 2.26552 9.97047 4.46829ZM6 15.5C2.74678 15.5 0 14.9712 0 12.9312C0 10.8904 2.76404 10.3804 6 10.3804C9.25397 10.3804 12 10.9092 12 12.9492C12 14.99 9.23596 15.5 6 15.5Z"
        fill={isActive ? "#707FDD" : "#A6ABC8"}
      />
    </svg>
  );
};
