import { isNumber } from "lodash";

const addComma = (origin) => {
  return isNumber(origin) ? origin.toLocaleString("ko-KR") : "";
};

export { addComma };
