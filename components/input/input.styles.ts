import styled from '@emotion/styled'

export const InputContainer = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Label = styled.label`
  color: ${({theme}: any) => theme.colors.gray3};
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 10px;
  &.light{
    color: ${({theme}: any) => theme.colors.gray2};
    font-weight: normal;
  }
`

export const StyledInput = styled.input`
  &&{
    width: 100%;
    border: 1px solid ${({theme}: any) => theme.colors.gray4};
    border-radius: 5px;
    color: ${({theme}: any) => theme.colors.gray3};
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.03em;
    padding: 6px 10px;
    transition: border-color .2s ease-out;
    &::placeholder{
      color: ${({theme}: any) => theme.colors.gray4};
      opacity: 1;
    }
    &:focus, &:active{
      border-color: ${({theme}: any) => theme.colors.focus};
    }
    &.error{
      border-color: ${({theme}: any) => theme.colors.error};
    }
  }
`