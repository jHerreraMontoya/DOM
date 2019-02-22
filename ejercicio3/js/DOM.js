"use-strict";
/*Función en la que vamos a crear todos los objetos y vamos a realizar la correspondiente relación entre ellos*/
function initPopulate() {
    //Creamos los objetos de tipo persona que van a pertener a los actores y los directores
    //OBJETOS ACTORES
    try {
        var actor1 = new Person("Benedict", "Cumberbatch", "07/19/1976");
        actor1.picture = "imagenes/actores/benedict-cumberbatch.jpg";
        var actor2 = new Person("Martin", "Freeman", "09/08/1971");
        actor2.picture = "imagenes/actores/martin-freeman.jpg";
        var actor3 = new Person("Daniel", "Rovira", "11/01/1980");
        actor3.picture = "imagenes/actores/daniel-rovira.jpg";
        var actor4 = new Person("Maria", "León", "07/30/1984");
        actor4.picture = "imagenes/actores/maria-león.jpg";
        var actor5 = new Person("Jon", "Plazaola", "03/28/1982");
        actor5.picture = "imagenes/actores/jon-plazaola.jpg";
        var actor6 = new Person("Clara", "Lago", "03/06/1990");
        actor6.picture = "imagenes/actores/clara-lago.jpg";
        var actor7 = new Person("Berto", "Romero", "11/17/1974");
        actor7.picture = "imagenes/actores/berto-romero.jpg";
        var actor8 = new Person("Daniel", "Radcliffe", "07/23/1989");
        actor8.picture = "imagenes/actores/daniel-radcliffe.jpg";
        var actor9 = new Person("Zoe", "Kazan", "09/09/1983");
        actor9.picture = "imagenes/actores/zoe-kazan.jpg";
        var actor10 = new Person("Chris", "Evans", "06/13/1981");
        actor10.picture = "imagenes/actores/chris-evans.jpg";
        var actor11 = new Person("Scarlett", "Johansson", "11/22/1984");
        actor11.picture = "imagenes/actores/scarlett-johansson.jpg";
        var actor12 = new Person("Chris", "Pratt", "06/21/1979");
        actor12.picture = "imagenes/actores/chris-pratt.jpg";
        var actor13 = new Person("Rupert", "Grint", "08/24/1988");
        actor13.picture = "imagenes/actores/rupert-grint.jpg";
        var actor14 = new Person("Zoe", "Saldaña", "06/19/1978");
        actor14.picture = "imagenes/actores/zoe-saldaña.jpg";
        var actor15 = new Person("Natasha", "Lyone", "04/04/1979");
        actor15.picture = "imagenes/actores/natasha-lyonne.jpg";
    } catch (err) {
        console.log(err.toString());
    }

    //OBJETOS DIRECTORES
    try {
        var director1 = new Person("James", "Gunn", "08/05/1966");
        director1.picture = "imagenes/directores/james-gunn.jpg";
        var director2 = new Person("Michael", "Dowse", "04/19/1973");
        director2.picture = "imagenes/directores/michael-dowse.jpg";
        var director3 = new Person("Joe", "Russo", "07/08/1971");
        director3.picture = "imagenes/directores/joe-russo.jpg";
        var director4 = new Person("Emilio", "Lazaro", "03/28/1945");
        director4.picture = "imagenes/directores/emilio-lazaro.jpg";
        var director5 = new Person("Shawn", "Levy", "07/23/1968");
        director5.picture = "imagenes/directores/shawn-levy.jpg";
        var director6 = new Person("Juan Antonio", "Bayona", "07/23/1968");
        director6.picture = "imagenes/directores/juan-antonio-bayona.jpg";
    } catch (err) {
        console.log(err.toString());
    }

    //OBJETOS CATEGORIAS
    try {
        var categoria1 = new Category("Comedia");
        var categoria2 = new Category("Romance");
        var categoria3 = new Category("Acción & Aventura");
        var categoria4 = new Category("Ciencia Ficción");
        var categoria5 = new Category("Drama");
        var categoria6 = new Category("Terror");
        var categoria7 = new Category("Intriga");
        var categoria8 = new Category("Musical");
        var categoria9 = new Category("Animación");
    } catch (err) {
        console.log(err.toString());
    }

    //OBJETOS RESOURCE
    try {
        var resource1 = new Resource(120, "https://www.thejenhemon.es");
        var resource2 = new Resource(40, "https://www.thejenhemon.es");
        var resource3 = new Resource(210, "https://www.thejenhemon.es");
        var resource4 = new Resource(80, "https://www.thejenhemon.es");
    } catch (err) {
        console.log(err.toString());
    }

    //OBJETOS COORDENADAS
    try {
        var coordinate1 = new Coordinate(65, 90);
        var coordinate2 = new Coordinate(-90, -165);
        var coordinate3 = new Coordinate(-70, 110);
    } catch (err) {
        console.log(err.toString());
    }

    //OBJETOS MOVIE
    try {
        var movie1 = new Movie("8 Apellidos Vascos", "03/14/2014","imagenes/peliculas_series/apellidos-vascos.jpg",resource1);
        //movie1.image = "imagenes/peliculas_series/apellidos-vascos.jpg";
        var movie2 = new Movie("8 Apellidos Catalanes", "11/18/2015","imagenes/peliculas_series/apellidos-catalanes.jpg",resource1);
        //movie2.image = "imagenes/peliculas_series/apellidos-catalanes.jpg";
        var movie3 = new Movie("Amigos de más", "05/02/2014","imagenes/peliculas_series/amigos-de-mas.jpg",resource3);
        //movie3.image = "imagenes/peliculas_series/amigos-de-mas.jpg";
        var movie4 = new Movie("Diario de una niñera", "08/24/2007","imagenes/peliculas_series/diario-de-una-niñera.jpg", resource1, "\nLatidud: " + coordinate1.getSexagesimalLatitude() + " Longitud: " + coordinate1.getSexagesimalLongitude());
        //movie4.image = "imagenes/peliculas_series/diario-de-una-niñera.jpg";
        var movie5 = new Movie("Dr Strange", "10/28/2016","imagenes/peliculas_series/dr-strange.jpg",resource3);
        //movie5.image = "imagenes/peliculas_series/dr-strange.jpg";
        var movie6 = new Movie("Harry Potter y la Orden del Fénix", "06/28/2017","imagenes/peliculas_series/harry-potter-y-la-orden-del-fenix.jpg",resource3);
        //movie6.image = "imagenes/peliculas_series/harry-potter-y-la-orden-del-fenix.jpg";
        var movie7 = new Movie("Los Vengadores", "04/29/2015","imagenes/peliculas_series/vengadores.jpg", resource3);
        //movie7.image = "imagenes/peliculas_series/vengadores.jpg";
        var movie8 = new Movie("Guardianes de la galaxia VOL 1", "08/14/2014","imagenes/peliculas_series/guardianes-de-la-galaxia.jpg", resource3);
        //movie8.image = "imagenes/peliculas_series/guardianes-de-la-galaxia.jpg";
    } catch (err) {
        console.log(err.toString());
    }

    //OBJETOS SEASONS
    try {
        var season1 = new Season("Temporada 1", ["Episodio 1", "Episodio 2", "Episodio 3", "Episodio 4", "Episodio 5"]);
        var season2 = new Season("Temporada 2", ["Episodio 1", "Episodio 2", "Episodio 3"]);
        var season3 = new Season("Temporada 3", ["Episodio 1", "Episodio 2"]);
    } catch (err) {
        console.log(err);
    }

    //OBJETOS SERIE
    try {
        var serie1 = new Serie("Allí Abajo", "04/07/2015", "imagenes/peliculas_series/alli-abajo.jpg",[season1, season2]);
        //serie1.image = "imagenes/peliculas_series/alli-abajo.jpg";
        var serie2 = new Serie("Sherlock Holmes", "07/25/2010","imagenes/peliculas_series/sherlock.jpg", [season1, season2, season3]);
        //serie2.image = "imagenes/peliculas_series/sherlock.jpg";
        var serie3 = new Serie("The Good Doctor", "09/25/2017","imagenes/peliculas_series/the-good-doctor.jpg",[season1]);
        //serie3.image = "imagenes/peliculas_series/the-good-doctor.jpg";
        var serie4 = new Serie("The Big Bang Theory", "09/24/2007", "imagenes/peliculas_series/the-big-bang-theory.jpg", [season1, season2, season3]);
        //serie4.image = "imagenes/peliculas_series/the-big-bang-theory.jpg";
        var serie5 = new Serie("Amor Ocasional", "12/07/2018","imagenes/peliculas_series/amor-ocasional.jpg", [season1]);
        //serie5.image = "imagenes/peliculas_series/amor-ocasional.jpg";
        var serie6 = new Serie("Muñeca Rusa", "02/10/2019","imagenes/peliculas_series/muñeca-rusa.jpg",[season1]);
        //serie6.image = "imagenes/peliculas_series/muñeca-rusa.jpg";
        var serie7 = new Serie("Stranger Things", "07/15/2016","imagenes/peliculas_series/stranger-things.jpg",[season1, season2]);
        //serie7.image = "imagenes/peliculas_series/stranger-things.jpg";
    } catch (err) {
        console.log(err.toString());
    }
    /*FIN DE LA CREACIÓN DE OBJETOS*/

    //VideoSystem
    /*Nombre del sistema*/
    try {
        var VSystem = VideoSystem.getInstance(); //Creamos una variable la cual le asignamos el getInstance de VideoSystem   
        VSystem.name = "JenFlix"; //A la variable creada anteriormente a traves del objeto name se le asigna un nombre
    } catch (err) {
        console.log("Error: " + err.toString());
    }

    /*Añadimos las categorias al videoSystem*/
    try {
        VSystem.addCategory(categoria1);
        VSystem.addCategory(categoria2);
        VSystem.addCategory(categoria3);
        VSystem.addCategory(categoria4);
        VSystem.addCategory(categoria5);
        VSystem.addCategory(categoria6);
        VSystem.addCategory(categoria7);
        VSystem.addCategory(categoria8);
        VSystem.addCategory(categoria9);
    } catch (err) {
        console.log("Error " + err.toString());
    }

    /*Añadimos las producciones -- Peliculas y series -- al videoSystem*/
    try {
        VSystem.addProduction(movie1);
        VSystem.addProduction(movie2);
        VSystem.addProduction(movie3);
        VSystem.addProduction(movie4);
        VSystem.addProduction(movie5);
        VSystem.addProduction(movie6);
        VSystem.addProduction(movie7);
        VSystem.addProduction(movie8);
        VSystem.addProduction(serie1);
        VSystem.addProduction(serie2);
        VSystem.addProduction(serie3);
        VSystem.addProduction(serie4);
        VSystem.addProduction(serie5);
        VSystem.addProduction(serie6);
        VSystem.addProduction(serie7);

    } catch (err) {
        console.log("Error " + err.toString());
    }

    /*Añadimos los actores al videoSystem*/
    try {
        VSystem.addActor(actor1);
        VSystem.addActor(actor2);
        VSystem.addActor(actor3);
        VSystem.addActor(actor4);
        VSystem.addActor(actor5);
        VSystem.addActor(actor6);
        VSystem.addActor(actor7);
        VSystem.addActor(actor8);
        VSystem.addActor(actor9);
        VSystem.addActor(actor10);
        VSystem.addActor(actor11);
        VSystem.addActor(actor12);
        VSystem.addActor(actor13);
        VSystem.addActor(actor14);
        VSystem.addActor(actor15);

    } catch (err) {
        console.log("Error " + err.toString());
    }

    /*Añadimos los directores al videoSystem*/
    try {
        VSystem.addDirector(director1);
        VSystem.addDirector(director2);
        VSystem.addDirector(director3);
        VSystem.addDirector(director4);
        VSystem.addDirector(director5);
        VSystem.addDirector(director6);
    } catch (err) {
        console.log("Error " + err.toString());
    }

    /*Asignamos una categoría a una production*/
    try {
        VSystem.assignCategory(categoria1, movie1);
        VSystem.assignCategory(categoria1, movie2);
        VSystem.assignCategory(categoria1, serie1);
        VSystem.assignCategory(categoria2, movie3);
        VSystem.assignCategory(categoria2, serie5);
        VSystem.assignCategory(categoria3, movie5);
        VSystem.assignCategory(categoria3, movie6);
        VSystem.assignCategory(categoria3, movie7);
        VSystem.assignCategory(categoria3, movie8);
        VSystem.assignCategory(categoria4, serie7);
        VSystem.assignCategory(categoria5, movie4);
        VSystem.assignCategory(categoria5, serie3);
        VSystem.assignCategory(categoria6, serie6);
        VSystem.assignCategory(categoria7, serie2);
        VSystem.assignCategory(categoria8, movie3);
        VSystem.assignCategory(categoria9, serie4);
    } catch (err) {
        console.log("Error " + err.toString());
    }

    /*Asignamos un actor a una production*/
    try {
        VSystem.assignActor(actor1, serie2, "Detective", true);
        VSystem.assignActor(actor1, movie5, "Dr Strange", true);
        VSystem.assignActor(actor2, serie2, "Ayudante de dectective", false);
        VSystem.assignActor(actor3, movie1, "", true);
        VSystem.assignActor(actor3, movie2, "", true);
        VSystem.assignActor(actor6, movie1, "", true);
        VSystem.assignActor(actor7, movie2, "", true);
        VSystem.assignActor(actor4, serie1, "", true);
        VSystem.assignActor(actor5, serie1, "", true);
        VSystem.assignActor(actor8, movie3, "", true);
        VSystem.assignActor(actor9, movie3, "", true);
        VSystem.assignActor(actor8, movie6, "", true);
        VSystem.assignActor(actor13, movie6, "", true);
        VSystem.assignActor(actor10, movie4, "", true);
        VSystem.assignActor(actor11, movie4, "", true);
        VSystem.assignActor(actor10, movie7, "", true);
        VSystem.assignActor(actor12, movie7, "", true);
        VSystem.assignActor(actor12, movie8, "", true);
        VSystem.assignActor(actor14, movie8, "", false);
        VSystem.assignActor(actor13, serie3, "", true);
        VSystem.assignActor(actor14, serie3, "", true);
        VSystem.assignActor(actor11, serie4, "", true);
        VSystem.assignActor(actor5, serie4, "", true);
        VSystem.assignActor(actor5, serie5, "", true);
        VSystem.assignActor(actor10, serie5, "", true);
        VSystem.assignActor(actor15, serie6, "", true);
        VSystem.assignActor(actor1, serie6, "", true);
        VSystem.assignActor(actor3, serie7, "", false);
        VSystem.assignActor(actor7, serie7, "", false);
    } catch (err) {
        console.log("Error: " + err);
    }

    /*Asignamos un director a una production*/
    try {
        VSystem.assignDirector(director1, movie5);
        VSystem.assignDirector(director1, movie6);
        VSystem.assignDirector(director1, movie7);
        VSystem.assignDirector(director1, movie8);
        VSystem.assignDirector(director2, movie3);
        VSystem.assignDirector(director2, serie4);
        VSystem.assignDirector(director2, serie5);
        VSystem.assignDirector(director3, serie2);
        VSystem.assignDirector(director3, serie3);
        VSystem.assignDirector(director4, movie1);
        VSystem.assignDirector(director4, movie2);
        VSystem.assignDirector(director4, serie1);
        VSystem.assignDirector(director5, movie4);
        VSystem.assignDirector(director5, serie6);
        VSystem.assignDirector(director2, serie7);
    } catch (err) {
        console.log("Error: " + err);
    }
}//Fin InitPoupulate

