export default function modalDecorator(Component: any, name: any): import("react-redux").ConnectedComponent<any, {
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
