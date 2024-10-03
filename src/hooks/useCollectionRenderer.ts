import { BaseCollection, useCachedChildren } from "@react-aria/collections";
import { createContext, useContext } from "react";
import { Node } from "react-stately";

interface UseCollectionRenderProps<T = unknown> {
  collection: BaseCollection<Node<T>>;
  parent: Node<T> | null;
}

export function useCollectionRender(props: UseCollectionRenderProps) {
  const { collection, parent } = props;

  return useCachedChildren({
    items: parent ? collection.getChildren!(parent.key) : collection,
    children: (node) => node.render!(node),
  });
}

interface CollectionRootRendererProps<T = unknown> {
  collection: BaseCollection<Node<T>>;
}

interface CollectionSectionRendererProps<T = unknown> {
  collection: BaseCollection<Node<T>>;
  parent: Node<T>;
}

interface CollectionRenderer<T = unknown> {
  CollectionRenderer: (
    props: CollectionRootRendererProps<T>
  ) => React.ReactNode;
  CollectionBranchRenderer: (
    props: CollectionSectionRendererProps<T>
  ) => React.ReactNode;
}

export const defaultCollectionRenderer: CollectionRenderer = {
  CollectionRenderer: (props) => {
    return useCollectionRender({ ...props, parent: null });
  },
  CollectionBranchRenderer: (props) => {
    return useCollectionRender(props);
  },
};

const CollectionRendererContext = createContext<CollectionRenderer>(
  defaultCollectionRenderer
);

export function useCollectionRenderer(): CollectionRenderer {
  return useContext(CollectionRendererContext);
}
