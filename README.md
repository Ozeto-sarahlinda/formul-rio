# INDÍCE
[ (titulo) - Introdução]  
[Funcionalidades](#funcionalidades)  
[Tecnologias utilizadas](#tecnologias-utilizadas)  
[Fontes consultadas](#fontes-consultadas)  
[Autores](#autores)  

# PROJETO FORMULÁRIO DE CADASTRO: Introdução
![]()

Anteriormente criamos um simples formulário para trbalhar a verificação de senhar, utilizando as tecnologias do Javascript, adicionamos ao formulário a verificação de CEP, o preenchimento automático dos campos de endereço e também a verificação se todos os campos foram preenchidos.

## Funcionalidades
O usuário digita uma determinada senha e a digita novamente para confirmação, caso as senhas não sejam iguais o código irá alertar o usuário sobre tal. 

### EXPRESSÃO REGULAR

### STRICT MODE

### VERIFICAÇAÕ DE SENHAS
![]()

-- texto

### VALIDANDO O CEP
![]()

Quando o usuário digitar, o código vai verificar se o o que foi digitado contém a quantidade de digitos corretos. De uma forma mais simplificada: funciona como um compartimento com nove entradas, o resultado apenas será aceito caso tenha a quantidade correta de digitos e, na segunda linha, especificamos que essa quantidade é oito e que deverá conter apenas números. Em outras palavras, é como se dissessemos "apenas será verdadeiro se o que for escrito tiver oito digitos e todos forem números".


Outro evento que acontece é que o código reconhece caso o usuário digitar um CEP inexistente. Para que isso aconteça foi feito uma espécie de ponte entre o nosso código e o site da viacep, usando o **fetch**, que possibilita fazer chamadas com APIs externas de formas simples e assíncronas. Após criarmos essa ligação, foi usado o **hasOwnProperty** para verificar se o que foi digitado existe ou não, ele verifica dentro da variável e depois retorna um alert dependendo do resultado.É como se o fetch começasse o trabalho e o hasOwnProperty terminasse. 

**async**

**await**


### LIMPAR E PREENCHER FORMULÁRIO
![]()

Quando o CEP for validado, ao passar de um campo para o outro, o formulário limpa antes de preencher com novas informações e isso ocorre graças ao **addEventListener('focusout')**. Explicando brevemente nós adicionamos um evento e o **focusout** atua quando o foco saí da linha selecionada, então ele só vai executar esse comando quando o foco sair da linha, enquanto a linha estiver selecionada nada vai acontecer.

Após limpar, o formulário preenche com novas informações e o mesmo comando anterior faz essa tarefa.


## Tecnologias utilizadas
Neste projetos tivemos o uso de:
* HTML 5 
* JAVASCRIPT
* GIT 
* GITHUB
* BOOTSTRAP 5
* CSS

## Fontes consultadas
[Acessando o webservice de CEP](https://viacep.com.br/)
[Crie sua SHEIN conta](https://br.shein.com/user/auth/login?direction=nav)
[]()

## Autores
Sarah Ozeto, com a orientação do professor Leonardo Rocha e auxílio de Nathan Oliveira Fabrício. 