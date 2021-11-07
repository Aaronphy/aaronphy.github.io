import React from "react";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2)
        }}
      >
        <p style={{ maxWidth: 310 }}>Sober</p>
      </div>
    );
  }
}

export default Bio;
