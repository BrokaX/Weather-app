import React, { useState } from 'react';
import './DataBox.css';
import find from '../../assets/icons/search.png';
function DataBox() {
  const [fetchedData, setFetchedData] = useState('');
  const [searchClicked, setSearchClicked] = useState('');
  const [cityName, setCityName] = useState('');
  let lat;
  let lon;
  const cnt = 8;
  //TO BE HIDDEN LATER
  const apiID = process.env.REACT_APP_API_KEY;

  const submitForm = function (e) {
    e.preventDefault();

    fetchWeatherData();

    // fetchForecastData();
  };
  function fetchWeatherData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        setSearchClicked('clicked');
      })
      .catch((error) => {
        setSearchClicked('');
        console.log(error);
      });
  }

  // const icn = fetchedData.weather[0].icon;
  // const icnBg = fetchedData.weather[0].main;
  // lat = fetchedData.coord.lat;
  // lon = fetchedData.coord.lon;
  // const tempFahrenheit = Math.round((fetchedData.main.temp / 5) * 9 + 32);
  // const bg = `url("./assets/${icnBg}.jpg")`;
  // const city = fetchedData.name;
  // const degree = Math.round(fetchedData.main.temp) + '&#176;';
  // const icon = `http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}@2x.png`;
  // const iconTitle = icnBg;

  function fetchForecastData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (

      <div className='top'>
        <form action=''>
          <div className='form-container'>
            <button id='find' onClick={submitForm}>
              <img src={find} alt='Search icon' />
            </button>
            <input
              onChange={(e) => setCityName(e.target.value)}
              id='search'
              type='text'
              value={cityName}
              name='cityName'
              placeholder='City name'
            />
          </div>
        </form>
        {searchClicked === 'clicked' && (
          <>
            <img
              key={'value'}
              id='icon'
              src={`http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}@2x.png`}
              alt=''
            />
            <h3>{fetchedData.weather[0].main}</h3>
            <h2 id='degree'>{Math.round(fetchedData.main.temp) + ' ℃'} </h2>
            <div className='general-info'>
              <h2 id='city'>{fetchedData.name}</h2>
              <p id='date'>{new Date().toDateString()}</p>
            </div>
          </>
        )}
      </div>
  );
}

export default DataBox;
