import React from 'react';
import { connect } from 'react-redux';
import { updateCategory, updatePageNumber } from '../redux';

function Button(props) {
  const handleClick = async (e) => {
    props.updateCategory(e.target.value);
    props.updatePageNumber(1);
  };

  return (
    <button
      type="button"
      className="border border-blue-500 mt-10 p-3 rounded-full text-blue-500 font-bold shadow-sm hover:text-white hover:bg-blue-500 sm:mr-10"
      value={props.data}
      onClick={handleClick}
    >
      {props.data}
    </button>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateCategory: (category) => dispatch(updateCategory(category)),
    updatePageNumber: (pageNumber) => dispatch(updatePageNumber(pageNumber)),
  };
};

export default connect(null, mapDispatchToProps)(Button);
