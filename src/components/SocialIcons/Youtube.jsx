import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Youtube = ({ url }) => (
  <CircleIcon href={url} iconName="YoutubeIcon" />
);

Youtube.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Youtube;
