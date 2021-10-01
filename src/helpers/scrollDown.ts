export default function scrollDown(): void {

    let asideMenu = document.getElementById("aside-menu") as HTMLElement;
  
    let y = window.scrollY;
    let x = window.innerWidth;

    let downPixels: number = 80;
    let widthPixels: number = 1280;
    
    if (y >= downPixels && x >= widthPixels) {
        asideMenu?.classList.add("active-inline-block");
    } 
    else{
        asideMenu?.classList.remove("active-inline-block")
    } 
}

