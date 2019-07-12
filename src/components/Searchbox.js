import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input
            className=' tc pa3 ba b--green bg-light-green' 
            type='search' 
            placeholder='search robofriend'
            onChange={searchChange} 
            />
        </div>
    )
}

export default Searchbox;