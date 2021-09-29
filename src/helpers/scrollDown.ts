export default function scrollDown(): void {

    let asideMenu = document.getElementById("aside-menu");
  
    let y = window.scrollY;
    let x = window.innerWidth;
  
    if (y >= 80 && x >= 1280 && asideMenu) {
        asideMenu.className = "aside-menu show";
    } 
    else {
        asideMenu.className = "aside-menu";
    }
  };