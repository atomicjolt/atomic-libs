export default class AtomicQuery extends React.Component<any, any, any> {
    static propTypes: {
        children: PropTypes.Validator<(...args: any[]) => any>;
        loadingMessage: PropTypes.Requireable<string>;
        hideLoader: PropTypes.Requireable<boolean>;
        onDataReady: PropTypes.Requireable<(...args: any[]) => any>;
        onDataLoading: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        onDataReady: () => void;
        onDataLoading: () => void;
    };
    constructor(props: any);
    constructor(props: any, context: any);
    dataReady: boolean;
    dataLoading: boolean;
    render(): JSX.Element;
}
import React from "react";
import PropTypes from "prop-types";
