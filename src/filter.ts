import { levenshtein } from "./utils";

type FilterCheck<Key, Value> = (key: Key, value: Value) => boolean;

export class FilterStrategy<Key, Value> {
  checker: FilterCheck<Key, Value>;

  constructor(checker: FilterCheck<Key, Value>) {
    this.checker = checker;
  }

  filter = (key: Key, values: Value[]): Value[] => {
    return values.filter((v) => this.checker(key, v));
  };

  /** Compose strategy with other strategy, within a given combination operator */
  compose = (
    other: FilterStrategy<Key, Value>,
    operator: "and" | "or" | "not" = "and"
  ): FilterStrategy<Key, Value> => {
    let newChecker: FilterCheck<Key, Value>;

    switch (operator) {
      case "and":
        newChecker = (key, value) =>
          this.checker(key, value) && other.checker(key, value);
        break;
      case "or":
        newChecker = (key, value) =>
          this.checker(key, value) || other.checker(key, value);
        break;
      case "not":
      default:
        newChecker = (key, value) =>
          this.checker(key, value) && !other.checker(key, value);
        break;
    }

    return new FilterStrategy(newChecker);
  };

  and = (
    ...strategies: FilterStrategy<Key, Value>[]
  ): FilterStrategy<Key, Value> => {
    return strategies.reduce(
      (cummulative, strat) => cummulative.compose(strat, "and"),
      this
    );
  };

  or = (
    ...strategies: FilterStrategy<Key, Value>[]
  ): FilterStrategy<Key, Value> => {
    return strategies.reduce(
      (cummulative, strat) => cummulative.compose(strat, "or"),
      this
    );
  };

  not = (
    ...strategies: FilterStrategy<Key, Value>[]
  ): FilterStrategy<Key, Value> => {
    return strategies.reduce(
      (cummulative, strat) => cummulative.compose(strat, "not"),
      this
    );
  };
}

export class ModifyFilter {
  static caseInsenstive<Key, Value>(
    strategy: FilterStrategy<string, string>
  ): FilterStrategy<Key, Value> {
    return new FilterStrategy((key, value) => {
      return strategy.checker(
        String(key).toLowerCase(),
        String(value).toLowerCase()
      );
    });
  }
}

export const startsWithStrategy = () => {
  return new FilterStrategy<string, string>((key, value) => {
    return value.startsWith(key);
  });
};

export const distanceStrategy = (distance: number) => {
  return new FilterStrategy<string, string>((key, value) => {
    return levenshtein(key, value) <= distance;
  });
};

export const subStringStrategy = (position?: number) => {
  return new FilterStrategy<string, string>((key, value) =>
    value.includes(key, position)
  );
};

export const defaultStrategy = ModifyFilter.caseInsenstive<string, string>(
  subStringStrategy()
);
