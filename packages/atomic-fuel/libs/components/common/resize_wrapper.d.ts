declare function ResizeWrapper(props: any): React.JSX.Element;
declare namespace ResizeWrapper {
    namespace propTypes {
        let children: propTypes.Requireable<propTypes.ReactNodeLike>;
        let getSize: propTypes.Requireable<(...args: any[]) => any>;
    }
}
export default ResizeWrapper;
import React from 'react';
import propTypes_1 from 'prop-types';
