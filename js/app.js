var template = Handlebars.compile('<div>Hello {{name}}</div>');
var appElement = document.getElementById('app');
appElement.innerHTML = template({ name: 'Handlebars...' });