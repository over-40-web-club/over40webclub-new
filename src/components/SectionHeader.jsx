import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Col } from "react-bootstrap";
import "./SectionHeader.scss";

const SectionHeader = function ({header, subheader}) {
  const subheaderPart = subheader ? (
    <h3 className="section-subheading text-muted">{subheader}</h3>
  ) : null;

  return (
    <Col lg={12} className={clsx("section-header", "text-center")}>
      <h2 className="section-heading text-uppercase">{header}</h2>
      {subheaderPart}
    </Col>
  );
};

SectionHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
};

SectionHeader.defaultProps = {
  header: "",
  subheader: "",
};

export default SectionHeader;
