import React from 'react';
import PropTypes from 'prop-types';
import Instagram from './instagram';
import Twitter from './twitter';
import Mail from './mail';
import Github from './github';
import Linkedin from './linkedin';
import Dribble from './dribble';

import Swan from './swan';

const SocialFill = ({ name }) => {
  switch (name) {
    case 'Instagram':
      return <Instagram />;
    case 'Twitter':
      return <Twitter />;
    case 'Mail':
      return <Mail />;
    case 'Github':
      return <Github />;
    case 'Linkedin':
      return <Linkedin />;
    case 'Dribble':
      return <Dribble />;
    default:
      return <Swan />;
  }
};

SocialFill.props = {
  name: PropTypes.string.isRequired,
};
export default SocialFill;
