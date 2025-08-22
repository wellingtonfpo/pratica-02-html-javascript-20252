document.getElementById('frmCadastro').addEventListener('submit', function (e) {
  e.preventDefault();
  const txtMarca = document.getElementById('marca');
  const txtModelo = document.getElementById('modelo');
  const txtAno = document.getElementById('ano');
  const tableVeiculos = document.getElementById('tabela-veiculos');

  const marca = txtMarca.value;
  const modelo = txtModelo.value;
  const ano = txtAno.value;

  tableVeiculos.appendChild(document.createElement('tr')).innerHTML = `
    <td>${marca}</td>
    <td>${modelo}</td>
    <td>${ano}</td>
  `;

  alert('Veículo cadastrado com sucesso!');

  txtMarca.value = '';
  txtModelo.value = '';
  txtAno.value = '';
  txtMarca.focus();
});
