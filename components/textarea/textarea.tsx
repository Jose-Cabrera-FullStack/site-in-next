import React from 'react'

import {
  InputContainer,
  Label,
  StyledTextarea
} from './textarea.styles'

import { classes, isTextValid } from '../../helpers'

interface Props {
  name: string;
  label: {
    text: string;
  }
  input :{
    required: boolean;
    placeholder: string;
    value?: string;
    error?: boolean;
  }
  onChange?: any;
}

export const Textarea = ({name, label: {text}, input: {required = false, placeholder, value = '', error = false}, onChange}: Props) => {
  const [errorInner, setError] = React.useState(error);
  const [cValue, setValue] = React.useState(value);

  const handleChange = React.useCallback((e)=> {
    if(onChange) {onChange(e)}
    setValue(e.target.value)
  }, [onChange])

  const validate = () => {
    setError(!isTextValid(cValue, 'text'))
  }

  React.useEffect(() => {
    setError(error)
  }, [error, setError])

  return (
    <InputContainer>
      <Label htmlFor={name}>{text}</Label>
      <StyledTextarea 
        className={classes({errorInner})}
        required={required}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={validate}
        value={value}
      />
    </InputContainer>
  )
}