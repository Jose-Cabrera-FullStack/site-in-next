import React from 'react'

import {
  InputContainer,
  Label,
  StyledInput
} from './input.styles'

import { classes, isTextValid } from '../../helpers'

interface Props {
  name: string;
  label?: {
    text?: string;
    style?: string;
  }
  input :{
    type: string;
    required: boolean;
    placeholder: string;
    value?: string;
    error?: boolean;
    disabled?: boolean;
  }
  onChange?: any;
}

export const Input = ({name, label = {}, input: {type = 'text', required = false, placeholder, value = '', error = false, disabled = false}, onChange}: Props) => {
  const [errorInner, setError] = React.useState(error);
  const [cValue, setValue] = React.useState(value);

  const handleChange = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    if(onChange) {onChange(e)}
    setValue(e.currentTarget.value)
  }, [onChange])

  const validate = () => {
    setError(!isTextValid(cValue, type))
  }

  React.useEffect(() => {
    setError(error)
  }, [error, setError])

  return (
    <InputContainer>
      {label.text && <Label htmlFor={name} className={label.style}>{label.text}</Label>}
      <StyledInput 
        type={type}
        className={classes({error: errorInner})}
        required={required}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={validate}
        value={value}
        disabled={disabled}
      />
    </InputContainer>
  )
}