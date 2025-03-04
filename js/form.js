

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

// https://www.reddit.com/r/webdev/comments/182tyzu/how_to_prevent_page_refresh_when_auto_submitting/?rdt=57377
// referencia de return false en onsubmit


function validForm(name, email, message){

    return (validName(name) && validEmail(email) && validMessage(message)   );

}

function validName(name){

    console.log("probando");
    

    if(name == ''){
        return false;
    }
    return false;
}


function validEmail(email){

    if(email == ''){
        return false;
    }
    return true;
}


function validMessage(message){

    if(message == ''){
        return false;
    }
    return true;

}




