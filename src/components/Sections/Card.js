import React from 'react';

const Card = ({item}) => {
    return (
        <div className='CardWrap'>
            <a href={item.url}>
                <div className='imgBox'>
                    <img src={item.urlToImage} alt='images' />
                </div>
                <div className='textBox'>
                    <h4>{item.title}</h4>
                </div>
            </a>
        </div>
    );
};

export default Card;
