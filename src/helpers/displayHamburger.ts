export default function displayHamburgerMenu(): void {

    const navMenu: HTMLElement = document.getElementsByClassName("nav-menu")[0] as HTMLElement;
    
    document.getElementById("hamburger")?.addEventListener("click", () => navMenu.classList.toggle("active-block"));
    
}
    