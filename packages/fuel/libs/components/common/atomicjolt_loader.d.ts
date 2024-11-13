export function CoreLoader(props: any): React.JSX.Element;
declare function Loader(props: any): React.JSX.Element;
declare namespace Loader {
    namespace propTypes {
        const message: PropTypes.Requireable<string>;
        const logoColor: PropTypes.Requireable<string>;
        const backgroundColor1: PropTypes.Requireable<string>;
        const backgroundColor2: PropTypes.Requireable<string>;
    }
}
export default Loader;
import React from "react";
import PropTypes from "prop-types";
