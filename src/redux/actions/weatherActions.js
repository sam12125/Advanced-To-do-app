import axios from "axios";

export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: data,
});

const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: error,
});

export const fetchWeather = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=dcdd5a972e3dabfc32aaba7939e28f1f"
      );
      dispatch(fetchWeatherSuccess(response.data));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };
};
