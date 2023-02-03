import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  //this funtion is used to provide fallback for error
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  //this is generally used fo rloggin error
  // componentDidCatch(error, info) {
  //   console.log(error);
  //   console.log(info);
  // }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>SomeThing went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
