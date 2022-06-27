import React from 'react';
import Card from './Card';
import List from './List';
import './Section.scss';

const Section = ({ data, array }) => {
  return (
    <div className='section'>
      {data && array && data.map((item, idx) => {
        if (array.filter(num => idx === num).length > 0) {
          return <Card key={idx} idx={idx} item={item} />
        } else {
          return <List key={idx} idx={idx} item={item} />
        }
      })}
    </div>
  );
};

export default Section;
