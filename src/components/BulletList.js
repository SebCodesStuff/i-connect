import React from 'react';

function BulletList({content}) {
  const { title, points } = content;
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
