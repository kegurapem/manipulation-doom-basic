const h1 = document.querySelector('h1')
const pid = document.getElementById('pid')



console.log(pid)
// innterHTML = cambia lo seleccionado por el valor que ingresamos (ex. se muestrabajo)
// innerText = hace lo mismo que "innterHTML", pero no permite leer código HTML como sí lo hace "innterHTML".
h1.innerText = 'My name is Kevin'

// getAttribute devuelve el valor del atributo que pongamos como argumento
h1.getAttribute('class')

// setAttribute agrega un atributo con el valor que le pasamos como argumento en la segunda posición.
h1.setAttribute('class', 'rojo')

// classList.add agrega una clase.
h1.classList.add('amarillo')

// classList.add agrega una clase.
h1.classList.remove('amarillo')

// crea un elemnto en el documento html
const img = document.createElement('img')
img.setAttribute('src','https://img.freepik.com/foto-gratis/pantalla-escaneo-programador-su-reloj-inteligente-camara-telefono-inteligente_1098-18710.jpg?w=1380&t=st=1665900701~exp=1665901301~hmac=988f49bb4a46283c4beb54f356ab1be184e12457c8aa1a64b61f24c55fbefc27')

// agrega la imagen luego del pid
pid.append(img)