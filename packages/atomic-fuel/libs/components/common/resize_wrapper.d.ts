declare function ResizeWrapper(props: any): JSX.Element;
declare namespace ResizeWrapper {
    namespace propTypes {
        const children: propTypes.Requireable<propTypes.ReactNodeLike>;
        const getSize: propTypes.Requireable<(...args: any[]) => any>;
    }
}
export default ResizeWrapper;
import propTypes_1 from "prop-types";
