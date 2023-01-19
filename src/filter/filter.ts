import { FilterStrategy } from "../types";

export type FilterCheck<Key, Value> = (key: Key, value: Value) => boolean;

export class Filter<Key, Value> implements FilterStrategy<Key, Value> {
  checker: FilterCheck<Key, Value>;

  constructor(checker: FilterCheck<Key, Value>) {
    this.checker = checker;
  }

  filter = (key: Key, values: Value[]): Value[] => {
    return values.filter((v) => this.checker(key, v));
  };

  /** Compose strategy with other strategy, within a given combination operator */
  compose = (
    other: Filter<Key, Value>,
    operator: "and" | "or" | "not" = "and"
  ): Filter<Key, Value> => {
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

    return new Filter(newChecker);
  };

  and = (...strategies: Filter<Key, Value>[]): Filter<Key, Value> => {
    return strategies.reduce(
      (cummulative, strat) => cummulative.compose(strat, "and"),
      this
    );
  };

  or = (...strategies: Filter<Key, Value>[]): Filter<Key, Value> => {
    return strategies.reduce(
      (cummulative, strat) => cummulative.compose(strat, "or"),
      this
    );
  };

  not = (...strategies: Filter<Key, Value>[]): Filter<Key, Value> => {
    return strategies.reduce(
      (cummulative, strat) => cummulative.compose(strat, "not"),
      this
    );
  };
}

export class ModifyFilter {
  static caseInsenstive<Key, Value>(
    strategy: Filter<string, string>
  ): Filter<Key, Value> {
    return new Filter((key, value) => {
      return strategy.checker(
        String(key).toLowerCase(),
        String(value).toLowerCase()
      );
    });
  }
}
