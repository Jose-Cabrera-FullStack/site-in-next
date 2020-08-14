import React from 'react';
import Link from 'next/link';

import { 
  StyledButton,
  StyledLink
} from './button.styles'

import { classes } from '../../helpers'

interface Props {
  title?: string;
  color: 'orange' | 'blue' | 'lightBlue' | 'lightOrange' | 'darkBlue' | '';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: any;
  to?: string;
  disabled?: boolean;
  loading?: boolean;
}

const LoadingSVG = () => (
  <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg" stroke="#fff" viewBox="0 0 38 38"><g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd"><circle strokeOpacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></svg>
)

export const Button = ({title, color = '', onClick = () => {}, className, children, to, disabled = false, loading = false}: Props) => {
  return (to ? 
    <Link href={to} passHref>
      <StyledLink className={classes(className, color, {loading})}>
        {loading ? <LoadingSVG /> : (title ? title : children)}
      </StyledLink>
    </Link> :
    <StyledButton className={classes(className, color, {loading})} onClick={(e: any) => onClick(e)} disabled={disabled}>
      {loading ? <LoadingSVG /> : (title ? title : children)}
    </StyledButton>
  )
}