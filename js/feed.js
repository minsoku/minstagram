function state_save(){
    let state_save = document.getElementById('state_save');
    if(state_save.className == "far fa-bookmark"){
        state_save.className = "fas fa-bookmark"
    }else if(state_save.className == "fas fa-bookmark"){
        state_save.className = "far fa-bookmark"
    }
}

