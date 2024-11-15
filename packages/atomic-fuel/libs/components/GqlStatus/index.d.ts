declare function GqlStatus(props: any): React.JSX.Element | null;
declare namespace GqlStatus {
    namespace propTypes {
        let loading: PropTypes.Requireable<boolean>;
        let error: PropTypes.Requireable<PropTypes.InferProps<{
            message: PropTypes.Requireable<string>;
        }>>;
        let loadMessage: PropTypes.Requireable<string>;
    }
}
export default GqlStatus;
import React from 'react';
import PropTypes from 'prop-types';
