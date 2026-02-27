import { Element, Middleware, serialize } from "stylis";

interface LayerPluginOptions {
  name?: string;
}

export function layerPlugin(options: LayerPluginOptions = {}): Middleware {
  const { name = "elements" } = options;

  return (element, _index, _children, callback) => {
    if (element.type !== "rule" || element.return) return;

    // Skip rules inside @layer (leave alone) or @keyframes (not real CSS rules)
    let parent = element.parent;
    while (parent) {
      if (parent.type === "@layer" || parent.type === "@keyframes") return;
      parent = parent.parent;
    }

    const selector = Array.isArray(element.props)
      ? element.props.join(",")
      : element.props;

    // element.children can be a string if element is a declaration,
    // but it should always be an array for rules
    const declarations = serialize(element.children as Element[], callback);

    // Clear children so that middlewares down the line don't overwrite
    // element.return with their own stringification of the rule.
    element.children = [];

    // Set element.return so styled-components' rulesheet collects our output.
    // (styled-components ignores serialize()'s return value — it reads element.return instead.)
    // Also return it directly for non-rulesheet usage.
    return (element.return = `@layer ${name}{${selector}{${declarations}}}`);
  };
}
