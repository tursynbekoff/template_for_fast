import React from "react";

function Tooltip(props) {
  const { children } = props;
  return (
    <span className="tooltip">{children} 
      <span className="hover-tooltip">Im a tooltip</span>
      <span lang="en-">RED</span>
    </span>
  )
}

export default Tooltip;