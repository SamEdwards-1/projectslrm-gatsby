import * as React from 'react';

const BreakpointHint = () => {

  return (
    <div className={'fixed bottom-0 right-0  text-white text-centertext-xs'}>
      <div className={'block sm:hidden bg-red-600  p-2 rounded'}>xs</div>
      <div className={'hidden sm:block md:hidden bg-green-600  p-2 rounded'}>sm</div>
      <div className={'hidden md:block lg:hidden bg-purple-600 p-2 rounded '}>md</div>
      <div className={'hidden lg:block xl:hidden bg-indigo-600 p-2 rounded'}>lg</div>
      <div className={'hidden xl:block bg-yellow-600 p-2 rounded'}>xl</div>
    </div>
  );

};

export default BreakpointHint;