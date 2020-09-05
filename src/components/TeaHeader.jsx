import React from 'react';
import TeaPricing from './teaPricing';

function TeaHeader(props) {
  const { menuType } = props
  return(
    <div>
      <TeaPricing prices={menuType} />
    </div>
  )
};

export default TeaHeader;