import React, { ReactElement, ReactNode } from 'react';
import { Dialog } from '@mui/material';
import { ModalWrapper } from './modals.styles';

export interface Props {
  open: boolean;
  items?: string;
  width?: string;
  children: ReactNode;
  onClose?: () => void;
  direction?: 'row' | 'column';
}

const Modal = ({ width, onClose, open, items, children, direction }: Props): ReactElement => {
  return (
    <Dialog open={open} onClose={onClose} sx={{ backgroundColor: 'rgba(107, 128, 111, 0.4)' }}>
      <ModalWrapper $width={width} $items={items} $direction={direction}>
        {children}
      </ModalWrapper>
    </Dialog>
  );
};

export default Modal;
