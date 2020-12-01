
const key = 'e5644eb3ebac7b50936e245798d7fe7d';
const city = 'Tarragona';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

const getWeather = async () => {
    console.log('hola');
    const result = await axios.get(url)
    render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure, result.data.weather[0].description)
}
getWeather()

const appRoot = document.getElementById('appRoot')

const render = (temperatura,humedad,presion,descripcion) => {
    const template = (
        <div>
            <h1>Tiempo en :{city}</h1>
            <p>Descripcion:{descripcion}</p>
            <p>Temperatura:{temperatura}</p>
            <p>Humedad:{humedad}</p>
            <p>Presión:{presion}</p>
        </div>
    )
    ReactDOM.render(template, appRoot)
}
render()



//const appRoot = document.getElementById('appRoot')

