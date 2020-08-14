import React from 'react';

import {
  TitleH1,
  TitleH2,
  TitleH3,
} from './title.styles'

interface Props {
  title?: string;
  color: 'blue' | 'white';
  element: 'h1' | 'h2' | 'h3';
  children?: any;
}

export const Title = ({title, color, element, children}: Props) => {
  let _r = undefined;
  switch(element){
    case 'h1':
      _r = <TitleH1 className={color}>{title ? title : children}</TitleH1>
      break;
    case 'h2':
      _r = <TitleH2 className={color}>{title ? title : children}</TitleH2>
      break;
    case 'h3':
      _r = <TitleH3 className={color}>{title ? title : children}</TitleH3>
      break;
  }
  return _r
  // return React.createElement(element, {color}, title)
}