import { v4 as uuidv4 } from "uuid";
export const getUnicalImageName = () => {
  return `image_${uuidv4()}`;
};
