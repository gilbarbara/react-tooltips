import React from 'react';
import Floater from 'react-floater';

export default function AutoOpen({ cb }: any) {
  return (
    <div>
      <Floater
        autoOpen
        callback={cb}
        content={
          <div>
            <p>React Floater is super easy to use and customize.</p>
            <p>
              It's powered by{' '}
              <a href="https://popper.js.org/" target="_blank" rel="noopener noreferrer">
                popper.js
              </a>{' '}
              to position the elements
            </p>
          </div>
        }
        placement="top"
      >
        <button>TOP</button>
      </Floater>
      <p>autoOpen</p>
    </div>
  );
}
