function somar() {
  const num1 = Number(document.getElementById('num1').value)
  const num2 = Number(document.getElementById('num2').value)
  if (num1 != '' && num2 != '') {
    let soma = num1 + num2
    document.getElementById('result').innerHTML = 'Resultado: ' + soma
  } else {
    alert('Preencha os dois campos.')
  }

}

function limpar() {
  document.getElementById('num1').value = ''
  document.getElementById('num2').value = ''
  document.getElementById('result').innerHTML = 'Resultado: '
}

function subt() {
  const num3 = Number(document.getElementById('num3').value)
  const num4 = Number(document.getElementById('num4').value)
  if (num3 != '' && num4 != '') {
    let subtrac = num3 - num4
    document.getElementById('result1').innerHTML = 'Resultado: ' + subtrac
  } else {
    alert('Preencha os dois campos.')
  }

}

function limpar1() {
  document.getElementById('num3').value = ''
  document.getElementById('num4').value = ''
  document.getElementById('result1').innerHTML = 'Resultado: '
}

function divs() {
  const num5 = Number(document.getElementById('num5').value)
  const num6 = Number(document.getElementById('num6').value)
  if (num5 != '' && num6 != '') {
    let divis = num5 / num6
    document.getElementById('resulta').innerHTML = 'Resultado: ' + divis
  } else {
    alert('Preencha os dois campos.')
  }

}

function limpar2() {
  document.getElementById('num5').value = ''
  document.getElementById('num6').value = ''
  document.getElementById('resulta').innerHTML = 'Resultado: '
}

function mult() {
  const num7 = Number(document.getElementById('num7').value)
  const num8 = Number(document.getElementById('num8').value)
  if (num7 != '' && num8 != '') {
    let divis = num7 * num8
    document.getElementById('resulta1').innerHTML = 'Resultado: ' + divis
  } else {
    alert('Preencha os dois campos.')
  }

}

function limpar3() {
  document.getElementById('num7').value = ''
  document.getElementById('num8').value = ''
  document.getElementById('resulta1').innerHTML = 'Resultado: '
}










function calcular() {
  const ap1 = Number(document.getElementById('ap1').value)
  const ap2 = Number(document.getElementById('ap2').value)
  const sa = Number(document.getElementById('sa').value)

  let nota = (ap1 + ap2 + sa) / 3
  if (nota >= 6) {
    alert('Você foi aprovado!')
  }
  else if (nota < 6) {
    alert('Você foi reprovado')
  }
  document.getElementById('nota').innerHTML = 'Nota: ' + nota
}
function clean() {
  document.getElementById('ap1').value = ''
  document.getElementById('ap2').value = ''
  document.getElementById('sa').value = ''
  document.getElementById('nota').innerHTML = 'Nota: '
}
function verificaAp1() {
  const ap1 = Number(document.getElementById('ap1').value)
  if (ap1 < 0 || ap1 > 10.0) {
    alert('Nota inválida')
    document.getElementById('ap1').focus()
    document.getElementById('ap1').value = ''
  }

}
function verificaAp2() {
  const sa = Number(document.getElementById('ap2').value)
  if (ap2 < 0 || ap2 > 10.0) {
    alert('Nota inválida')
    document.getElementById('ap2').focus()
    document.getElementById('ap2').value = ''
  }
}
function verificasa() {
  const sa = Number(document.getElementById('sa').value)
  if (sa < 0 || sa > 10.0) {
    alert('Nota inválida')
    document.getElementById('sa').focus()
    document.getElementById('sa').value = ''
  }
}