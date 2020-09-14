# Projeto Frontend Time 24 - Technee Safra 2020

O objetivo da solução aqui apresentada é desenvolver uma aplicação que facilite a captura e conversão de pessoas em clientes safra já com a aquisição de um produto ou serviço.

A abordagem que utilizamos é a de estar onde o cliente está, para isso, nossa aplicação se integra a plataformas já existentes como e-commerces, sites imobiliários, sites de veículos, dentre outros, e por meio desses parceiros, oferecemos uma solução que disponibiliza produtos bancários para seus clientes de forma personalizada de acordo com o segmento de cada canal, como uma fiança no caso de um site imobiliário, um credito para compra de veículos em um site de automóveis ou mesmo uma antecipação de recebíveis para quem vende dentro de um marketplace.

Ao utilizar os dados dos usuários provenientes de cada canal, conseguimos ter uma maior acuracidade no desenvolvimento de modelos e oferta de produtos assim como também conseguimos com base em dados, antecipar até mesmo suas necessidades e oferecer diferentes produtos por outros canais. Como exemplo, se um usuário simula uma operação de fiança na plataforma imobiliária X, poderíamos ofertar um crédito imobiliário e seu e-mail de acordo com seu perfil caso este não venha aceitar o empréstimo fiança.

Este aplicativo desenvolvido em Angular 10 serve para demonstar a utilização das APIs desenvolvidadas em NodeJS, a segurança entre elas será feita por meio de Token, onde será
disponibilizado uma chave para cada parceiro para a geração desse Token e assim conseguir consumir a API. Neste exemplo simulamos uma concessionária de veículos.

Com base nas informações enviadas pela concessionária podemos antecipar o processamento de simulação de crédito e assim o cliente já tem uma visão do que ele pode financiar. Ao clicar em Saiba mais mostraremos três opções de parcelamento, o cliente escolheria uma e também se deseja receber as ofertas do Safra, sendo cadastrado na lista de Opt-in disponibilizado pela API. Na próxima tela, mostramos os termos de adesão, incluindo o cadastro de uma conta, se necessário. A última tela serve para confirmação e divulgação das redes socias do Safra.

## Time 24

- Anthony Luz
- Letícia Baptista​
- Lucas Calzavara​
- Vitor Meireles
- Wesley de Abreu​


---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
