import React from 'react';
import Floater from 'react-floater';

export default function BeaconMode({ cb }: any) {
  return (
    <div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/windows-popup.png`}
          alt="Microsoft Popup"
          className="old-tooltip"
        />
        <Floater
          callback={cb}
          content={
            <div style={{ fontSize: 32 }}>Yeah, this is how we use to look back in the day!</div>
          }
          event="hover"
          disableFlip
          placement="top"
          wrapperOptions={{
            offset: -20,
            placement: 'bottom',
            position: true,
          }}
          target=".old-tooltip"
        >
          <span className="beacon" />
        </Floater>
        <p style={{ marginTop: 20 }}>Beacon mode</p>
      </div>
    </div>
  );
}
