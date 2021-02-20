
function feed_heart_red(a){
    const name = document.getElementById(a);
    name.className = "fas fa-heart";
    name.style.color = "red";
    console.log(b);
}

function feed_heart_space(a){
    const name = document.getElementById(a);
    name.className = "far fa-heart";
    name.style.color = "black";
}

function feed_heart(a){
    const change = document.getElementById(a).style.color
    if (change == "red") {
        feed_heart_space(a);
    } else
    feed_heart_red(a);
    
}

