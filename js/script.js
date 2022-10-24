let container = document.getElementById("container")



//CREO UN CICLO FOR CHE MI STAMPA IN CONSOLE 100 NUMERI DOVE I MULTIPLI DI 3 SONO DENOMINATI FRIZZ I MULTIPLI 5 BUZZ E I MULTIPLI DI 15 FRIZZBUZZ
for(let i= 1; i< 101; i++){
    //CONDIZIONE CHE SELEZIONA N DIVISIBILI PER 15
    if(i % 15 == 0){

        //STAMPA IN CONSOLE LA STRINGA 
        console.log("FrizzBuzz");
        
        //CREO UN DIV IN JS
        const element = document.createElement("div");

        //CREO UNA CLASSE ALL'ELELEMENTO
        element.classList.add("frizz-buzz")

        //CREO UNA CLASSE ALL'ELELEMENTO
        element.classList.add("square")

        //INSERISCO UN CONTENUTO NELL'ELEMENTO
        element.innerHTML = ("frizzBuzz")

        //STAMPO L'ELEMENTO CREATO IN HTML NEL CONTAINER
        container.append(element)

    }else if( i % 3 == 0 ){
        console.log("Frizz");

        
        //CREO UN DIV IN JS
        const element = document.createElement("div");

        //CREO UNA CLASSE ALL'ELELEMENTO
        element.classList.add("frizz")

        //CREO UNA CLASSE ALL'ELELEMENTO
        element.classList.add("square")

        //INSERISCO UN CONTENUTO NELL'ELEMENTO
        element.innerHTML = ("frizz")

        //STAMPO L'ELEMENTO CREATO IN HTML NEL CONTAINER
        container.append(element)

    }else if (i % 5 == 0){
        console.log("Buzz");

         //CREO UN DIV IN JS
        const element = document.createElement("div");

        //CREO UNA CLASSE ALL'ELELEMENTO
        element.classList.add("buzz")

        //CREO UNA CLASSE ALL'ELELEMENTO
        element.classList.add("square")

        //INSERISCO UN CONTENUTO NELL'ELEMENTO
        element.innerHTML = ("buzz")

        //STAMPO L'ELEMENTO CREATO IN HTML NEL CONTAINER
        container.append(element)

    }else{
        console.log(i);

         //CREO UN DIV IN JS
        const element = document.createElement("div");

        //CREO UNA CLASSE ALL'ELELEMENTO
        element.classList.add("number")

        //CREO UNA CLASSE ALL'ELELEMENTO
        element.classList.add("square")

        //INSERISCO UN CONTENUTO NELL'ELEMENTO
        element.innerHTML = (i)

        //STAMPO L'ELEMENTO CREATO IN HTML NEL CONTAINER
        container.append(element)
        
    }
}