# Coffee Machine

## Introduction

[This mini project](http://simcap.github.io/coffeemachine/) is used to learn Test Driven Development.

Of course, in your career, you have implemented more complicated stuff than a simple coffee machine that takes orders. But to make this mini project more interesting here are simple rules you must follow:

1. All production code is written to make a failing test pass
2. Do the simplest thing that could work for the current iteration

## Project

In this Coffee Machine Project, your task is to implement the logic (starting from a simple class) that translates orders from customers of the coffee machine to the drink maker. Your code will use the drink maker protocol to send commands to the drink maker.

## Iterations

1. [first_iteration/making_drinks](https://github.com/MaskedHawk/CoffeeMachine/tree/first_iteration/making_drinks)

  Your product owner has delivered the stories and here they are:

  * The drink maker should receive the correct instructions for my coffee / tea / chocolate order
  * I want to be able to send instructions to the drink maker to add one or two sugars
  * When my order contains sugar the drink maker should add a stick (touillette) with it

2. [second_iteration/going_to_business](https://github.com/MaskedHawk/CoffeeMachine/tree/second_iteration/going_to_business)

  * The drink maker should make the drinks only if the correct amount of money is given
  * If not enough money is provided, we want to send a message to the drink maker.
    The message should contains at least the amount of money missing.

3. [third_iteration/Extra_Hot](https://github.com/MaskedHawk/CoffeeMachine/tree/third_iteration/Extra_Hot)

  * I want to be able to buy a orange juice for 0,6 euro
  * I want to be able to have my coffee, chocolate or tea extra hot

4. [fourth_iteration/Making_money](https://github.com/MaskedHawk/CoffeeMachine/tree/fourth_iteration/Making_money)

  * I want to be able to print a report anytime that contains:
    how many of each drink was sold and the total amount of money earned so far.

5. [fifth_iteration/Running_out](https://github.com/MaskedHawk/CoffeeMachine/tree/fifth_iteration/Running_out)

  * When I order a drink and it can be delivered because of a shortage,
  I want to see a message to the coffee machine console that indicates me the shortage
  and that a notification has been sent

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation (Ubuntu)

  You can install nodejs and npm easily with apt install, just run the following commands.

  ``` sh
    $ sudo apt install nodejs
    $ sudo apt install npm
  ```
- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

  If the installation was successful, you should be able to run the following command.

  ``` sh
    $ node --version
    v13.7.0
  ```

  ``` sh
    $ npm --version
    6.13.6
  ```

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

``` sh
  $ npm install -g yarn
```

---

## Install

``` sh
  $ git clone https://github.com/MaskedHawk/CoffeeMachine
  $ cd CoffeeMachine
  $ yarn install
```


## Running the current branch test

``` sh
  $ yarn test
```

### License

[MIT](https://choosealicense.com/licenses/mit/) In short, you can do (almost) what you want, as long as you provide attribution to me (MaskedHawk).
