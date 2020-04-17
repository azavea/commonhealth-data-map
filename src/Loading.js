import React from "react";
import { Spinner } from "@blueprintjs/core";

class Loading extends React.Component {
  render() {
    return (
      <div class="loading">
        <Spinner />
      </div>
    );
  }
}

export default Loading;
