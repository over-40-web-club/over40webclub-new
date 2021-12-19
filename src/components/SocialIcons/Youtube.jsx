import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Youtube = function ({ url }) {
  return <CircleIcon href={url} iconName="YoutubeIcon" />;
};

Youtube.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Youtube;
