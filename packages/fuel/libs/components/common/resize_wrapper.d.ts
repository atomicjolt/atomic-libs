declare function ResizeWrapper(props: any): React.JSX.Element;
declare namespace ResizeWrapper {
    namespace propTypes {
        const children: propTypes.Requireable<propTypes.ReactNodeLike>;
        const getSize: propTypes.Requireable<(...args: any[]) => any>;
    }
}
export default ResizeWrapper;
import React from "react";
import propTypes_1 from "prop-types";