function categoriesMenuPopulate() {
    var submenu = document.getElementById("submenu");
    
    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoria = category.value.name;
        var aCategories = document.createElement("button");
        aCategories.setAttribute("class", "dropdown-item bg-light");
        aCategories.setAttribute("value", categoria);
        submenu.appendChild(aCategories);
        aCategories.appendChild(document.createTextNode(categoria));
        aCategories.addEventListener("click",showProductions);
        
        category = categories.next();
    }
}
function showHomePage() {
    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }
    divEncabezado.setAttribute("class", "border-bottom mt-2")
    var encabezado = document.createElement("h2");
    divEncabezado.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Categorias"));

    var spanEncabezado = document.createElement("span");
    encabezado.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary ml-2");
    spanEncabezado.appendChild(document.createTextNode("Info"));

    /*A partir de aqui construimos el contenido principal*/
    //Cogemos el id de div donde van a ir las tarjetas de las categorias
    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    //Con un iterador recorremos las categorias del videoSystem
    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    //Recorremos las categorias y las vamos pintando en el html
    while (category.done !== true) {
        var cols = document.createElement("div");
        cols.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
        principal.appendChild(cols);

        var card = document.createElement("div");
        card.setAttribute("class", "card h-100 bg-light");
        cols.appendChild(card);

        var img = document.createElement("img");
        img.setAttribute("src", "imagenes/categorias/" + category.value.name + ".jpg");
        img.setAttribute("alt", category.value.name);
        img.setAttribute("class", "card-img-top");
        card.appendChild(img);

        var cardCuerpo = document.createElement("div");
        cardCuerpo.setAttribute("class", "card-body");
        card.appendChild(cardCuerpo);
        var cardH4 = document.createElement("h4");

        cardH4.setAttribute("class", "card-title text-center");
        cardCuerpo.appendChild(cardH4);
        cardH4.appendChild(document.createTextNode(category.value.name));

        var cardP = document.createElement("p");
        cardP.setAttribute("class", "card-text");
        cardCuerpo.appendChild(cardP);

        var cardPie = document.createElement("div");
        cardPie.setAttribute("class", "card-footer");
        card.appendChild(cardPie);

        var cardEnlace = document.createElement("button");
        cardEnlace.setAttribute("type", "button");
        cardEnlace.setAttribute("class", "btn btn-outline-primary btn-block");
        var categoria = category.value.name;
        cardEnlace.setAttribute("value", categoria);
        cardPie.appendChild(cardEnlace);
        cardEnlace.appendChild(document.createTextNode("Ver más..."));

        cardEnlace.addEventListener("click", showProductions);

        category = categories.next();

    }

}

