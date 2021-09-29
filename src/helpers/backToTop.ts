export default function backToTop(): void {
    document.getElementById("back-to-top")!
    .addEventListener("click", function (): void {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    })
  }