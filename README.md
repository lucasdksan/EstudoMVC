# EstudoMVC

Anotações dos estudos sobre MVC.

## O que é MVC?

O MVC é um padrão de arquitetura de software. O MVC sugere uma maneira para você pensar na divisão de responsabilidades, principalmente dentro de um software web.

O principio básico dessa arquitetura de software é a divisão da aplicação em três camadas: a camada de interação do usuário (VIEW), a camada de manipulação dos dados (MODEL) e a camada de controle (CONTROLLER).

![img](./README/diagramaMVC.png)

Quando falamos sobre o MVC, cada uma das camadas apresenta geralmente as seguintes responsabilidades:

* MODAL: A responsabilidade dos models é representar o negócio. Também é responsável pelo acesso e manipulação dos dados na sua aplicação.

-> Conectar com a fonte dos dados. <br>
-> Receber os dados. <br>
-> Tratar os dados. <br>
-> Validar os dados. <br>

* VIEW: A views são responsáveis pela interface que será apresentada, mostrando as informações do model para o usuário.

-> HTML. <br>
-> CSS. <br>
-> JavaScrit. <br>
-> Formulários. <br>
-> Gráficos. <br>
-> Tabelas. <br>

* CONTROLLER: É a camada de controle, responsável por ligar o model e a view, fazendo com que os models possam ser repassados para as views e vice-versa.
