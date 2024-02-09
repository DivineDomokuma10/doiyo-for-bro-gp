import { NUMBERS } from '../../utils/constants';

export const getNumberOfPages = (totalItem: number): number => Math.ceil(totalItem / NUMBERS.NINE);
