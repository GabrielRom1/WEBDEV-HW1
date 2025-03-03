

document.getElementById("form").addEventListener("submit", function(){

    let content = document.getElementById("submit-container");  

    let img = document.createElement('img');

    img.src = "../download.jpeg" ;

    img.alt = "imagen al someter";

    img.style.width = "200px";


    content.appendChild(img);
});

// https://www.reddit.com/r/webdev/comments/182tyzu/how_to_prevent_page_refresh_when_auto_submitting/?rdt=57377
// referencia de return false en onsubmit