import React, {useState} from "react";
import {Component} from "react";
import axios, {Axios} from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './components/style.css'

const App = () =>   {
    const [data,setData] = useState({})
    const [location,setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4d933ecdcc5c3719262c493f7ee92a7e&units=imperial`
    console.log(url)

    const search = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })

        }
    }

        return (
            <div className={'app'}>

                <input className={'search'}
                value={location}
                placeholder={'Search Cities'}
                onKeyPress={search}
                onChange={event => setLocation(event.target.value)}/>
                <div className={'container'}>
                    <div className={'header'}>
                        <p>{data.name}</p>
                        <div>
                        {data.main ? <h1>{data.main.temp}°F</h1> : null}
                        </div>
                        <div>
                            {data.weather ? <p>{data.weather[0].main}</p> : null}
                        </div>
                    </div>
                    <div className={'footer'}>
                        <div>
                            <div className={'bold'}>
                                {data.main ? <p>{data.main.feels_like}°F</p> : null}
                            </div>
                            <p>Feels like</p>
                        </div>
                        <div>
                            <div className={'bold'}>
                                {data.main ? <p>{data.main.humidity}</p> : null}
                            </div>
                            <p>Humidity</p>
                        </div>
                        <div>
                            <div className={'bold'}>
                                {data.wind ? <p>{data.wind.speed} MPH</p> : null}
                            </div>
                            <p>Wind</p>
                        </div>

                    </div>
                </div>
            </div>
        );

}

export default App
