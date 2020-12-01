const personaA = {
    name: 'Perico',
    age: 27,
    city: 'Tarragona'
}

const personaB = {
    name: 'Manolo',
    age: 40,
    city: 'Torreforta'
}

const sumar = (e) => {
    personaA.age = personaA.age + 1
    /* personaA.age +=1
    personaA.age ++ */
    render()
}

const restar = (e) => {
    personaA.age = personaA.age - 1
    /* personaA.age -=1
    personaA.age -- */
    render()
}

const reset = (e) => {
    personaA.age = 0
    /* personaA.age +=1
    personaA.age ++ */
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>Name:{personaA.name}</h1>
            <p>Age:{personaA.age}</p>
            <p> City:{personaA.city}</p>
            <p>{false}</p>
            <button onClick={sumar}>+1</button>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()


//const appRoot = document.getElementById('appRoot')


/* const key='e5644eb3ebac7b50936e245798d7fe7d';
const city='Tarragona';
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

const  getWeather = async()=>{
    const result = await axios.get(url)
    console.log(result.data.main);
}
getWeather() */

