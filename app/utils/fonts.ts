import LocalFont from 'next/font/local';

import { Inter, Open_Sans, Plus_Jakarta_Sans } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const open_sans = Open_Sans({ subsets: ['latin'] });

export const carnero = LocalFont({ src: '../fonts/Carnero Regular.otf' });

export const carneroBold = LocalFont({ src: '../fonts/Carnero Bold.otf' });

export const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });
