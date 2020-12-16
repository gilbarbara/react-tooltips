import React, { useEffect } from 'react';
import Floater from 'react-floater';

export default React.forwardRef<HTMLDivElement, any>(({ onMount }, ref) => {
  useEffect(() => {
    onMount();
  }, [onMount]);

  return (
    <div className="target" ref={ref}>
      <Floater event="hover" content="I have a click event to my repo!" placement="top">
        <a
          href="https://github.com/gilbarbara/react-floater"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.svgporn.com/logos/github-icon.svg"
            alt="GitHub"
            className="github"
          />
        </a>
      </Floater>
    </div>
  );
});
