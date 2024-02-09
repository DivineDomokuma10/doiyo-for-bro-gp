import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DropdownWrapper } from './dropdown.styles';
import { forwardRef } from 'react';
import { FormLabelText } from '../../styles/text.styles';
import { SelectItemInterface } from '../../utils/interfaces/generic.interface';
import { NUMBERS } from '../../utils/constants';

interface DropdownProps {
  items: SelectItemInterface[];
  name: string;
  onChange: (value: string) => void;
  width?: string;
  label?: string;
  value: string;
  isDisabled?: boolean;
  placeHolder?: string;
  height?: number;
}

const Dropdown: React.ForwardRefExoticComponent<DropdownProps> = forwardRef(
  ({ items, name, onChange, value, isDisabled, label, width, placeHolder, height }, ref) => {
    const handleChange = (event: SelectChangeEvent<string>): void => {
      onChange(event.target.value);
    };

    return (
      <DropdownWrapper sx={{ m: 'auto', width }}>
        <FormLabelText>{label}</FormLabelText>
        <Select
          sx={{ height: height || NUMBERS.FORTY }}
          ref={ref}
          name={name}
          onChange={handleChange}
          value={value || 'select'}
          disabled={isDisabled}>
          <MenuItem disabled value="select">
            <em>{placeHolder || 'Select'}</em>
          </MenuItem>
          {items?.map(({ name, value, label }, i) => (
            <MenuItem key={i} value={value}>
              {name || label}
            </MenuItem>
          ))}
        </Select>
      </DropdownWrapper>
    );
  }
);

Dropdown.displayName = 'DropDown';

export default Dropdown;