/*ACTORES*/
function showActors() {
    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2")
    var encabezado = document.createElement("h2");
    divEncabezado.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Actores"));

    var spanEncabezado = document.createElement("span");
    encabezado.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary ml-2");
    spanEncabezado.appendChild(document.createTextNode("Info"));

    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    //Con un iterador recorremos las categorias del videoSystem
    var VSystem = VideoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    //Recorremos las actores y las vamos pintando en el html
    while (actor.done !== true) {

        var cols = document.createElement("div");
        cols.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
        principal.appendChild(cols);

        var card = document.createElement("div");
        card.setAttribute("class", "card h-100");
        cols.appendChild(card);

        var img = document.createElement("img");
        img.setAttribute("src", actor.value.picture);
        img.setAttribute("alt", actor.value.name);
        img.setAttribute("class", "card-img-top h-75 w-100");
        card.appendChild(img);

        var cardCuerpo = document.createElement("div");
        cardCuerpo.setAttribute("class", "card-body");
        card.appendChild(cardCuerpo);

        var cardH5 = document.createElement("h5");
        cardH5.setAttribute("class", "card-title text-center");
        cardCuerpo.appendChild(cardH5);
        cardH5.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));


        var cardPie = document.createElement("div");
        cardPie.setAttribute("class", "card-footer");
        card.appendChild(cardPie);

        var cardEnlace = document.createElement("button");
        cardEnlace.setAttribute("type", "button");
        cardEnlace.setAttribute("class", "btn btn-outline-primary btn-block");
        var nomApe = actor.value.name + " " + actor.value.lastname1;
        cardEnlace.setAttribute("value", nomApe);
        cardPie.appendChild(cardEnlace);
        cardEnlace.appendChild(document.createTextNode("Ver más..."));

        cardEnlace.addEventListener("click", showActor);

        actor = actors.next();

    }
}
function showActor() {
    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2");
    var encabezado = document.createElement("h2");
    divEncabezado.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode(this.value));

    var spanEncabezado = document.createElement("span");
    encabezado.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary ml-2");
    spanEncabezado.appendChild(document.createTextNode("Info"));

    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    //Con un iterador recorremos las categorias del videoSystem
    //var encontrado = "false";
    var VSystem = VideoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    //Recorremos las actores y las vamos pintando en el html
    while (actor.done !== true) {
        var nomApe = actor.value.name + " " + actor.value.lastname1;
        if (nomApe === this.value) { //Si el nombre del actor nos coincide con el valor del boton de dicho Actor muestra su información
            var cols = document.createElement("div");
            cols.setAttribute("class", "col-12 m-4");
            principal.appendChild(cols);

            var card = document.createElement("div");
            card.setAttribute("class", "card");
            cols.appendChild(card);

            var filaA = document.createElement("div");
            filaA.setAttribute("class", "row");
            card.appendChild(filaA);

            var colFilaA = document.createElement("div");
            colFilaA.setAttribute("class", "col-4");
            filaA.appendChild(colFilaA);

            var img = document.createElement("img");
            img.setAttribute("src", actor.value.picture);
            img.setAttribute("alt", actor.value.name);
            img.setAttribute("class", "card-img-top w-100 m-2 rounded");
            colFilaA.appendChild(img);

            var colFilaB = document.createElement("div");
            colFilaB.setAttribute("class", "col-8");
            filaA.appendChild(colFilaB);

            var cardCuerpo = document.createElement("div");
            cardCuerpo.setAttribute("class", "card-body");
            colFilaB.appendChild(cardCuerpo);

            var cardH4 = document.createElement("h4");
            cardH4.setAttribute("class", "card-title text-center");
            cardCuerpo.appendChild(cardH4);
            cardH4.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));

            var cardPA = document.createElement("p");
            cardPA.setAttribute("class", "card-text");
            cardCuerpo.appendChild(cardPA);
            cardPA.appendChild(document.createTextNode("Nombre: " + actor.value.name));

            var cardPB = document.createElement("p");
            cardPB.setAttribute("class", "card-text");
            cardCuerpo.appendChild(cardPB);
            cardPB.appendChild(document.createTextNode("Apellido: " + actor.value.lastname1));

            var cardPC = document.createElement("p");
            cardPC.setAttribute("class", "card-text");
            cardCuerpo.appendChild(cardPC);
            cardPC.appendChild(document.createTextNode("Fecha de Nacimiento: " + actor.value.born.toLocaleDateString()));

            var cardPie = document.createElement("div");
            cardPie.setAttribute("class", "card-footer");
            card.appendChild(cardPie);

            var cardEnlace = document.createElement("a");
            cardEnlace.setAttribute("href", "#");
            cardEnlace.setAttribute("class", "btn btn-outline-primary");
            cardPie.appendChild(cardEnlace);
            cardEnlace.appendChild(document.createTextNode("Volver Atrás"));

            cardEnlace.addEventListener("click", showActors); //Aqui se genera hasta el botón de atras de la info del actor


            var encabezadoB = document.createElement("h4");
            encabezadoB.setAttribute("class", "border-bottom");
            cardCuerpo.appendChild(encabezadoB);
            encabezadoB.appendChild(document.createTextNode("Producciones "));

            var divProduction = document.createElement("div");
            divProduction.setAttribute("class", "row");
            cardCuerpo.appendChild(divProduction);



            var productions = VSystem.getProductionsActor(actor.value);
            var production = productions.next();

            while (production.done !== true) {
                var colsB = document.createElement("div");
                colsB.setAttribute("class", "col-3 m-1");
                divProduction.appendChild(colsB);

                var cardB = document.createElement("div");
                cardB.setAttribute("class", "card h-100");
                colsB.appendChild(cardB);


                var imgB = document.createElement("img");
                imgB.setAttribute("src", production.value.image);
                imgB.setAttribute("alt", production.value.title);
                imgB.setAttribute("class", "card-img-top");
                cardB.appendChild(imgB);

                var cardCuerpoB = document.createElement("div");
                cardCuerpoB.setAttribute("class", "card-body");
                cardB.appendChild(cardCuerpoB);

                var cardH5b = document.createElement("h6");
                cardH5b.setAttribute("class", "card-title text-center");
                cardCuerpoB.appendChild(cardH5b);
                cardH5b.appendChild(document.createTextNode(production.value.title));

                var cardPieB = document.createElement("div");
                cardPieB.setAttribute("class", "card-footer");
                cardB.appendChild(cardPieB);

                var cardEnlaceB = document.createElement("a");
                cardEnlaceB.setAttribute("href", "#");
                cardEnlaceB.setAttribute("class", "btn btn-outline-primary btn-block");
                cardPieB.appendChild(cardEnlaceB);
                cardEnlaceB.appendChild(document.createTextNode("Leer más..."));

                production = productions.next();
            }

        }

        actor = actors.next();

    }
}

