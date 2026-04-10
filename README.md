# 🌤️ Smart City Weather Dashboard

## 📌 Description

The Smart City Weather Dashboard is a web application that provides real-time weather information for any city.
It Beyond just temperature, this app provides "What to Wear" advice based on weather conditions (e.g., "Bring an umbrella!" if rain > 20%).

Core Features: Search by city, 5-day forecast, and dynamic icons based on weather codes


---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Display temperature, humidity, and wind speed
* 📅 Real-time weather data
* 🎯 "What to Wear" smart suggestions
* 🌙 Dark mode
* 🌈 Dynamic weather icons

---

## 🏗️ System Architecture

The system follows a simple client-server architecture:

1. The user enters a city name in the browser.
2. The frontend (HTML, CSS, JavaScript) sends a request to the OpenWeatherMap API.
3. The API processes the request and returns weather data in JSON format.
4. The frontend parses the data and displays it to the user.

### Components:

* **Client (Browser)** – User interaction
* **Frontend** – Handles UI and API calls
* **API (OpenWeatherMap)** – Provides weather data

### Data Flow:

User → Frontend → API → Frontend → User


---



## 🛠️ Tech Stack

* Frontend: HTML, CSS, JavaScript
* API: OpenWeatherMap

---

## 🌐 API Used

* **OpenWeatherMap Current Weather API**
* Endpoint:

```
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
```

### Data Provided:

* Current temperature (°C)
* Humidity
* Wind speed
* Weather conditions

---

## 📌 Future Improvements

* 📍 Location-based weather (GPS support)
* 📅 5-day forecast integration
* 📊 Weather charts


---


## 🎯 Objective

The objective of this project is to build a responsive web application that fetches and displays real-time weather data using an external API.
It aims to help users quickly understand weather conditions and make better daily decisions through smart suggestions like "What to Wear".



-----

------
Deployed link: https://weather-ruby-gamma.vercel.app/
------

## 👨‍💻 Author

Anubhav Gupta

---



## 📌 Data Handling Note

This project does not include a backend or database.
All data is fetched in real-time from the OpenWeatherMap API and displayed on the frontend.
