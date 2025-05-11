function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function sumarVaso(tipo) {
  const key = tipo + '-count';
  let count = parseInt(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, count);
  document.getElementById(key).textContent = count;
  if (tipo === 'agua') {
    document.getElementById('agua-alerta').textContent = count < 6 ? "Aporte insuficiente de agua." : "";
  }
  if (tipo === 'elim') {
    document.getElementById('elim-alerta').textContent = count < 1 ? "Registro bajo de eliminación." : "";
  }
}
function actualizarEjercicio() {
  const pasos = 4500;
  const objetivo = 10000;
  const kcal = Math.round(pasos * 0.04);
  const km = (pasos * 0.0007).toFixed(1);
  const progreso = Math.min(100, (pasos / objetivo) * 100);
  document.getElementById('pasos').textContent = pasos;
  document.getElementById('kcal').textContent = kcal;
  document.getElementById('km').textContent = km;
  document.getElementById('barra-progreso').style.width = progreso + '%';
}
window.onload = function() {
  ['agua', 'elim'].forEach(tipo => {
    const key = tipo + '-count';
    let count = parseInt(localStorage.getItem(key) || "0");
    document.getElementById(key).textContent = count;
  });
  actualizarEjercicio();
}
