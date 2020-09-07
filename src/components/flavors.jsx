import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

function Flavors(props) {
  const {title, flavors} = props;
  return (
    <div className="flavors-container">
      <div className="flavors-title-container">
        <div className="flavors-title-background">
          <h1 className="flavors-title">Flavors</h1>
        </div>
      </div>
      <div className="tea-keys">
        <p><StarIcon /> Popular</p>
        {title === "Bubble Tea" &&
          <p><LocalCafeIcon /> Available Hot</p>}
      </div>
        {title === "Shaken Iced Tea" &&
          <p style={{textAlign:"center"}}>All iced teas also available hot</p>}
      <div className='tea-flavors'>
        {flavors.map((flavor, i) => (
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