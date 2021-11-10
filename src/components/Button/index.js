// src/components/QuizBackground/index.js
import styled from 'styled-components';
import React from 'react';

export const ButtonBase = styled.button` 
  width: 100%;  
  margin-bottom: 10px;
  padding: 15px;
  font-size : 14px ;
  margin-right: 10% ;
  color: ${({ theme }) => theme.colors.contrastText};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.colors.borderRadius};;  
`;


export function Button(){
return(
  <div>
    <ButtonBase />
  </div>
)}

