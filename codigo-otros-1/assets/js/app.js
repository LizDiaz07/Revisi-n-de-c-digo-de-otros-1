
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//aquí no se estaba seleccionando el el elemento .name .blog correctamente 
/* corrección en las selecciones de elementos DOM */
const $n = document.querySelector('.name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
/* aqui no se habia declarado el async para poder usar el await */
/* la funcion displayUser necesita ser declara con async para poder usar el await */
async function displayUser(username) {

/* ocupamos try para mostrar el mensaje  */
  try {
    $n.textContent = 'cargando...';

    /* esperamos la respuesta de fetch */
    const response = await fetch(`${usersEndpoint}/${username}`);

    /* verificamos si la respuesta es exitosa con un if*/
    if (!response.ok) throw new Error(`Error al obtener usuario: ${response.status}`);

    const data = await response.json();

    /* mostramos los datos que se obtuvieron en el DOM */
    $n.textContent = data.name || 'No se encontró el nombre';
    $b.textContent = data.blog || 'No se encontro el blog';
    $l.textContent = data.location ||'no se encontro la ubicacion';
  } catch (err) {
    
    /* se agrega un  manejador de errores */
    handleError(err);

  }
  
}

/*  funcion para el manejo de errores */
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  /* se selecciono bien la variable n  */
  $n.textContent = `Algo salió mal: ${err.message}`;
}

displayUser('stolinski');
