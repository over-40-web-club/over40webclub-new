import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function makeFAIcon(icon) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return <FontAwesomeIcon icon={icon} {...props} />;
  };
}
