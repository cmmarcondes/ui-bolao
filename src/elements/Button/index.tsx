import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { Container } from './styles';

const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => <Container {...rest}>{children}</Container>;

export default Button;
