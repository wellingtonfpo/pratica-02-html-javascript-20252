document.addEventListener('DOMContentLoaded', () => {
  const txtMarca = document.getElementById('marca');
  const txtModelo = document.getElementById('modelo');
  const txtAno = document.getElementById('ano');
  const tabelaVeiculos = document.getElementById('tabela-veiculos');

  const API_URL = 'http://localhost:3000/api';

  const fetchCars = async () => {
    const response = await fetch(`${API_URL}/cars`);
    const cars = await response.json();

    tabelaVeiculos.innerHTML = '';
    cars.forEach((car) => {
      tabelaVeiculos.appendChild(document.createElement('tr')).innerHTML = `
      <td>${car.marca}</td>
      <td>${car.modelo}</td>
      <td>${car.ano}</td>
      <td>
        <div class="actions">
          <button class="fa-solid fa-pen-to-square edit-btn" data-id="${car.id}"></button>
          <button class="fa-solid fa-trash delete-btn" style="color: red;" data-id="${car.id}"></button>
        </div>
      </td>
  `;
    });
  };

  fetchCars();

  // const marca = txtMarca.value;
  // const modelo = txtModelo.value;
  // const ano = txtAno.value;

  // txtMarca.value = '';
  // txtModelo.value = '';
  // txtAno.value = '';
  // txtMarca.focus();
});
