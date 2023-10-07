let menu = document.getElementById("all");
menu.addEventListener('click',()=>{
    console.log("jiiii")
    let x = document.getElementById("sidemenu");
    if(x.style.left == "-350px"){
        x.style.left = "0px";
    }else{
        x.style.left = "-350px";
    }
})