'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var key = 'e5644eb3ebac7b50936e245798d7fe7d';
var city = 'Tarragona';
var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key + '&units=metric';

var getWeather = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log('hola');
                        _context.next = 3;
                        return axios.get(url);

                    case 3:
                        result = _context.sent;

                        render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure, result.data.weather[0].description);

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getWeather() {
        return _ref.apply(this, arguments);
    };
}();
getWeather();

var appRoot = document.getElementById('appRoot');

var render = function render(temperatura, humedad, presion, descripcion) {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Tiempo en :',
            city
        ),
        React.createElement(
            'p',
            null,
            'Descripcion:',
            descripcion
        ),
        React.createElement(
            'p',
            null,
            'Temperatura:',
            temperatura
        ),
        React.createElement(
            'p',
            null,
            'Humedad:',
            humedad
        ),
        React.createElement(
            'p',
            null,
            'Presi\xF3n:',
            presion
        )
    );
    ReactDOM.render(template, appRoot);
};
render();

//const appRoot = document.getElementById('appRoot')