/*DIRECTORES*/
function showDirectors() {
    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }
    divEncabezado.setAttribute("class", "border-bottom mt-2")
    var encabezado = document.createElement("h2");
    divEncabezado.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Directores"));

    var spanEncabezado = document.createElement("span");
    encabezado.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary ml-2");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    //Con un iterador recorremos los directores del videoSystem
    var VSystem = VideoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();

    //Recorremos las categorias y las vamos pintando en el html
    while (director.done !== true) {

        var cols = document.createElement("div");
        cols.setAttribute("class", "col-6 col-sm-6 col-md-3 col-xl-3 col-lg-3 m-4");
        principal.appendChild(cols);

        var card = document.createElement("div");
        card.setAttribute("class", "card h-100");
        cols.appendChild(card);

        var img = document.createElement("img");
        img.setAttribute("src", director.value.picture);
        img.setAttribute("alt", director.value.name);
        img.setAttribute("class", "card-img-top");
        card.appendChild(img);

        var cardCuerpo = document.createElement("div");
        cardCuerpo.setAttribute("class", "card-body");
        card.appendChild(cardCuerpo);

        var cardH5 = document.createElement("h5");
        cardH5.setAttribute("class", "card-title text-center");
        cardCuerpo.appendChild(cardH5);
        cardH5.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));

        var cardPie = document.createElement("div");
        cardPie.setAttribute("class", "card-footer");
        card.appendChild(cardPie);

        var cardEnlace = document.createElement("button");
        cardEnlace.setAttribute("type", "button");
        var nomApe = director.value.name + " " + director.value.lastname1;
        cardEnlace.setAttribute("value", nomApe);
        cardEnlace.setAttribute("class", "btn btn-outline-primary btn-block");
        cardPie.appendChild(cardEnlace);
        cardEnlace.appendChild(document.createTextNode("Ver más..."));

        cardEnlace.addEventListener("click", showDirector);

        director = directors.next();

    }
}

