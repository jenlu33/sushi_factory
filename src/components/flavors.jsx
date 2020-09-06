import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

function Flavors(props) {
  return (
    <div className="flavors-container">
      <h1>Flavors</h1>
      <div className="tea-keys">
        <p><StarIcon /> Popular</p>
        <p><LocalCafeIcon /> Available Hot</p>
      </div>
      <div className='tea-flavors'>
        {props.flavors.map((flavor, i) => (
          <div key={`flavor ${i}`} className='tea-flavors-item'>
            {flavor.favorite && <StarIcon />}
            {flavor.hot && <LocalCafeIcon />}
            <p>{flavor.flavor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavors;