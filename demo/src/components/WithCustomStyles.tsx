import React from 'react';
import Floater from 'react-floater';

export default function WithCustomStyles({ cb }: any) {
  return (
    <div>
      <Floater
        callback={cb}
        title={
          <h3 style={{ margin: '0 0 5px', lineHeight: 1 }}>
            I'm super customizable{' '}
            <span role="img" aria-label="Smile with Sunglasses">
              😎
            </span>
          </h3>
        }
        content={
          <div>
            You can change the UI completely. Also control placement, offset, flip and much more.
          </div>
        }
        footer="I should move down on mobile"
        placement="right-end"
        offset={0}
        styles={{
          floater: {
            filter: 'none',
          },
          container: {
            backgroundColor: '#000',
            borderRadius: 5,
            color: '#fff',
            filter: 'none',
            minHeight: 'none',
            maxWidth: 100,
            padding: 10,
            textAlign: 'right',
          },
          arrow: {
            color: '#000',
            length: 8,
            spread: 10,
          },
        }}
      >
        <button>RIGHT</button>
      </Floater>
    </div>
  );
}
