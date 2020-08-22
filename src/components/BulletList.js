import React from 'react';

function BulletList(props) {
  const { title, points } = props;
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {points.map(point => {
          return <li>{point}</li>
        })}
      </ul>
    </>
  );
}

export default BulletList;
