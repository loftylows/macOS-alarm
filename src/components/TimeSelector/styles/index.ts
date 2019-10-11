import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0;
`;

export const StyledInputLabel = styled.label`
  font-size: 18px;
  line-height: 24px;
  margin: 6px 12px;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  font-size: inherit;
  border: none;
  -webkit-appearance: none;
  padding: 11px;
  outline: none;
  background: transparent;
  color: inherit;
  font-weight: 600;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.33);
  border-radius: 0px;
  width: 100%;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.33);
  transition: all 0.1s ease-out;
  :active {
    border-bottom: solid 1px rgb(111 255 176);
  }
  :focus {
    border-bottom: solid 1px rgb(111 255 176);
  }
`;
