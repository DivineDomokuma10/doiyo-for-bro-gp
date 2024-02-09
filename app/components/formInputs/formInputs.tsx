'use client';
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import {
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  FormControl,
  IconButton
} from '@mui/material';

import { useState } from 'react';
import { PasswordInputWrapper } from './form.styles';
import { FormLabelText } from '../../styles/text.styles';

interface InputProps<T extends FieldValues> {
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  name: string;
  errors: FieldErrors<T>;
  options?: RegisterOptions;
  type?: string;
}

export function TextInput<T extends FieldValues>({
  label,
  placeholder,
  register,
  name,
  errors,
  type
}: InputProps<T>) {
  const isError = errors[name]?.message ? true : false;
  const errorMessage = errors[name] && errors[name]?.message + '';

  return (
    <FormControl sx={{ mb: 2, width: '100%' }} variant="outlined">
      <FormLabelText>{label}</FormLabelText>
      <OutlinedInput
        type={type || 'text'}
        error={isError}
        {...register(name as Path<T>)}
        placeholder={placeholder}
      />
      {isError && <FormHelperText sx={{ color: 'red' }}>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export function PasswordInput<T extends FieldValues>({
  placeholder,
  register,
  errors,
  label,
  name
}: InputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show: boolean) => !show);

  const isError = errors[name]?.message ? true : false;
  const errorMessage = errors[name] && errors[name]?.message + '';

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <PasswordInputWrapper sx={{ mb: 2, width: '100%' }} variant="outlined">
      <FormLabelText>{label}</FormLabelText>
      <OutlinedInput
        error={isError}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        {...register(name as Path<T>)}
      />
      {isError && <FormHelperText sx={{ color: 'red' }}>{errorMessage}</FormHelperText>}
    </PasswordInputWrapper>
  );
}
