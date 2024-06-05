import React from "react";
import "../App.css";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../redux/actions/weatherActions";
import { setTasks } from "../redux/actions/taskActions";
import { useEffect } from "react";

function Homepage() {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.weather);
  const weatherError = useSelector((state) => state.weather.error);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch(setTasks(storedTasks));
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>To-Do Application</h1>
      <TaskInput />
      <TaskList />
      <button onClick={handleLogout}>Logout</button>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      ) : weatherError ? (
        <p>Error fetching weather data: {weatherError}</p>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Homepage;
