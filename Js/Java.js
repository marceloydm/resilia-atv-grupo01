function clickProduto (produto,valor) {
	alert(`${produto} custa R$ ${valor} e foi adicionado ao carrinho!`);

}

function validacao() {
	var formulario = document.forms["formcadastro"]
	var nome = formulario.name.value
	var telefone = formulario.tel.value
	var endereco = formulario.adress.value
	

	var erro = false

	if (formulario.name.value=='') {
		alert("Oops! Este campo precisa ser preenchido.")
	}

	if (telefone.length < 11) {
		alert ("Oops! Parece que seu telefone não possui todos os dígitos.")
		erro = true // quando identifica um erro 
	}
	 
	if (erro) { // se houver algum erro, retorna falso
		return false
	} else {
		return true
	}

}