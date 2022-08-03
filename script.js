$("document").ready(()=>{
    let barAktiv = false
    const navknapp = $("#navSmallScreen")
    const menu = $(".menu")
    navknapp.click(function (e) {
        if(barAktiv){
            menu.removeClass("menuActive")
            navknapp.removeClass("navbarSmallScreenActive")
        }
        else{
            navknapp.addClass("navbarSmallScreenActive")
            menu.addClass("menuActive")
        }
        barAktiv=!barAktiv
       
    }); 
    const children = $(".menuPoint")
    children.click(()=>{
        menu.removeClass("menuActive")
        navknapp.removeClass("navbarSmallScreenActive")
        barAktiv=false
    })
    $("window").click()
    window.addEventListener('mouseup', (e)=>{
        if(e.target.className !== "hamburgerBar"){   
            menu.removeClass("menuActive")
            navknapp.removeClass("navbarSmallScreenActive")
            barAktiv=false
        }
    });
})

 