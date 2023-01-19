import { Filter, ModifyFilter } from "./filter";
import { levenshtein } from "../utils";

export const startsWithStrategy = () => {
  return new Filter<string, string>((key, value) => {
    return value.startsWith(key);
  });
};

export const distanceStrategy = (distance: number) => {
  return new Filter<string, string>((key, value) => {
    return levenshtein(key, value) <= distance;
  });
};

export const subStringStrategy = (position?: number) => {
  return new Filter<string, string>((key, value) =>
    value.includes(key, position)
  );
};

export const defaultStrategy = ModifyFilter.caseInsenstive<string, string>(
  subStringStrategy()
);
