import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function makeFAIcon(icon) {
  return function (props) {
    <FontAwesomeIcon icon={icon} {...props} />;
  };
}
