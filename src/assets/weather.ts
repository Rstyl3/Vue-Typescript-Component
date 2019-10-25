import { IWeather } from "./types";

const weather: IWeather[] = [
    {
        date: "2019-10-25T14:38:32.9802494+02:00",
        temperatureC: 23,
        temperatureF: 73,
        summary: "Cloudy"
    },
    {
        date: "2019-10-26T14:38:32.980718+02:00",
        temperatureC: -10,
        temperatureF: 14,
        summary: "Freezing"
    },
    {
        date: "2019-10-27T14:38:32.9807212+01:00",
        temperatureC: 7,
        temperatureF: 44,
        summary: "Scattered Showers"
    },
    {
        date: "2019-10-28T14:38:32.9807218+01:00",
        temperatureC: 52,
        temperatureF: 125,
        summary: "Sunny"
    },
    {
        date: "2019-10-29T14:38:32.9807223+01:00",
        temperatureC: -12,
        temperatureF: 11,
        summary: "Snowy"
    },
    {
        date: "2019-10-29T14:38:32.9807223+01:00",
        temperatureC: -12,
        temperatureF: 11,
        summary: "Windy"
    }
]

export default weather;