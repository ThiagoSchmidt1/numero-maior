var numero01 = prompt('informe o primeiro número');
var numero02 = prompt('informe o segundo número');
var numero03 = prompt('informe o terceiro número');

if ((numero01 > numero02) && (numero01 > numero03)) mensagem = 'O primeiro número informado é maior!';
else
if ((numero02 > numero01) && (numero02 > numero03)) mensagem = 'O segundo número informado é maior!';
else
if ((numero03 > numero01) && (numero03 > numero02)) mensagem = 'O terceiro número informado é maior!';
else
mensagem = 'Os números são iguais ou nada foi informado';
alert(mensagem);