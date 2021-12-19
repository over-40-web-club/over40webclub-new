import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Instagram = function ({ userName }) {
  return <CircleIcon href={`https://www.instagram.com/${userName}`} iconName="InstagramIcon" />;
};

Instagram.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Instagram;
