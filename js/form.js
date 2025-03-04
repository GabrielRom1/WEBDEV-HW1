document.getElementById("form").addEventListener("submit", function(){
    let content = document.getElementById("submit-container");  

    let img = document.createElement("img");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(!validForm(name, email, message) ){
        img.src = "../static/logo-beca-BFC.jpg"
        
        img.alt = "imagen al someter";

        img.style.width = "200px";

        content.appendChild(img);
    }
    else{

        img.src = "../download.jpeg" ;

        img.alt = "imagen al someter";

        img.style.width = "200px";

        content.appendChild(img);
    }
});



function validForm(name, email, message){
    return (validName(name) && validEmail(email) && validMessage(message)   );
}

function validName(name){
    if(name == ''){
        alert("Debes ingresar un nombre!");
        return false;

    }
    return true;
}


function validEmail(email){
    if(email == ''){
        alert("Debes ingresar un email!");
        return false;
    }
    else if( !hasPrefix(email) ){
        return false;   
    }

    else if(!hasPostFix(email) ){
        return false;
    }
    return true;
}

function hasPrefix(email){
    let firstAtIndex = email.indexOf('@');
    if(firstAtIndex == -1){
        alert("El email ingresado no tiene @.");
        return false;
    }
    let lastAtIndex = email.lastIndexOf('@');

    if(firstAtIndex != lastAtIndex){
        alert("El email ingresado tiene dos @. Es inválido.");
        return false;
    }
    
    if(firstAtIndex == 0){
        alert("El email ingresado empieza con @.");
        return false;
    }
    let prefix = email.slice(0,firstAtIndex);
    
    console.log("Prefix");
    console.log(prefix);

    return true;
}


function hasPostFix(email){
    let firstAtIndex = email.indexOf('@');

    if(firstAtIndex == email.length -1){
        alert("El email ingresado termina con @.");
        return false;
    }

    let postfix = email.slice(firstAtIndex+1, email.length);

    if( !validPostFix(postfix) ){
        return false;
    }

    console.log("Postfix");
    console.log(postfix);

    return true;
}

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

    let domain = postfix.slice(firstDotIndex+1, postfix.length);

    console.log("Domain");
    console.log(domain);

    return true;
}

function validMessage(message){
    if(message == ''){
        alert("Debes ingresar un mensaje!");
        return false;
    }
    return true;
}

// referencia de metodos de string
// https://www.w3schools.com/jsref/jsref_obj_string.asp



// https://www.reddit.com/r/webdev/comments/182tyzu/how_to_prevent_page_refresh_when_auto_submitting/?rdt=57377
// referencia de return false en onsubmit