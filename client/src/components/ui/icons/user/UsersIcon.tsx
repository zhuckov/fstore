import { IIcon } from "../../../../types/types";

export const UsersIcon = ({ isActive, width, height }: IIcon) => {
  return (
    <svg width={width ? width : "16"} height={height ? height : "20"} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2939 5.29106C13.2939 8.22809 10.9391 10.5831 7.99995 10.5831C5.06184 10.5831 2.70596 8.22809 2.70596 5.29106C2.70596 2.35402 5.06184 0 7.99995 0C10.9391 0 13.2939 2.35402 13.2939 5.29106ZM8 20C3.66238 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z"
        fill={isActive ? "#707FDD" : "#A6ABC8"}
      />
    </svg>
  );
};