//Retorna la información del director con sus producciones
function showDirector() {
    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2");
    var encabezado = document.createElement("h2");
    divEncabezado.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode(this.value));

    var spanEncabezado = document.createElement("span");
    encabezado.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary ml-2");
    spanEncabezado.appendChild(document.createTextNode("Info"));

    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    //Con un iterador recorremos las categorias del videoSystem
    //var encontrado = "false";
    var VSystem = VideoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();

    //Recorremos las actores y las vamos pintando en el html
    while (director.done !== true) {
        var nomApe = director.value.name + " " + director.value.lastname1;
        if (nomApe === this.value) {
            var cols = document.createElement("div");
            cols.setAttribute("class", "col-12 3 m-4");
            principal.appendChild(cols);

            var card = document.createElement("div");
            card.setAttribute("class", "card");
            cols.appendChild(card);

            var filaA = document.createElement("div");
            filaA.setAttribute("class", "row");
            card.appendChild(filaA);

            var colFilaA = document.createElement("div");
            colFilaA.setAttribute("class", "col-12 col-md-4");
            filaA.appendChild(colFilaA);

            var img = document.createElement("img");
            img.setAttribute("src", director.value.picture);
            img.setAttribute("alt", director.value.name);
            img.setAttribute("class", "card-img-top w-100 m-2 rounded");
            colFilaA.appendChild(img);

            var colFilaB = document.createElement("div");
            colFilaB.setAttribute("class", "col-12 col-md-8");
            filaA.appendChild(colFilaB);

            var cardCuerpo = document.createElement("div");
            cardCuerpo.setAttribute("class", "card-body");
            colFilaB.appendChild(cardCuerpo);

            var cardH4 = document.createElement("h4");
            cardH4.setAttribute("class", "card-title text-center");
            cardCuerpo.appendChild(cardH4);
            cardH4.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));

            var cardPA = document.createElement("p");
            cardPA.setAttribute("class", "card-text");
            cardCuerpo.appendChild(cardPA);
            cardPA.appendChild(document.createTextNode("Nombre: " + director.value.name));

            var cardPB = document.createElement("p");
            cardPB.setAttribute("class", "card-text");
            cardCuerpo.appendChild(cardPB);
            cardPB.appendChild(document.createTextNode("Apellido: " + director.value.lastname1));

            var cardPC = document.createElement("p");
            cardPC.setAttribute("class", "card-text");
            cardCuerpo.appendChild(cardPC);
            cardPC.appendChild(document.createTextNode("Fecha de Nacimiento: " + director.value.born.toLocaleDateString()));

            var cardPie = document.createElement("div");
            cardPie.setAttribute("class", "card-footer");
            card.appendChild(cardPie);

            var cardEnlace = document.createElement("a");
            cardEnlace.setAttribute("href", "#");
            cardEnlace.setAttribute("class", "btn btn-outline-primary");
            cardPie.appendChild(cardEnlace);
            cardEnlace.appendChild(document.createTextNode("Volver Atrás"));

            cardEnlace.addEventListener("click", showDirectors); //Volvemos a la página donde se encuentran los directores

            var encabezadoB = document.createElement("h4");
            encabezadoB.setAttribute("class", "border-bottom");
            cardCuerpo.appendChild(encabezadoB);
            encabezadoB.appendChild(document.createTextNode("Producciones "));

            var divProduction = document.createElement("div");
            divProduction.setAttribute("class", "row");
            cardCuerpo.appendChild(divProduction);


            var productions = VSystem.getProductionsDirector(director.value);
            var production = productions.next();

            while (production.done !== true) {
                var colsB = document.createElement("div");
                colsB.setAttribute("class", "col-12 col-md-3 m-1");
                divProduction.appendChild(colsB);

                var cardB = document.createElement("div");
                cardB.setAttribute("class", "card h-100");
                colsB.appendChild(cardB);


                var imgB = document.createElement("img");
                imgB.setAttribute("src", production.value.image);
                imgB.setAttribute("alt", production.value.title);
                imgB.setAttribute("class", "card-img-top h-50");
                cardB.appendChild(imgB);

                var cardCuerpoB = document.createElement("div");
                cardCuerpoB.setAttribute("class", "card-body");
                cardB.appendChild(cardCuerpoB);

                var cardH5b = document.createElement("h6");
                cardH5b.setAttribute("class", "card-title text-center");
                cardCuerpoB.appendChild(cardH5b);
                cardH5b.appendChild(document.createTextNode(production.value.title));

                var cardPieB = document.createElement("div");
                cardPieB.setAttribute("class", "card-footer");
                cardB.appendChild(cardPieB);

                var cardEnlaceB = document.createElement("a");
                cardEnlaceB.setAttribute("href", "#");
                cardEnlaceB.setAttribute("class", "btn btn-outline-primary btn-block");
                cardPieB.appendChild(cardEnlaceB);
                cardEnlaceB.appendChild(document.createTextNode("Leer más..."));

                production = productions.next();
            }
        }

        director = directors.next();

    }

}

