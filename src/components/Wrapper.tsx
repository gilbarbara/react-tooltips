import * as React from 'react';
import is from 'is-lite';
import { HandlerFunction } from '../types';

interface Props {
  childRef: React.Ref<HTMLElement>;
  children: React.ReactNode;
  handleClick: HandlerFunction<HTMLSpanElement>;
  handleMouseEnter: HandlerFunction<HTMLSpanElement>;
  handleMouseLeave: HandlerFunction<HTMLSpanElement>;
  style?: React.CSSProperties;
  styles: React.CSSProperties;
  wrapperRef: React.Ref<HTMLSpanElement>;
}

export default function ReactFloaterWrapper(props: Props): JSX.Element | null {
  const {
    children,
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
    childRef,
    wrapperRef,
    style,
    styles,
  } = props;
  let element;

  /* istanbul ignore else */
  if (children) {
    if (React.Children.count(children) === 1) {
      if (React.isValidElement(children)) {
        const refProp = is.function(children.type) ? 'innerRef' : 'ref';
        element = React.cloneElement(React.Children.only(children), {
          [refProp]: childRef,
        });
      } else {
        element = <span>{children}</span>;
      }
    } else {
      element = children;
    }
  }

  if (!element) {
    return null;
  }

  return (
    <span
      ref={wrapperRef}
      style={{ ...styles, ...style }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {element}
    </span>
  );
}
