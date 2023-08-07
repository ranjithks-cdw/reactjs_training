import { Component } from "react";
import PropTypes from 'prop-types';

/**
 * @description Class component to handle error
 */
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            message: ``
        }
    }
    static getDerivedStateFromError(error) {
        return {hasError: true};
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, message: error.message});
      }
    render() {
        if(this.state.hasError) {
            return <div className={this.props.className}>{this.state.message}</div>
        }
        return this.props.children;
    }
};

ErrorBoundary.propTypes = {
    className: PropTypes.string
};

ErrorBoundary.defaultProps = {
    className: ''
};

export default ErrorBoundary;