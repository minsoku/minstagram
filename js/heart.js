function feed_heart_red(a, b){
    const name = document.getElementById(a);
    const namee = document.getElementById(b);
    let number = namee.innerText;
    number = parseInt(number) + 1;
    namee.innerText = number;
    name.className = "fas fa-heart";
    name.style.color = "red";
    
}

function feed_heart_space(a, b){
    const name = document.getElementById(a);
    const namee = document.getElementById(b);
    let number = namee.innerText;
    number = parseInt(number) - 1;
    namee.innerText = number;
    name.className = "far fa-heart";
    name.style.color = "black";
}

function feed_heart(a, b){
    const change = document.getElementById(a).style.color
    if (change == "red") {
        feed_heart_space(a, b);
    } else
    feed_heart_red(a, b);
    
}

