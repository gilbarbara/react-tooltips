import React from 'react';
import Floater from 'react-floater';

export default function WithTitleAndFooter({ cb }: any) {
  return (
    <div>
      <Floater
        callback={cb}
        title="Oi, I have a title!"
        content={
          <div>
            <p>My content can be anything that can be rendered: numbers, strings, elements.</p>
            <p>Also I have a custom long arrow.</p>
          </div>
        }
        footer="And I should move up on mobile"
        placement="left"
        styles={{
          arrow: {
            length: 64,
            spread: 12,
          },
        }}
      >
        <button>LEFT</button>
      </Floater>
    </div>
  );
}
