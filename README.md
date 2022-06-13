# Jadis revela!

 Aplicação desenvolvida na Maratona Explorer - 06/2022

<img src="https://github.com/adlagomes/maratona-explorer/blob/main/Rocketseat%20-%20Maratona%20Explores/images/amostra.jpg">

## 🚀 Tecnologias <a name="-tecnologias"></a>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- Javascript

## 💻 Projeto

Essa aplicação deverá receber uma mensagem no input (caixa de texto), e ao clicar no botão ela me retornará uma resposta aleatória.
A extrutura de código javascript é bem simples. Primeiramente o código irá verificar se existe algum valor no input quando o botão for clicado, se este for diferente de vazio ele irá mostrar no parágrafo de resposta uma frase aleatória. Caso o input de pergunta esteja vazio ao clicarem no botão, então ele retornará uma mensagem pedindo para o usuário escrever uma pergunta. Basicamente existe uma lista de mensagens prováveis onde foi utilizado o "Math.random" para gerar uma id aleatória. Quando o botão é clicado ele chama essa função que verifica se há um valor no input e devolve uma mensagem específica ou aleatória que sujere a resposta da nossa cigana Jadis.
Após a frase ser gerada o input de pergunta é limpo para que não seja possível que o usuário continue a gerar outras respostas para a mesma pergunta ainda presente no input. Além disso, quando o input estiver em foco, o balão de resposta da Jadis ficará vazio.

Refatoração:
 Pretendo refatorar o código alterando também algumas funcionalidades e visual. Uma dessas alterações deverá ser o surgimento do balão de resposta. Uma vez que não haja fala da cigana, o balão não deverá existir. O balão de fala atual é um arquivo .png, mas acredito ele pode vir a ser um estilo css da div de respostas, se torando assim ainda mais interessante.


---
