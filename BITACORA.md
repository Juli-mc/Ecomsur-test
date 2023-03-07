# SPANISH

# Bitacora prueba técnica Ecomsur por Julián Marin

Para empezar, traeré todas las bibliotecas que tiene el repositorio en el packcage.json para evitar extenderme en el tutorial de como instalar una a una cada biblioteca.

    "react-hot-toast": "^2.4.0",
    "react-redux": "^8.0.5",
    "react-router": "^6.8.2"
    "axios": "^1.3.4",

El proyecto cuenta con manejo de estado global con redux, patrones de diseño, organización de proyecto, código local reutilizable y el uso de localstorage.

# Resolución de primer problema

# Cada ítem del catálogo debe tener un action button con el texto Add item to cart.

Primero, desplegué en el home de la app toda la lista de productos (Product list page), para esto creé un estado global con Redux llamado "products.slice.js", donde posteriormente realicé un .map para traer todos los productos y desplegarlos de forma correcta.
Este mapeo se inicia en "Home.js" pero se despliega la información en el archivo "ProductCard.js"

También creé un estado global con redux para el carrito de compras, llamado "cart.slice.js".
Posteriormente creé una función local con notificación de añadido correctamente gracias a react-hot-toast en la cual usamos setCart para cambiar el estado de cart y añadirle el elemento seleccionado en product.

Para el tema de la cantidad a través de operadores de igualdad se creó un elemento llamado "quantity" que se contabiliza cada vez que un usuario añade o usa el botón de añadir, se añade una unidad del producto y cuando se repite el producto aumenta la cantidad y no se repite el producto.

Para la cantidad se tuvo que crear un elemento adicional llamado quantity.

Resultado:
Se evidencia correctamente toda la información brindada por el back-end y el correcto funcionamente del carrito.
Se evidencia el precio por unidad, precio por stock total del producto y al final de carrito un PRECIO FINAL que contabiliza la suma de productos multiplicado por cantidad.

# Segundo problema

# Si no hay stock el action button debe deshabilitarse

Tras desplegar correctamente la información en el componente ProductCard.js utilicé operador condicional con el fin de que cuando el numero en product.countInStock sea mayor a 0 se habilité el botón de añadir al carrito y cuando sea 0 o menor no se habilité el botón, por ende no se puede utilizar la función de añadir al carrito.

Resultado:
Un producto con stock en 0 no puede ser añadido al carrito ya que no muestra botón para ejecutar la función.

# Tercer problema

# Cada ítem en el carro debe tener un action button para remover el ítem del carro.

En el componente "ProductsInCart.js" desplegamos toda la información del estado global "cart" y creé una función global para remover un item del carrito, que recibe como parametro el producto en cuestión y lo elimina del arreglo a través del método .filter. (Véase cart.slice.js para entender el método de la función).

Resultado:
El botón elimina automáticamente el producto seleccionado, toda la cantidad y los precios finales son alterados con exito.

# Cuarto problema

# Los items en el carrito se deben de agrupar mostrando cantidad de cada producto añadido.

Para esto, en "cart.slice.js" creamos una condicional cuyo própsito es comparar las id del producto recibido, y sino está se trae el elemento a el arreglo con el valir de cantidad 1 pero si su id ya coincide se añade 1+ al elemento quantity del producto.

Resultado:
Cada producto se añade a el carrito y se crea un nuevo elemento llamado quantity que cumple la condición anteriormente nombrada correctamente.

# Puntos extra

# Mostrar el rating y número de reviews en el PLP y PDP

Para esto se creó la constante llamada "percentStars" en "ProductCard.js" en la cual se reciben valores, se multiplican por 100 y se dividen en 5 (estableciendo el limite de la estrella) y con ayuda de css se hacen degradados entre color dorado y gris para colorear el valor de las estrellas calculado hasta 5 como limite obtenido de la propiedad "rating" de la api.

# Puntos extra

# Usar Redux para mantener el estado global.

Ya he usado Redux anteriormente pero debo admitir que fue un reto crear funciones y condicionales en el estado global para optimizar el funcionamiento del carrito, pero nada que internet no nos pueda ayudar.

# Puntos extra

# Mantener info de ítems en carrito al recargar la página

Para esto usé el window.localStorage en el estado goblal "cart.slice.js" donde se recibe como estado inicial un arreglo vacío almacenado en el localStorage y posteriormente se altera o se modifica este valor permitiendo que al recargar la pagina los productos se mantengan aquí.

Debo confesar que fue complicado para mi, debido a que no había usado localStorage para esto, normalmente se configuraba el proyecto para usar un Token de autenticación.

# Notas

# Recuerda la filosofía "Mobile-First Responsive Design".

El proyecto se construyó únicamente con la consola de Microsoft Edge con modo responsive y se despliega correctamente hasta un numero determinado de pixeles de pantalla.

![responsive design](/evidence/reponsive.jpg)

