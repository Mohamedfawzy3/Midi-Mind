import React, { Component } from "react";
import ErrorPage from "./ErrorPage";

class StanderdErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: undefined,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    } else return this.props.children;
  }
}

export default StanderdErrorBoundry;
