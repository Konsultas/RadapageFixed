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
        navknapp.addClass("navbarSmallScreenActive")
        menu.addClass("menuActive")
        return true
    } 
    children.click(()=>{
        resetMenu()
    })
    window.addEventListener('mouseup', (e)=>{ 
        let result = false
        if((e.target.className+"").split(" ")[1] === "hamburgerBtn" && !barAktiv) result = openMenu()
        else result = resetMenu()
        navknapp.attr("aria-expanded", result)
        barAktiv = result
    });
    window.addEventListener("keydown", e=>{
        if(e.key ==="Enter" && tilToppAktiv){
            $(window).scrollTop(0);
            tilToppKanpp.removeClass("tilToppAktiv")
        }
    })

    window.onscroll = ()=>{
        const h =  window.innerHeight
        if(this.oldScroll > this.scrollY && !tilToppAktiv && this.scrollY > h){
            tilToppKanpp.addClass("tilToppAktiv")
            tilToppAktiv= true
        }
        else if(this.oldScroll < this.scrollY){
            tilToppKanpp.removeClass("tilToppAktiv")
            tilToppAktiv=false
            if(barAktiv && this.scrollY > h) barAktiv=resetMenu()
        }
        if(this.scrollY < h){
            tilToppKanpp.removeClass("tilToppAktiv")
            tilToppAktiv=false
        }
        this.oldScroll = this.scrollY;
        }

        tilToppKanpp.click(()=>{
            tilToppKanpp.removeClass("tilToppAktiv")
        })
})


 
