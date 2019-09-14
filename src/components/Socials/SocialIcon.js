import React from 'react';
import PropTypes from 'prop-types';

const SocialIcon  = ({Icon,iconClass,name}) => <a href=""><Icon className={iconClass} /></a>;


SocialIcon.propTypes = {
    iconClass:PropTypes.string,
    Icon:PropTypes.func,
    name:PropTypes.string
}


export default SocialIcon;