# Piensa en otras tiendas en linea que hayas usado. El publico final no es necesariamente alguien muy tecnico.

El resultado final a mi parecer es un ecommerce llamativo visualmente, con loaders responsive de primer nivel siendo totalmente intiutivo y llamativo.

# Si no utilizas el API local tu prueba será descartada.

Toda la información obtenida viene del localhost, como se puede observar en el código.

# Observaciones finales

Tengo más ideas para realizar a esta prueba, como eliminar objetos por cantidad, añadir por cantidad, limitar el numero de unidades que se pueden añadir basandonos en el countInStock de la api, el uso de animaciones con framer-motion, construcción respectiva para pantallas o monitores y para pantallas aun mas pequeñas, pero por cuestiones de tiempo no he llegado a este punto.

# ENGLISH

# Ecomsur technical test log by Julián Marin

To begin with, I will bring all the libraries that the repository has in the packcage.json to avoid extending in the tutorial of how to install one by one each library.

    "react-hot-toast": "^2.4.0",
    "react-redux": "^8.0.5",
    "react-router": "^6.8.2".
    "axios": "^1.3.4",

The project has global state management with redux, design patterns, project organization, reusable local code and the use of localstorage.

# Resolution of first problem

# Each catalog item should have an action button with the text Add item to cart.

First, I deployed in the home of the app the entire list of products (Product list page), for this I created a global state with Redux called "products.slice.js", where I then made a .map to bring all products and deploy them correctly.
This mapping starts in "Home.js" but the information is displayed in the file "ProductCard.js".

I also created a global state with redux for the shopping cart, called "cart.slice.js".
Later I created a local function with notification of successfully added thanks to react-hot-toast in which we use setCart to change the cart state and add the selected item in product to it.

For the quantity issue through equality operators we created an element called "quantity" which is counted every time a user adds or uses the add button, a unit of the product is added and when the product is repeated the quantity increases and the product is not repeated.

For quantity an additional element called quantity had to be created.

Result:
All the information provided by the back-end and the correct functioning of the cart is correctly evidenced.
It shows the price per unit, price per total stock of the product and at the end of the cart a FINAL PRICE that counts the sum of products multiplied by quantity.

# Second problem

# If there is no stock the action button must be disabled.

After correctly displaying the information in the ProductCard.js component I used conditional operator so that when the number in product.countInStock is greater than 0 the add to cart button is enabled and when it is 0 or less the button is not enabled, therefore the add to cart function cannot be used.

Result:
A product with stock at 0 cannot be added to cart as it does not show button to execute the function.

# Third problem

# Each item in the cart must have an action button to remove the item from the cart.

In the component "ProductsInCart.js" we display all the information of the global state "cart" and I created a global function to remove an item from the cart, which receives as parameter the product in question and removes it from the array through the .filter method (See cart.slice.js to understand the method of the function).

Result:
The button automatically removes the selected product, all quantity and final prices are successfully altered.

# Fourth problem

# The items in the cart should be grouped showing quantity of each product added.

For this, in "cart.slice.js" we create a conditional whose purpose is to compare the ids of the product received, and if it is not, the element is brought to the array with the quantity value 1 but if its id already matches, 1+ is added to the quantity element of the product.

Result:
Each product is added to the cart and a new element named quantity is created which fulfills the above named condition correctly.

# Extra points

# Show the rating and number of reviews in the PLP and PDP.

For this we created the constant called "percentStars" in "ProductCard.js" in which values are received, multiplied by 100 and divided into 5 (setting the limit of the star) and with the help of css gradients are made between gold and gray color to color the value of the stars calculated up to 5 as a limit obtained from the "rating" property of the api.

# Extra points

# Use Redux to maintain the global state.

I have used Redux before but I must admit that it was a challenge to create functions and conditionals in the global state to optimize the performance of the cart, but nothing that the internet can't help us.

# Extra points

# Keep info of items in cart when reloading the page.

For this I used the window.localStorage in the global state "cart.slice.js" where it receives as initial state an empty array stored in the localStorage and then alter or modify this value allowing that when reloading the page the products are kept here.

I must confess that it was complicated for me, because I had not used localStorage for this, normally the project was configured to use an authentication token.

# Notes

# Remember the "Mobile-First Responsive Design" philosophy.

The project was built only with the Microsoft Edge console with responsive mode and displays correctly up to a given number of screen pixels.

![responsive design](/evidence/reponsive.jpg)

# Think about other online stores you have used. The target audience is not necessarily someone very technical.

The end result in my opinion is a visually appealing ecommerce, with top level responsive loaders being totally intiutive and eye catching.

# If you don't use the local API your test will be discarded.

All the information obtained comes from the localhost, as you can see in the code.

# Concluding remarks

I have more ideas to make to this test, like remove objects by quantity, add by quantity, limit the number of units that can be added based on the countInStock of the api, the use of animations with framer-motion, respective construction for screens or monitors and for even smaller screens, but due to time issues I have not reached this point.
