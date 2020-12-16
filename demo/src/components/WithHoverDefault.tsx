import React from 'react';
import Floater from 'react-floater';

export default function WithHoverDefault({ cb }: any) {
  return (
    <div>
      <Floater
        callback={cb}
        title="Events"
        content={<div>I can be triggered by click or hover (on devices with a mouse)</div>}
        event="hover"
        placement="top"
      >
        <button>HOVER</button>
      </Floater>
      <p>default delay (0.4s)</p>
    </div>
  );
}
