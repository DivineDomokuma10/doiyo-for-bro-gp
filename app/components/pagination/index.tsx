import React, { ReactElement, ReactNode } from 'react';
import { Pagination, PaginationRenderItemParams } from '@mui/material';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';

import { open_sans } from '../../utils/fonts';
// import { NUMBERS } from '../../utils/constants';
import { getNumberOfPages } from './helperMethods';
import { PaginationWrapper, StyledPaginationItem } from './pagination.styles';
import { NUMBERS } from '../../utils/constants';

interface Props {
  totalItems: number;
  currentPage: number;
  children: ReactNode;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Paginator = ({
  children,
  currentPage,
  totalItems,
  handleChangePage
}: Props): ReactElement => {
  const pageCount = getNumberOfPages(totalItems);

  const renderItem = (item: PaginationRenderItemParams): ReactNode => {
    if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
      return null;
    }
    return (
      <StyledPaginationItem
        {...item}
        slots={{ first: KeyboardDoubleArrowLeft, last: KeyboardDoubleArrowRight }}
      />
    );
  };

  return (
    <>
      {children}
      {totalItems > NUMBERS.NINE && (
        <PaginationWrapper>
          <Pagination
            size="small"
            showLastButton
            showFirstButton
            siblingCount={0}
            page={currentPage}
            variant="outlined"
            count={pageCount}
            onChange={handleChangePage}
            className={open_sans.className}
            renderItem={renderItem}
          />
        </PaginationWrapper>
      )}
    </>
  );
};

export default Paginator;
