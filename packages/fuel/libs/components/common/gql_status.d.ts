declare function GqlStatus(props: any): React.JSX.Element | null;
declare namespace GqlStatus {
    namespace propTypes {
        const loading: PropTypes.Requireable<boolean>;
        const error: PropTypes.Requireable<PropTypes.InferProps<{
            message: PropTypes.Requireable<string>;
        }>>;
        const loadMessage: PropTypes.Requireable<string>;
    }
}
export default GqlStatus;
import React from "react";
import PropTypes from "prop-types";