function showProductions() {
    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }
    divEncabezado.setAttribute("class", "border-bottom mt-2")
    var encabezado = document.createElement("h2");
    divEncabezado.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode(this.value));

    var spanEncabezado = document.createElement("span");
    encabezado.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary ml-2");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }
    
    //Con un iterador recorremos los categorias del videoSystem
    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    //Recorremos las categorias y las vamos pintando en el html
    while (category.done !== true) {
        var categoria = category.value.name;

        if (categoria === this.value) { //comprobamos el nombre de la categoria si coincide con el valor del boton de la categoria seleccionada

            var productions = VSystem.getProductionsCategory(category.value); //Recorremos con un iterador las productions relacionadas con esa categoria
            var production = productions.next();

            while (production.done !== true) {
                var cols = document.createElement("div");
                cols.setAttribute("class", "col-12 col-md-4");
                principal.appendChild(cols);

                var card = document.createElement("div");
                card.setAttribute("class","card m-3");
                cols.appendChild(card);

                var img = document.createElement("img");
                img.setAttribute("src", production.value.image);
                img.setAttribute("alt", production.value.title);
                img.setAttribute("class", "card-img-top");
                card.appendChild(img);

                var cardCuerpo = document.createElement("div");
                cardCuerpo.setAttribute("class", "card-body");
                card.appendChild(cardCuerpo);

                var cardPT= document.createElement("p");
                cardPT.setAttribute("class", "card-title text-center h3");
                cardCuerpo.appendChild(cardPT);
                cardPT.appendChild(document.createTextNode(production.value.title));

                var cardP = document.createElement("p");
                cardP.setAttribute("class","card-text text-center h5");
                cardCuerpo.appendChild(cardP);

                //Miramos si la production es una instancia de pelicula o serie para ponerle a la production un titulo indentificativo
                if(production.value instanceof Movie){
                    cardP.appendChild(document.createTextNode("Pelicula"));
                }else{
                    cardP.appendChild(document.createTextNode("Serie"));
                }

                var cardPie = document.createElement("div");
                cardPie.setAttribute("class", "card-footer");
                card.appendChild(cardPie);

                var cardEnlace = document.createElement("button");
                var tituloP = production.value.title;
                cardEnlace.setAttribute("type", "button");
                cardEnlace.setAttribute("value", tituloP);
                cardEnlace.setAttribute("class", "btn btn-outline-primary btn-block");
                cardPie.appendChild(cardEnlace);
                cardEnlace.appendChild(document.createTextNode("Ver más..."));

                cardEnlace.addEventListener("click", showProduction);

                production = productions.next();
            }
        }

        category = categories.next();
    }
}//Fin del showProductions

