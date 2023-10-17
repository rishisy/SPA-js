
document.addEventListener("click" , (e) =>{
    const {target} = e;

    if (!target.matches("nav a")){
        return;
    }
    e.preventDefault();
    urlRoute(e);
})


const urlRoutes = {
    404 : {
        template : "/template/404.html",
        title : "",
        description : ""


    },
    "/" : {
        template : "/templates/index.html",
        title : "HOME",
        description : "",


    },
    "/about" : {
        template : "/templates/about.html",
        title : "ABOUT",
        description : "",


    },
    "/contact" : {
        template : "/templates/contact.html",
        title : "Contact",
        description : "",


    }
}
const urlRoute = (event) => {

    event.preventDefault();
    window.history.pushState({} , "" , event.target.href);
    urlLocationHandler();


}


const urlLocationHandler = async() =>{
    const location = window.location.pathname;
    if (location.length ==0 ){
        location = "/";

    }
    const route = urlRoutes[location]|| urlRoutes[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;



}





// new code

function bgchanger(){
    let element = document.getElementById("mainpage");
    element.style.backgroundImage = "url('/resources/backgrounds/bg2.jpg')";

}

