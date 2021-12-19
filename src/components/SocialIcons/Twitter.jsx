import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Twitter = function ({ userName }) {
  return <CircleIcon href={`https://twitter.com/${userName}`} iconName="TwitterIcon" />;
};

Twitter.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Twitter;
