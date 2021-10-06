export default function toggleDisplay(elementId: string) : void {

  document.getElementById(elementId).classList.toggle('d-none');

}