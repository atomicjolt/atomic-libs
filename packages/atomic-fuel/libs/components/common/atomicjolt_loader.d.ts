export function CoreLoader(props: any): React.JSX.Element;
declare function Loader(props: any): React.JSX.Element;
declare namespace Loader {
    namespace propTypes {
        let message: PropTypes.Requireable<string>;
        let logoColor: PropTypes.Requireable<string>;
        let backgroundColor1: PropTypes.Requireable<string>;
        let backgroundColor2: PropTypes.Requireable<string>;
    }
}
export default Loader;
import React from 'react';
import PropTypes from 'prop-types';
