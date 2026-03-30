let body=document.querySelector("body");
let currentmode="light";
let nav=document.querySelector("nav");

function themeChange(){
    if(currentmode=="light"){
        currentmode="dark";
        // body.style.backgroundColor("white");
        nav.classList.add("dark");
        nav.classList.remove("light")
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentmode="light";
        // body.style.Color("dark");
        body.classList.add("light");
        body.classList.remove("dark");
        nav.classList.add("light");
        nav.classList.remove("dark");
        }

}