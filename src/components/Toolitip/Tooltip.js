import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CustomTooltip({ name, link }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.name}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <a href={link} className="app-sidebar-link active">
        {props.link}
      </a>
    </OverlayTrigger>
  );
}

export default CustomTooltip;
