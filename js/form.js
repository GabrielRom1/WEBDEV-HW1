let count = 0;

document.getElementById("form").addEventListener("submit", function(){
    count = count +1;

    // le digo al user que ha sometido mucho
    if(count > 7){
        alert("Porfavor no sigas sometiendo...");
    }

    // capturo los valores de los inputs
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let content = document.getElementById("submit-container");  
    let img = document.createElement("img");


    if(!validForm(name, email, message) ){
        // imagen de error 
        img.src = "../static/fail.jpg"
    }
    else{
        // succes submit
        img.src = "../static/success.jpeg" ;
    }

    img.alt = "imagen al someter";

    img.style.width = "200px";

    content.appendChild(img);
});


// verifico si un form es valido
function validForm(name, email, message){
    return (validName(name) && validEmail(email) && validMessage(message)   );
}

// verifico si un nombre es valido (si no es vacio)
function validName(name){
    if(name == ''){
        alert("Debes ingresar un nombre!");
        return false;

    }
    return true;
}

// verifico si un email es valido
function validEmail(email){
    // caso si es vacio
    if(email == ''){
        alert("Debes ingresar un email!");
        return false;
    }
    // si no tiene nada antes del @
    else if( !hasPrefix(email) ){
        return false;   
    }
    // si no tiene nada valido despues del @
    else if(!hasPostFix(email) ){
        return false;
    }
    return true;
}

// verifico el prefix (lo de antes del @)
function hasPrefix(email){
    // primera aparicion del @
    let firstAtIndex = email.indexOf('@');
    if(firstAtIndex == -1){
        alert("El email ingresado no tiene @.");
        return false;
    }

    // ultima aparicion del @
    let lastAtIndex = email.lastIndexOf('@');

    // deben ser iguales sino el email tiene 2 @
    if(firstAtIndex != lastAtIndex){
        alert("El email ingresado tiene dos @. Es inválido.");
        return false;
    }

    //verifica si empieza con @ 
    if(firstAtIndex == 0){
        alert("El email ingresado empieza con @.");
        return false;
    }
    // debugg
    // let prefix = email.slice(0,firstAtIndex);
    // console.log("Prefix");
    // console.log(prefix);

    return true;
}

// verifica si tiene algo valido despues del @
function hasPostFix(email){
    let firstAtIndex = email.indexOf('@');

    // caso donde termina con @
    if(firstAtIndex == email.length -1){
        alert("El email ingresado termina con @.");
        return false;
    }

    // capturo el postfix
    let postfix = email.slice(firstAtIndex+1, email.length);

    // verifica si el postfix es valido (algo.domain)
    if( !validPostFix(postfix) ){
        return false;
    }

    // debug
    // console.log("Postfix");
    // console.log(postfix);

    return true;
}

//verifica si el postfix es valido (algo.domain) 
function validPostFix(postfix){
    let firstDotIndex = postfix.indexOf('.');
    
    if(firstDotIndex == -1){
        alert("El email ingresado no tiene . despues del @");
        return false;
    }

    let lastDotIndex = postfix.lastIndexOf('.');

    if(firstDotIndex != lastDotIndex){
        alert("El email ingresado tiene dos '.' despues del @.");
        return false;
    }

    if(firstDotIndex == postfix.length -1){
        alert("El email ingresado termina con .");
        return false;
    }

    // debug
    // let domain = postfix.slice(firstDotIndex+1, postfix.length);
    // console.log("Domain");
    // console.log(domain);

    return true;
}

// verifica si un mensaje es valido (si no esta vacio)
function validMessage(message){
    if(message == ''){
        alert("Debes ingresar un mensaje!");
        return false;
    }
    return true;
}