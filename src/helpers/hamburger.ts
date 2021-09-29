
export default function displayHamburgerMenu(): void{
    let menuClick: number = 0;
    document.getElementById("hamburger")
      .addEventListener("click", function (e): void { 
        e.preventDefault
        const navMenu = document.getElementsByClassName("nav-menu")[0];
        menuClick += 1;
        if (menuClick == 1){
        (navMenu as HTMLElement).className = "nav-menu active";
        }
        else{
        (navMenu as HTMLElement).className = "nav-menu"
        menuClick = 0;
        }
    })
}


