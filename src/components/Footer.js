import React from "react";
import { rhythm } from "../utils/typography";

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1)
        }}
      >
        {/* <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div> */}
        <a
          href="https://github.com/Aaronphy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    );
  }
}

export default Footer;
