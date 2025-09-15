const topMenus = document.getElementById("top-menus");
const topitems = document.getElementById("top-items");
const searchBar = document.getElementById("search-bar");

window.addEventListener("scroll", () => {  
    const scrollPosition = window.scrollY;
    if(scrollPosition > 100){
        searchBar.style.height = '0'
        topMenus.style.height = '3rem'
        topitems.style.height = '0'
        
    }else{
        searchBar.style.height = '5rem'
        topitems.style.height = '4rem'
        topMenus.style.height = '0'
    }
})