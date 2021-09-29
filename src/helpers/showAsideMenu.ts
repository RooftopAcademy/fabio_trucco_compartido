import scrollDown from "./scrollDown";

export default function showAsideMenu(): void {
    window.addEventListener("scroll", scrollDown);
  }