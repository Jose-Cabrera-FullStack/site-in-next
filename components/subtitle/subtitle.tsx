import React from 'react';

import {
  SubtitleH3
} from './subtitle.styles'

interface Props {
  title?: string;
  children?: any;
}

export const Subtitle = ({title, children}: Props) => (
  <SubtitleH3>{title ? title : children}</SubtitleH3>
)