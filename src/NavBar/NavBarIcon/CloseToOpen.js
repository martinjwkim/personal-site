import React, { useState } from 'react';
import { Stack } from 'grommet';

function CloseToOpen() {

  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <Stack>
      <div className={isAnimating? 'cto-top' : 'open-top'} onAnimationEnd={()=>setIsAnimating(false)}></div>
      <div className={isAnimating? 'cto-mid' : 'open-mid'}></div>
      <div className={isAnimating? 'cto-bot' : 'open-bot'}></div>
    </Stack>
  );
}

export default CloseToOpen;