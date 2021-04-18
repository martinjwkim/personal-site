import React, { useState } from 'react';
import { Stack } from 'grommet';

function OpenToClose() {

  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <Stack>
      <div className={isAnimating? 'otc-top' : 'close-top'} onAnimationEnd={()=>setIsAnimating(false)}></div>
      <div className={isAnimating? 'otc-mid' : 'close-mid'}></div>
      <div className={isAnimating? 'otc-bot' : 'close-bot'}></div>
    </Stack>
  );
}

export default OpenToClose;