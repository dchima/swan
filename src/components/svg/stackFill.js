import React from 'react';
import PropTypes from 'prop-types';
import {
  ReactJs, NodeJs, Python, Django, Html, Css, Postgres,
  Xd, Vscode, Docker, Travis, Hound, Coveralls, Heroku,
  Postman, Swagger, Trello, Git, CProgram, Ros, Webpack,
  ObjectiveC, ARM, XCode, CPlus, RaspberryPi, FPGA, Xilinx,
  Netlify,
} from './stacks';
import Swan from './swan';

const StackFill = ({ name }) => {
  switch (name) {
    case 'ReactJs':
      return <ReactJs />;
    case 'NodeJs':
      return <NodeJs />;
    case 'Python':
      return <Python />;
    case 'Django':
      return <Django />;
    case 'Html':
      return <Html />;
    case 'Css':
      return <Css />;
    case 'Postgres':
      return <Postgres />;
    case 'Xd':
      return <Xd />;
    case 'Vscode':
      return <Vscode />;
    case 'Docker':
      return <Docker />;
    case 'Travis':
      return <Travis />;
    case 'Hound':
      return <Hound />;
    case 'Coveralls':
      return <Coveralls />;
    case 'Heroku':
      return <Heroku />;
    case 'Postman':
      return <Postman />;
    case 'Swagger':
      return <Swagger />;
    case 'Trello':
      return <Trello />;
    case 'Git':
      return <Git />;
    case 'C':
      return <CProgram />;
    case 'ROS':
      return <Ros />;
    case 'Webpack':
      return <Webpack />;
    case 'ObjectiveC':
      return <ObjectiveC />;
    case 'ARM':
      return <ARM />;
    case 'XCode':
      return <XCode />;
    case 'CPlus':
      return <CPlus />;
    case 'RaspberryPi':
      return <RaspberryPi />;
    case 'FPGA':
      return <FPGA />;
    case 'Xilinx':
      return <Xilinx />;
    case 'Netlify':
      return <Netlify />;
    default:
      return <Swan />;
  }
};

StackFill.props = {
  name: PropTypes.string.isRequired,
};
export default StackFill;
