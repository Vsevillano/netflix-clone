# Inicialización del proyecto

` npx create-react-app netflix-clone --template redux `

### Proceso de limpieza

### App.js - Layout inicial

- Cream os las rutas
- Renderizamos Login o el resto del app condicionado a la existencia de un usuario

### Estilos

- Utilizamos useStyles para crear una infraestructura que nos permita asignar estilos a cada componente

#### Crear las carpetas de componentes: Pages

- Creamos la infraestructura: Home, Login, Paypal, Profile, SignUp

#### Estilos para los componentes Pages

#### Crear la carpeta de components más secundarios (no son páginas)

- Creamos la infraestructura del resto de componentes: Banner, Header, Plans y Row

#### Comenzamos a trabajar con el componente Header

- Importamos el logo
- Añadir clase transparente con listener en el scroll. Una vez hecho, lo desmontamos con el return de useEffect.
- Añadimos al AppBar una clase transparent condicional.
- Añadimos rutas al logo y otros elementos

#### Comenzamos a trabajar con el Banner
- Importado imagen como backgroundImage
- En React, tenemos que acompañar las backgroundImages con estilos como object-fit, background-size y background-position
- Hemos positionado el título, botones y descripción.
- Como la descripción viene de la API, tenemos que truncarla. Para ello declaramos la función truncate.
- Añadido div vacío que añade un degradado de transparente a negro.

#### Comenzamos a trabajar con el Login

- Hemos creado un botón con styled components y le hemos llamado NetflixButton. Está customizado y podremos variar su longitud, color, y otros estilos, pasandole props.

- Styled components para variar los estilos del input o del boton, pero para su posicionamiento le damos una clase normal.

- Hemo creado un input personalizado con Styled components. Le hemos llamado NetflixInput.



### Tutorial seguido
https://www.youtube.com/watch?v=kCzOaiz5e2I&ab_channel=JavaScriptDeNoobAPro