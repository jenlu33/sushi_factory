import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

function Flavors(props) {
  return (
    <div>
      <h1>Flavors</h1>
      <div>
        <p><StarIcon /> Popular</p>
        <p><LocalCafeIcon /> Available Hot</p>
      </div>
      <div className='tea-flavors'>
        {props.flavors.map((flavor) => (
          <div className='tea-flavors-item'>
            <p>{flavor.favorite && <StarIcon />}</p>
            <p>{flavor.hot && <LocalCafeIcon />}</p>
            <p>{flavor.flavor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavors;