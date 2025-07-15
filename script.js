const langBtn = document.getElementById('toggle-lang');
const heroText = document.getElementById('hero-text');
const servicesText = document.getElementById('services-text');
let isSpanish = true;
langBtn.addEventListener('click', () => {
  if (isSpanish) {
    heroText.textContent = 'Your safety starts in our workshop';
    servicesText.innerHTML = `
      <h2>Services</h2>
      <ul>
        <li>✔ Complete general inspection</li>
        <li>✔ Brakes, suspension, engine</li>
        <li>✔ Oil change and tuning</li>
        <li>✔ Diagnosis via WhatsApp with photo and video</li>
      </ul>
      <h3>Special Promo</h3>
      <ul>
        <li>✅ FREE general inspection with oil change</li>
        <li>✅ 10% discount for referrals</li>
      </ul>
    `;
    langBtn.textContent = 'ES';
  } else {
    heroText.textContent = 'Tu seguridad comienza en nuestro taller';
    servicesText.innerHTML = `
      <h2>Servicios</h2>
      <ul>
        <li>✔ Revisión general completa</li>
        <li>✔ Frenos, suspensión, motor</li>
        <li>✔ Cambio de aceite y afinación</li>
        <li>✔ Diagnóstico por WhatsApp con foto y video</li>
      </ul>
      <h3>Promo Especial</h3>
      <ul>
        <li>✅ Revisión general GRATIS con cambio de aceite</li>
        <li>✅ 10% de descuento por recomendación</li>
      </ul>
    `;
    langBtn.textContent = 'EN';
  }
  isSpanish = !isSpanish;
});