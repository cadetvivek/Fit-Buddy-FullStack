import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseField, setResponseField] = useState([]);
  const [imageContainer, setImageContainer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const numberPerPage = 4;

  const url = 'https://www.googleapis.com/customsearch/v1?';
  const apiKey = 'key=AIzaSyDiAg6Yx4YPLvlLDwPXH0pD2blULPBk03A';
  const cx = '&cx=008993671637674012003:y7jt0xhysdv';

  const validateForm = () => {
    if (!inputValue.trim()) {
      return false;
    }
    return true;
  };

  const getSuggestions = async () => {
    const query = inputValue;
    const endpoint = `${url}${apiKey}${cx}&q=${query}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      if (data.items) {
        paginateResults(data.items);
      } else {
        setResponseField(['Try again! There were no suggestions found!']);
        setImageContainer([]);
      }
    } catch (error) {
      setResponseField(['Error fetching data']);
      setImageContainer([]);
    }
  };

  const paginateResults = (data) => {
    const list = [];
    const imgList = [];

    data.forEach((item) => {
      const imageUrl = item.pagemap?.cse_image?.[0]?.src ||
        'https://www.ggf.org.uk/wp-content/uploads/2018/03/jpg-icon.png';

      imgList.push(
        <img src={imageUrl} alt="result" key={item.link} height="120px" width="auto" />
      );

      list.push(
        <div className="searchResultItem" key={item.link}>
          <div className="resultItemHeader">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </div>
          <div className="resultItemBody">{item.snippet}</div>
        </div>
      );
    });

    setResponseField(list);
    setImageContainer(imgList);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (validateForm()) {
      getSuggestions();
    }
  };

  return (
    
      <div>
      <header>
        <div className="logo">
          {/* <img
            src="http://localhost:5173/src/assets/images/logo.png"
            alt="FitnessBuddy Logo"
            height="80vh"
          /> */}
                    <h3>Search here about Fitness</h3>

        </div>
        <form className="searchBar" onSubmit={handleSearch}>
          <input
            className="searchInput"
            placeholder="Type here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="searchButton">
            SEARCH
          </button>
        </form>
      </header>
      <section className="mainBody">
        <div className="searchImageResult">{imageContainer}</div>
        <div className="searchResult">{responseField}</div>
      </section>
      <form className="pageButtons">
        <button id="first" onClick={() => setCurrentPage(1)}>{'<<'}</button>
        <button id="previous" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>{'<'}</button>
        <button id="next" onClick={() => setCurrentPage((prev) => prev + 1)}>{'>'}</button>
        <button id="last" onClick={() => setCurrentPage(100)}>{'>>'}</button>
      </form>
      </div>
    
  );
};

export default Search;
