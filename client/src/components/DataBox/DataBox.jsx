import React, { useState } from 'react';
import './DataBox.css';
import find from '../../assets/icons/search.png';
function DataBox() {
  const [fetchedData, setFetchedData] = useState('');
  const [searchClicked, setSearchClicked] = useState('');
  const [cityName, setCityName] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const cnt = 8;
  //TO BE HIDDEN LATER
  const apiID = process.env.REACT_APP_API_KEY;

  const submitForm = function (e) {
    e.preventDefault();
    fetchWeatherData().then(fetchForecastData());

    // fetchForecastData();
  };
  async function fetchWeatherData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        console.log(data);
        setSearchClicked('clicked');
      }).then(() => {
         setLat(fetchedData.coord.lat);
         setLon(fetchedData.coord.lon);
      })
      .catch((error) => {
        setSearchClicked('');
        console.error(error);
      });
  }

  async function fetchForecastData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setSearchClicked('');
        console.error(error);
      });
  }
  return (
    <>
      <div className='main-weather-section-left bg'>
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
      </div>

      <div className='main-weather-section-right'>
        <div className='top'></div>
      </div>
    </>
  );
}

export default DataBox;
