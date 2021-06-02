import exphbs from 'express-handlebars';
import path from 'path';

//Exportando una funcion de configuración
export default (app) => {
  //1. Registrar el motor de plantillas
  app.engine(
    'hbs',
    exphbs({
      extname: '.hbs',
      defaultLayout: 'main',
    })
  );
  // 2. Seleccionar el moto de plantilas recien registrado
  app.set('view engine', 'hbs');
  //3. Estableciendo la ruta de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));
  //Retornamos el valor de entrada
  return app;
};
