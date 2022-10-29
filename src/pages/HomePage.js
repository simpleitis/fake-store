import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import { connect } from 'react-redux';
import { storeData, updatePageNumber } from '../redux';
import Pagination from '../components/Pagination';
import Button from '../components/Button';

function HomePage(props) {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [keyword, setKeyword] = useState('');

  const categories = [
    "men's clothing",
    'jewelery',
    'electronics',
    "women's clothing",
    'all',
  ];

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const fetchData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setData(data);
  };

  const filterData = () => {
    let modifiedData;
    if (props.category == 'all' && keyword == '') {
      return data;
    } else {
      if (keyword == '') {
        return data.filter((product) => product.category === props.category);
      } else if (props.category == 'all') {
        return data.filter((product) =>
          product.title.toLowerCase().includes(keyword.toLowerCase())
        );
      } else {
        return data
          .filter((product) => product.category == props.category)
          .filter((product) =>
            product.title.toLowerCase().includes(keyword.toLowerCase())
          );
      }
    }
  };

  useEffect(() => {
    props.storeData(data);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (props.pageNumber == 1) {
      setStartIndex(0);
      setEndIndex(10);
    } else if (props.pageNumber == 2) {
      setStartIndex(10);
      setEndIndex(20);
    }
    filterData();
  }, [props.pageNumber, keyword]);

  return (
    <div className="px-10">
      <div className='flex flex-wrap gap-x-5'>
        {categories.map((category) => {
          return <Button key={category} data={category} />;
        })}
      </div>
      <form className="my-5">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Search..."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 lg:grid-cols-6 2xl:grid-cols-10 2xl:gap-10 mt-10 mb-10">
        {filterData()
          .slice(startIndex, endIndex)
          .map((product) => {
            return <ItemCard key={product.id} product={product} />;
          })}
      </div>
      <center>
        <Pagination />
      </center>
    </div>
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
    storeData: (data) => dispatch(storeData(data)),
    updatePageNumber: (pageNumber) => dispatch(updatePageNumber(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
