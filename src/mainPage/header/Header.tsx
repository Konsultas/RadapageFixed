import Image from "next/image"

export const Header = ()=>{
    return(
      <header>
          <div id="topp" className="navfelt">
              <a href="index.html"><Image className="companyLogo" src={require("../../../public/resources/radaLogo.png")} alt="Rada consulting-logo"></Image></a>
              <nav >
                  <ul className="navBar">
                      <li><a role="button" href="#innledning">Om Oss</a></li>
                      <li><a role="button" href="#jobbeHer">Jobbe Her?</a></li>
                      <li><a role="button" href="#footer">Kontakt</a></li>
                  </ul>
                  <div className="navContainer">
                      <button aria-label="Hovedmeny" aria-expanded="false" id="navSmallScreen" className="navbarSmallScreen hamburgerBtn">
                          <span className="hamburgerBar hamburgerBtn"></span>
                          <span className="hamburgerBar hamburgerBtn"></span>
                          <span className="hamburgerBar hamburgerBtn"></span>
                      </button>
                      <ul  className="menu">
                          <a role="button" className="menuPoint"   href="#innledning">Om Oss</a>
                          <a role="button" className="menuPoint"  href="#jobbeHer">Jobbe Her?</a>
                          <a role="button" className="menuPoint"  href="#footer">Kontakt</a>
                      </ul>  
                  </div>
                
                  
              </nav>
            
          </div>
          <div className="mottoWrapper">
              <h1 className="motto">
                  Vi bygger norges råeste techmiljø
              </h1>
          </div>
      </header>
    )
}