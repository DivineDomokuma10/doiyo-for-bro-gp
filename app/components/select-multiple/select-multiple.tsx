import { SelectItemInterface } from '../../utils/interfaces/generic.interface';
import { DropdownWrapper } from '../dropdown/dropdown.styles';
import { FormLabelText } from '../../styles/text.styles';
interface Props {
  label?: string;
  width: string;
  options: SelectItemInterface[];
  placeholder?: string;
  handleChange: (value: string[]) => void;
  openModal?: () => void;
  isShowAddBtn?: boolean;
  btnText?: string;
}

import React, { ReactElement, useState } from 'react';
import Select, { GroupBase, MenuProps, OnChangeValue, components } from 'react-select';
import AddAccountPanel from '../add-account-panel/add-payment-panel';
import { NUMBERS } from '../../utils/constants';
import { getSelectedPaymentMethod } from '../../dashboard/helperMethods';
import { Button } from '@mui/material';

interface CustomMenuProps
  extends MenuProps<SelectItemInterface, true, GroupBase<SelectItemInterface>> {
  children: React.ReactNode;
  openModal?: () => void;
  isShowAddBtn?: boolean;
  btnText?: string;
}

const Menu = (props: CustomMenuProps): ReactElement => {
  const { children, getValue, options, openModal, isShowAddBtn, btnText } = props;

  const selectedOptions = getValue();
  const isOptionsEmpty = options && options.length === NUMBERS.ZERO;

  if (!isOptionsEmpty) {
    return (
      <components.Menu {...props}>
        {children}
        {isShowAddBtn && (
          <Button
            onClick={openModal}
            onTouchStartCapture={openModal}
            sx={{ textTransform: 'inherit', width: '100%', height: '44px', cursor: 'pointer' }}
            variant="contained">
            {btnText ? btnText : 'Add a new Payment method'}
          </Button>
        )}
      </components.Menu>
    );
  }

  if (isOptionsEmpty && selectedOptions.length === NUMBERS.ZERO) {
    return (
      <components.Menu {...props}>
        {openModal && <AddAccountPanel openModal={openModal} />}
      </components.Menu>
    );
  }

  return <components.Menu {...props}>{children}</components.Menu>;
};

const MultipleSelect = ({
  options,
  width,
  label,
  placeholder,
  handleChange,
  openModal,
  isShowAddBtn,
  btnText
}: Props) => {
  const [value, setValue] = useState<readonly SelectItemInterface[]>([]);

  const onChange = (newValue: OnChangeValue<SelectItemInterface, true>) => {
    const paymentMethods = getSelectedPaymentMethod(newValue as SelectItemInterface[]);
    handleChange(paymentMethods);
    setValue(newValue);
  };

  return (
    <DropdownWrapper sx={{ width }}>
      {label && <FormLabelText>{label}</FormLabelText>}
      <Select
        isMulti
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        components={{
          Menu: (props) => (
            <Menu {...props} isShowAddBtn={isShowAddBtn} btnText={btnText} openModal={openModal} />
          )
        }}
      />
    </DropdownWrapper>
  );
};

export default MultipleSelect;
