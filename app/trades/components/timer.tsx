import Image from 'next/image';
import React, { ReactElement, useEffect, useState } from 'react';

import { plusJakartaSans } from '../../utils/fonts';
import { FlexWrapper } from '../../styles/layout.styles';
import { CustomizableText } from '../../styles/text.styles';
import { NUMBERS } from '../../utils/constants';
import { calculateInitialTime } from '../helperMethods';

const Timer = ({
  expiresIn,
  createdAt
}: {
  expiresIn?: string;
  createdAt?: string;
}): ReactElement => {
  const initialTime = calculateInitialTime(expiresIn, createdAt);
  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update time every second
      setTime((prevTime) => Math.max(prevTime - NUMBERS.ONE, NUMBERS.ZERO));
    }, NUMBERS.ONE_THOUSAND);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(time / NUMBERS.SIXTY);
  const seconds = time % NUMBERS.SIXTY;

  return (
    <FlexWrapper $desktop={{ $direction: 'row', $spaceX: '5px', $items: 'center' }}>
      <Image src={'/timerIcon.svg'} alt="" width={16} height={16} />

      <CustomizableText $color="#999" $size="12px" $fontWeight="400">
        Time Remaining
      </CustomizableText>

      <CustomizableText
        className={plusJakartaSans.className}
        $color="#000759"
        $size="12px"
        $fontWeight="700">
        {`${minutes}:${
          Math.floor(seconds) < NUMBERS.TEN ? `0${Math.floor(seconds)}` : Math.floor(seconds)
        }`}
      </CustomizableText>
    </FlexWrapper>
  );
};
export default Timer;
