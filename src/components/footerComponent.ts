export default function footerComponent(): string {
  return `
  <footer class="main-footer">
      <span class="brand-name footer-name">LIBRA</span>
      <ul class="footer-nav">
          <li class="footer-logos">
              <a href="http://twitter.com/" target="_blank">
                  <img src="./resources/logos/twitter/white.png" alt="twitter">
              </a>
          </li>
          <li class="footer-logos">
              <a href="http://facebook.com/" target="_blank">
                  <img src="./resources/logos/facebook/white.png" alt="facebook">
              </a>
          </li>
          <li class="footer-logos">
              <a href="http://instagram.com/" target="_blank">
                  <img class="insta" src="./resources/logos/instagram/instagram.png" alt="twitter">
              </a>
          </li>
      </ul>
  </footer>
  `;
}