document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form || !status) return;

  const setStatus = (message, type = '') => {
    status.textContent = message;
    status.classList.remove('error', 'success');
    if (type) status.classList.add(type);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = form.querySelectorAll('[required]');
    let allValid = true;

    fields.forEach((field) => {
      const value = field.value.trim();
      const isValid = field.checkValidity() && value.length > 0;

      field.setAttribute('aria-invalid', String(!isValid));
      if (!isValid) {
        allValid = false;
      }
    });

    if (!allValid) {
      setStatus('Preencha todos os campos obrigatórios antes de enviar.', 'error');
      return;
    }

    const emailField = form.querySelector('#email');
    const emailValue = emailField?.value.trim() || '';
    if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setStatus('Informe um e-mail válido antes de enviar.', 'error');
      return;
    }

    const nome = form.querySelector('#nome')?.value.trim() || 'Visitante';
    setStatus(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Em breve, Felipe Maia entrará em contato.`, 'success');
    form.reset();
  });
});
