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
Mas afinal, o que é **expressão regular**? 
De uma forma mais resumida, expressões regulares são como padrões utilizados para selecionar certas combinações de caracteres. Neste código, utilizamos ela para verificar se o que foi digitado tem a quantidade certa de números e se contém apenas números. 

![*imagem a expressão]()

É semelhante a um compartimento com nove entradas. Com a expressão regular indicamos que esse compartimento terá nove entradas e, na segunda linha, que só se pode ocupar oito entradas do compartimento (número de digitos de um CEP) com números apenas. 

### STRICT MODE
![*imagem do strict]()
No início do código em JavaScript, determinamos que estariamos usando o **strict mode**, o que isso beneficia no código? O strict mode sinaliza potenciais problemas encontrados na aplicação e identifica caso haja algo perigoso ou que pode gerar erros, usando o strict mode o código nem executará se identificar algo de errado.


### VERIFICAÇAÕ DE SENHAS
![*imagem da pagina]()

![*imagem do código]()

### VALIDANDO O CEP
![imagem da pag]()

![imagem do cod]()

**async**

**await**

 **fetch**

 **hasOwnProperty**

Outro evento que acontece é que o código reconhece caso o usuário digitar um CEP inexistente. Para que isso aconteça foi feito uma espécie de ponte entre o nosso código e o site da viacep, usando o **fetch**, que possibilita fazer chamadas com APIs externas de formas simples e assíncronas. Após criarmos essa ligação, foi usado o **hasOwnProperty** para verificar se o que foi digitado existe ou não, ele verifica dentro da variável e depois retorna um alert dependendo do resultado.É como se o fetch começasse o trabalho e o hasOwnProperty terminasse. 


### LIMPAR E PREENCHER FORMULÁRIO
![img da pag]()

![im do cod]()

**addEventListener('focusout')**

**focusout**

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
[Registro - ZARA Brasil](https://www.zara.com/br/pt/signup)
[Registro na Amazon](https://www.amazon.com.br/)
[Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions)
[Strict mode](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)

## Autores
Sarah Ozeto, com a orientação do professor Leonardo Rocha e auxílio de Nathan Oliveira Fabrício. 