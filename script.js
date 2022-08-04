$("document").ready(()=>{
    
    
    const navknapp = $("#navSmallScreen")
    const menu = $(".menu")
    const tilToppKanpp =  $(".tilTopp")
    let barAktiv = false
    let tilToppAktiv = false

    const resetMenu = ()=>{
        menu.removeClass("menuActive")
        navknapp.removeClass("navbarSmallScreenActive")
        barAktiv=false
    }
    const openMenu = ()=>{
        navknapp.addClass("navbarSmallScreenActive")
        menu.addClass("menuActive")
        barAktiv=true
    }

    navknapp.click(() => {
        barAktiv ? resetMenu() : openMenu()
    }); 
    const children = $(".menuPoint")
    children.click(()=>{
        resetMenu()
    })
    $("window").click()
    window.addEventListener('mouseup', (e)=>{
        if(e.target.className !== "hamburgerBar"){   
            resetMenu()
        }
    });


    window.onscroll = ()=>{
        if(this.oldScroll > this.scrollY && !tilToppAktiv){
            tilToppKanpp.addClass("tilToppAktiv")
            tilToppAktiv= true
        }
        else if(this.oldScroll < this.scrollY){
            tilToppKanpp.removeClass("tilToppAktiv")
            tilToppAktiv=false
        }
        this.oldScroll = this.scrollY;
        }

        tilToppKanpp.click(()=>{
            tilToppKanpp.removeClass("tilToppAktiv")
        })
})


 