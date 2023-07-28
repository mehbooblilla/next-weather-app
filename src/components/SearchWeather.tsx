import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify'

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addSearchHistory } from '../redux/actions/WeatherAction';
import DisplayData from './displayData';
const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

function SearchWeather() {
    const [city, setCity] = useState<any>('')
    const [weatherData, setWeatherData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    const searchHistory = useSelector((state: any) => state.searchHistory);
    const dispatch = useDispatch();
   
    function getWeather() {
        setIsLoading(true)
        setWeatherData(null)
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl)
            .then((response: any) => {
                setWeatherData(response.data)
                console.log('Weather Data:', response.data);
                setIsLoading(false)
                dispatch(addSearchHistory(city));
                setCity('')

            })
            .catch((error: any) => {
                // Handle any errors that occurred during the request

                toast.error(` ${city} not found`)
                setIsLoading(false)
                console.error('Error fetching weather data:', error);
            });
    }
    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            // Call your function here, e.g., handleSubmit()
            getWeather()

        }
    };
    const handleSearch = () => {
        getWeather()

    }
    console.log(searchHistory, "weatherData")
    return (
        <>
            <div style={{ height: '100vh' }}>
                <div className=' h-full'>
                    <div className='flex justify-center mt-6'>
                        <div className=' p-1 w-96 flex border-gray-700 rounded-2xl ' style={{ border: '1px solid' }}>
                            <input className='bg-transparent w-80 pl-2 focus:outline-none placeholder-gray-700' type="text" name='searchHistory' placeholder='Search by city...'
                                value={city} onChange={(event) => { setCity(event?.target.value) }}
                                onKeyPress={handleKeyPress}

                            />
                        
                            <div className='flex justify-center  text-gray-700 items-center p-2.5'>
                                <BsSearch className='cursor-pointer' fontSize={30} onClick={handleSearch} />
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 px-3 py-2">

                        </div>
                    </div>
                    {!isLoading && weatherData &&
                     <DisplayData weatherData={weatherData}/>
                    }
                </div>
            </div>

        </>
    )
}
export default SearchWeather