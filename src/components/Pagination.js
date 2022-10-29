import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updatePageNumber } from '../redux';

function Pagination(props) {
  const handleClick = (e) => {
    props.updatePageNumber(e.target.id);
  };

  const previosClick = (e) => {
    props.updatePageNumber(props.pageNumber - 1);
  };

  const nextClick = (e) => {
    props.updatePageNumber(props.pageNumber + 1);
  };

  useEffect(() => {
    props.updatePageNumber(props.pageNumber);
  }, [props.pageNumber]);

  return (
    <>
      {(props.category.match('all')) ? (
        <div>
          <ul className="inline-flex space-x-2">
            {props.pageNumber == 1 ? (
              <></>
            ) : (
              <li onClick={previosClick}>
                <a
                  href="#"
                  className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-600"
                >
                  {'<Previous'}
                </a>
              </li>
            )}

            <li id="1" onClick={handleClick}>
              <a
                href="#"
                id="1"
                className={
                  props.pageNumber == 1
                    ? 'py-2 px-3 leading-tight text-blue-500  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-md ring-2 ring-blue-500'
                    : 'py-2 px-3 leading-tight text-gray-500  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-md'
                }
              >
                1
              </a>
            </li>
            <li id="2" onClick={handleClick}>
              <a
                id="2"
                href="#"
                className={
                  props.pageNumber == 2
                    ? 'py-2 px-3 leading-tight text-blue-500  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-md ring-2 ring-blue-500'
                    : 'py-2 px-3 leading-tight text-gray-500  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 rounded-md'
                }
              >
                2
              </a>
            </li>

            {props.pageNumber == 2 ? (
              <></>
            ) : (
              <li onClick={nextClick}>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:ring-2 focus:ring-blue-600"
                >
                  {'Next>'}
                </a>
              </li>
            )}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pageNumber: state.store.pageNumber,
    category: state.store.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePageNumber: (pageNumber) => dispatch(updatePageNumber(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
