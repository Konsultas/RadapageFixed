$("document").ready(()=>{
    const navknapp = $("#navSmallScreen")
    const menu = $(".menu")
    const tilToppKanpp =  $(".tilTopp")
    const children = $(".menuPoint")

    let barAktiv = false
    let tilToppAktiv = false

    const resetMenu = ()=>{
        menu.removeClass("menuActive")
        navknapp.removeClass("navbarSmallScreenActive")
        return false
    }
    const openMenu = ()=>{
        console.log("hei")
        navknapp.addClass("navbarSmallScreenActive")
        menu.addClass("menuActive")
        return true
    } 
    children.click(()=>{
        resetMenu()
    })
    window.addEventListener('mouseup', (e)=>{ 
        if((e.target.className+"").split(" ")[1] === "hamburgerBtn" && !barAktiv) barAktiv = openMenu()
        else barAktiv = resetMenu()
    });
    window.addEventListener("keydown", e=>{
        if(e.key ==="Enter" && tilToppAktiv){
            $(window).scrollTop(0);
            tilToppKanpp.removeClass("tilToppAktiv")
        }
    })

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


 