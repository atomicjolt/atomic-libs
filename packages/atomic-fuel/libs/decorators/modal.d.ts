export default function modalDecorator(Component: any, name: any): import("react-redux").ConnectedComponent<any, {
    context?: import("react-redux/es/components/Context").ReactReduxContextInstance | undefined;
    store?: import("redux").Store | undefined;
}>;