function showProduction(){
    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }
    divEncabezado.setAttribute("class", "border-bottom mt-2")
    var encabezado = document.createElement("h2");
    divEncabezado.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode(this.value));

    var spanEncabezado = document.createElement("span");
    encabezado.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary ml-2");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    var VSystem = VideoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();

    while(production.done !== true){
        var tituloP = production.value.title;
        if(tituloP ==  this.value){
            var cols = document.createElement("div");
            cols.setAttribute("class", "col-12 m-4");
            principal.appendChild(cols);

            var card = document.createElement("div");
            card.setAttribute("class", "card");
            cols.appendChild(card);

            var filaA = document.createElement("div");
            filaA.setAttribute("class", "row");
            card.appendChild(filaA);

            var colFilaA = document.createElement("div");
            colFilaA.setAttribute("class", "col-4");
            filaA.appendChild(colFilaA);

            var img = document.createElement("img");
            img.setAttribute("src", production.value.image);
            img.setAttribute("alt", production.value.name);
            img.setAttribute("class", "card-img-top w-100 m-2 rounded");
            colFilaA.appendChild(img);

            var colFilaB = document.createElement("div");
            colFilaB.setAttribute("class", "col-8");
            filaA.appendChild(colFilaB);

            var cardCuerpo = document.createElement("div");
            cardCuerpo.setAttribute("class", "card-body");
            colFilaB.appendChild(cardCuerpo);

            var cardH4 = document.createElement("h4");
            cardH4.setAttribute("class", "card-title text-center");
            cardCuerpo.appendChild(cardH4);
            cardH4.appendChild(document.createTextNode(tituloP));

            var cardPA = document.createElement("p");
            cardPA.setAttribute("class", "card-text");
            cardCuerpo.appendChild(cardPA);
            cardPA.appendChild(document.createTextNode("Fecha de Publicación: " + production.value.publication.toLocaleDateString()));

            //Miramos si la  production es una instancia de movie o de serie
            if(production.value instanceof Movie){
                var recurso = production.value.resource;
                if(recurso !== null){
                    var cardPB = document.createElement("p");
                    cardPB.setAttribute("class", "card-text");
                    cardCuerpo.appendChild(cardPB);
                    cardPB.appendChild(document.createTextNode("Recurso: " + production.value.resource));
                }
                
                var localizacion = production.value.location;
                if(localizacion !== null){
                    var cardPC = document.createElement("p");
                    cardPC.setAttribute("class", "card-text");
                    cardCuerpo.appendChild(cardPC);
                    cardPC.appendChild(document.createTextNode("Localización: " + production.value.localizacion)); 
                }
            }else{
                var temporadas = production.value.seasons;
                if(temporadas !== null){
                    var cardPD = document.createElement("p");
                    cardPD.setAttribute("class", "card-text");
                    cardCuerpo.appendChild(cardPD);
                    cardPD.appendChild(document.createTextNode("Temporadas: " + production.value.seasons));
                }
            }
            
            var cardPie = document.createElement("div");
            cardPie.setAttribute("class", "card-footer");
            card.appendChild(cardPie);

            var cardEnlace = document.createElement("button");
            cardEnlace.setAttribute("value","nombre categoria");
            cardEnlace.setAttribute("class", "btn btn-outline-primary");
            cardPie.appendChild(cardEnlace);
            cardEnlace.appendChild(document.createTextNode("Volver Atrás"));

            //cardEnlace.addEventListener("click", showProductions);
		}//Fin del if
		//Pasa a la siguiente produccion
		production = productions.next();
	}//Fin del while iterador
}//Fin de showProduction

function init() {
    initPopulate();
    showHomePage();
    categoriesMenuPopulate();
}
window.onload = init;