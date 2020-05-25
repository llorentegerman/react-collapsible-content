import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import CompareReactCollapsible from "./comparisons/CompareReactCollapsible";
import CompareReactCollapse from "./comparisons/CompareReactCollapse";
import CompareRCCollapse from "./comparisons/CompareRCCollapse";

const styles = StyleSheet.create({
  link: {
    backgroundColor: "#74a381",
    padding: "8px 4px",
    borderRadius: 4,
    marginRight: 4,
    cursor: "pointer",
    color: "white",
    fontWeight: 500
  },
  selected: {
    backgroundColor: "#577a61"
  }
});

function ComparisonsComponent() {
  const [example, setExample] = useState("rc-collapse");

  const getContent = () => {
    switch (example) {
      case "react-collapsible":
        return <CompareReactCollapsible />;
      case "react-collapse":
        return <CompareReactCollapse />;
      case "rc-collapse":
        return <CompareRCCollapse />;
      default:
        return <span>Select an example</span>;
    }
  };

  const Link = ({ name, title }) => (
    <span
      className={css(styles.link, example === name && styles.selected)}
      onClick={() => setExample(name)}
    >
      {title || name}
    </span>
  );

  return (
    <Column>
      <h2 style={{ margin: 0 }}>Comparisons</h2>
      <div
        style={{
          textAlign: "justify",
          marginTop: 0,
          marginBottom: 10,
          lineHeight: "21px"
        }}
      >
        Here is a comparison between our component and three of the most popular
        collapsible component in npm.
        <br />
        Wait until counter reaches 0 and after that the content will change.
        <br />
        See the difference in how both components transition to the new height.
        <br />
        <b>react-collapsible-component</b> transitions smoothly, while{" "}
        <b>others</b> jumps directly to the new height.
      </div>
      <h4 style={{ margin: 0, marginBottom: 4 }}>
        Select a package to compare:
      </h4>
      <Row>
        <Link name="rc-collapse" />
        <Link name="react-collapse" />
        <Link name="react-collapsible" />
      </Row>
      <div style={{ marginTop: 10 }}>{getContent()}</div>
    </Column>
  );
}

export default ComparisonsComponent;
