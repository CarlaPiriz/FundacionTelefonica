const nombres = () => {
  let num = document.getElementById('num').value;
  let nombres = [];
  for (let i = 0; i < num; i++) {
    let n = prompt(`Ingrese el nombre numero  ${i + 1}`);
    nombres.push(' ' + n);
  }
  alert(`Escribiste ${num} nombres : ${nombres}`);
};
const calcular = () => {
  let opcion = document.form_2.number.value;
  let numeros = [];
  if (opcion == 'par') {
    for (let i = 1; i <= 100; i++) {
      if (i % 2 == 0 && i % 5 == 0) {
        numeros.push(' ' + i);
      }
    }
    alert(`Los numeros pares multiplos de 5 son : ${numeros} `);
  } else {
    if (opcion == 'impar') {
      for (let i = 1; i <= 100; i++) {
        if (i % 2 != 0 && i % 5 == 0) {
          numeros.push(' ' + i);
        }
      }
      alert(`Los numeros impares multiplos de 5 son : ${numeros} `);
    }
  }
};
const maths = () => {
  let lista = document.getElementById('lista');
  let select = lista.options[lista.selectedIndex].value;
  let num1 = +document.getElementById('numero1').value;
  let num2 = +document.getElementById('numero2').value;
  switch (select) {
    case '+':
      alert(`El resultado de la suma entre los números ${num1} y ${num2} es igual a ${num1 + num2}`);
      break;

    case '-':
      alert(`El resultado de la resta entre los números ${num1} y ${num2} es igual a ${num1 - num2}`);
      break;

    case 'x':
      alert(`El resultado de la multiplicacion entre los números ${num1} y ${num2} es igual a ${num1*num2}`);
      break;
  }
};
