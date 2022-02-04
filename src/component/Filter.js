import React from 'react';

const Filter = (props) => {
  return (
      <>
      <select name="products" id="product" className='w-50'>
          <option value="">{props.title}</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
      </select>
      </>
  )
};

export default Filter;
