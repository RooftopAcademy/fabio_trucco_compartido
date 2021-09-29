export default function scrollDown(): void {

    let asideMenu = document.getElementById("aside-menu");
  
    let y = window.scrollY;
    let x = window.innerWidth;

    let downPixels: number = 80;
    let widthPixels: number = 1280;
    
    if (y >= downPixels && x >= widthPixels) {
        asideMenu.className = "aside-menu show";
    } 
    else {
        asideMenu.className = "aside-menu";
    }
}