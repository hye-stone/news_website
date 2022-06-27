import React from 'react';

const List = ({ item }) => {
    return (
        <div className='listWrap'>
            <a href={item.url}>
                <span>{item.title}</span>
            </a>
        </div>
    );
};

export default List;
