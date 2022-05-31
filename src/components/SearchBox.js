import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        // codigo html 
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue tc' 
                type='search' 
                placeholder='serach robots'
                onChange={searchChange} 
            />
        </div>
    );
}

export default SearchBox;