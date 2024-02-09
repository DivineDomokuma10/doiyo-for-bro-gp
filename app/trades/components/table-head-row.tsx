import React, { ReactNode } from 'react';
import { TableRow } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';

import { TableHeadData } from './table.styles';
import { TABLE_HEAD_TITLES } from '../../utils/constants';

const TableHeadRow = (): ReactNode => {
  return (
    <TableRow>
      {TABLE_HEAD_TITLES.map(({ text, hasArrow }) => (
        <TableHeadData key={text}>
          {text.toUpperCase()} {hasArrow && <ArrowDownward fontSize="inherit" />}
        </TableHeadData>
      ))}
    </TableRow>
  );
};

export default TableHeadRow;
