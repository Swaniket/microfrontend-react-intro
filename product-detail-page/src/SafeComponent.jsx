// We need to use Error Boundaries in order to protect shared components break from Change in code
import React from "react";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      console.log("Inside here");
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}
