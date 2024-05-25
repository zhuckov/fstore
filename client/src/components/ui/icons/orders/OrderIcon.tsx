import { IIcon } from "@/types/types";
import { FC } from "react";

export const OrderIcon: FC<IIcon> = ({ width, height, isActive }) => {
  return (
    <svg width={width ? width : "20"} height={height ? height : "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1213 9.23312H14.8892C15.3088 9.23312 15.6386 8.88614 15.6386 8.46773C15.6386 8.03912 15.3088 7.70235 14.8892 7.70235H12.1213C11.7017 7.70235 11.3719 8.03912 11.3719 8.46773C11.3719 8.88614 11.7017 9.23312 12.1213 9.23312ZM18.1766 3.92749C18.7861 3.92749 19.1858 4.1418 19.5855 4.61123C19.9852 5.08067 20.0551 5.7542 19.9652 6.36549L19.0159 13.06C18.8361 14.3469 17.7569 15.2949 16.4879 15.2949H5.58639C4.25742 15.2949 3.15828 14.255 3.04837 12.908L2.12908 1.7834L0.620259 1.51807C0.22057 1.44664 -0.0592117 1.04864 0.0107338 0.640433C0.0806793 0.223045 0.470376 -0.0535128 0.880056 0.0087383L3.2632 0.375101C3.60293 0.437352 3.85274 0.722074 3.88272 1.06905L4.07257 3.35499C4.10255 3.68257 4.36234 3.92749 4.68209 3.92749H18.1766ZM5.42629 16.9079C4.58694 16.9079 3.90747 17.6018 3.90747 18.4591C3.90747 19.3061 4.58694 20 5.42629 20C6.25564 20 6.93511 19.3061 6.93511 18.4591C6.93511 17.6018 6.25564 16.9079 5.42629 16.9079ZM16.6676 16.9079C15.8282 16.9079 15.1488 17.6018 15.1488 18.4591C15.1488 19.3061 15.8282 20 16.6676 20C17.4969 20 18.1764 19.3061 18.1764 18.4591C18.1764 17.6018 17.4969 16.9079 16.6676 16.9079Z"
        fill={isActive ? "#707FDD" : "#A6ABC8"}
      />
    </svg>
  );
};