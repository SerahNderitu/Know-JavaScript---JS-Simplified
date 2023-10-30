# Know-JavaScript---JS-Simplified
JavaScript is a language of the web used to modify and add functionality to a website.

## How to write JavaScript
JavaScript code can be written in different ways but the most convenient one is to access the console on the browser. To do that, you  right-click on your browser and click on **inspect**.

## JS DOM(Document Object Model)
JavaScript creates an object that represents the document and all structures inside the document. The DOM can be used to;

1) [Finding elements in a web page](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/findelements.js)

There are different ways to find elements from the DOM.
To find elements from the DOM you can use the id(#) of the element, class(.), tag(e.g. p, h1), etc. For example
- To pick individual elements by an id from the DOM. The id is the special identifier of the code. It is denoted by ` # `.
- To pick individual elements by a class name. The class is denoted by a dot(.).
- To pick individual elements by a tag name. Examples of tags include; h1-h6, p, etc

2) [Making changes on a web page](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/modifywebpage.js)

JavaScript makes it easy to make changes to a web page. You can modify it to match your specifications.


## Types of Data in JavaScript

There are two types of data in JavaScript;

a) Primitive types

  - Strings
  - Numbers
  - Boolean
  - Null
  - Undefined

b) Objects

  - Document
  - & friends

## Strings in JS

In JS [strings](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/strings.js) are made of smaller units of text called characters.

You can use strings in various ways. For instance, you can check whether a string contains some characters using an includes method, check the length of the string and so much more.

## Index in JS 

A [JS index](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/index.js) is a number given to each character in order in a string. 

We use a JS built-in method, indeOf to get the index of a character.

## Operators

Operators are used to perform a function in JavaScript. They operate on values.

**Types of operators**

  - Unary operator: Operate on one thing eg. !
  - Binary operator: Operate on 2 things eg. 3 + 4
  - Ternary operator: Operate on 3 different values. Is actually a quick way to write an if-else statement

**Order of operations**

[JS Operators](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/operators.js) use BODMAS to operate on values in order. But if you want JS to start with addition before multiplication use a bracket () to group things together so that operations start at the bracket first.

There are several operators but we will check just a few to get an idea. Check these operator examples to learn how they are structured. Operators have two versions. The strict operator(===) and the loosey-goosey operator(==). Always use a strict operator version for accuracy.


## Expressions
An [expression](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/expression.js) resolves or evaluates to a value. An expression can consist of values, variables, and operators.

Expressions ask JavaScript for a value.

## Statements

[Statements](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/statements.js) tell JavaScript to do something. Statements simply programming instructions to be executed by the computer.

JavaScript statements consist of values, expressions, operators, keywords, and comments. JavaScript statements are executed, one by one, in the order they appear and separated by a semicolon.

## Variables

In JS, [variables](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/variables.js) point to values/things. 

**Declaring and assigning variables**

Variables can be declared in the terms of; `` let ``, and ``const``. Variables should always be declared first before they are used. They should be identified with unique names.

**Let Variables**

- They must declared before use
- Once declared can not be redeclared
- They have block scope(variables declared inside a { } block cannot be accessed from outside the block)

**Const Variables**

- Const declares and assigns a constant
- Const variable can't be changed once declared
- They have block scope


## Arrays

[Arrays](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/array.js) enable storing a collection of multiple items under a single variable. An array can be empty, hold a single item, or hold several items.

An array can hold mixed items, match, or hold any type in a single name.

You can access the values from an array by referring to an index number.

## Objects

[Objects](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/object.js) collect multiple values together to describe more complex data. It's the same as how we point at different values using variables.

Objects let us point out related **values** using **properties** in the object.

All JavaScript values, except primitives, are objects, thus almost everything in JavaScript is an object.

## Methods

[Methods](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/methods.js) are functions inside an object. These are simply actions that can be performed on an object.

In JavaScript, we have a ``this`` keyword that refers to an object.

The object being referred to depends on how this is being used/called, hence the ``this`` keyword refers to different objects depending on how it is used.

The ``this`` keyword in a method lets us reference other properties on the object. If you are inside an object of some sort, the ``this`` will be that object, if not it will be the global object(window).

## Parameters

[Parameters](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/parameters.js) are placeholders/labels/inputs a function expects.

Parameters are like pseudo-variables that call the values that are passed in as arguments. For example (x, y) are parameters.

## Arguments

[Arguments](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/arguments.js) are actual values passed to the function which are usually assigned to the parameter.

Arguments are also the actual values a function is called with. For example (2,3) are arguments.

## Functions

In JS, a function is a block of code that is used to perform a task.

[Functions](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/functions.js) help us do things.

Functions are executed when they are called.

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

The parentheses may include parameter/placeholder names separated by commas

The code to be executed, by the function, is placed inside curly brackets: {}

## Arrow Functions

Arrow functions are a way to create small little functions.

Since arrow functions are expressions, we can assign them to a variable.

## Scope in Variable

In JavaScript, [scope](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/scope.js) helps us to understand where variables are in play.

Variables help us to remember things we declared.

In JS scope matters what variables we declare, it also matters where we declare them.

Examples of scopes include function and global scopes. The **Global scope** involves variables declared outside a function. It is the widest scope.

On the other hand, the **function scope** involves variables that are declared inside a function. Each function creates a new scope.

## Events and Handlers

[Events](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/events.js) in JavaScript are how we make a web page interactive. 

Events are all the different users' actions that a web page can respond to. 

The web browser fires events when certain things happen on the page.

We can detect events with JS using an **event listener**

The  ```.addEventListener()``` method lets us listen for events on a DOM element.

The **.addEventListener()** takes 2 parameters; 

a) The name of the **event** to listen to eg. click.

b) The **handler function** that JS calls when that **event** is fired on the element.

**Event handlers** are a form of asynchronous programming. This means that it runs one thing at a time. You provide a function(event handler eg. click) that will be called not right away but whenever the event happens.

If the event in the asynchronous has been completed then that event could be used to notify the caller about the result of an asynchronous function call.

## Common DOM Events

**Mouse Events**
- Click
- dblclick
- Mouseover
- Mouseout
- Mouseleave
- Mousedown
- Mousemove
- Mouseup

**Keyboard Events**
- Keypress
- Keydown
- Keyup

**Form Events**
- Focus
- Blur
- Submit
- Change
- Reset


**Document/ Window Events**
- Load
- Resize
- Unload
- Scroll

The **event.target** is the element the event fired on(which element was clicked).

## Conditionals

[Conditional statements](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/conditionals.js) let us execute code under a certain condition. With conditions, we decide what to do for different decisions.

**Examples of conditional statements:**

- ``if `` is used to specify a block of code to be executed, if a specified condition is true
- `` else`` is used to specify a block of code to be executed, if the same condition is false
- ``else if`` is used to specify a new condition to test, if the first condition is false

## Map and Filter

The map and filter methods let us process all the items in an array.

**Map**

[Map()](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/map.js) calls a function on each item in an array to create a new array.

Map() does not change the original array.

**Filter**

[Filter](https://github.com/SerahNderitu/Know-JavaScript---JS-Simplified/blob/main/filter.js) calls a true or false function on each item and creates a new array with only the items where the function returns true.

Filter is useful when you are only interested in a subset of your data. You just filter out other elements you don't need and only be left with what need.

## Spread(. . .)

Spread is a neat trick for iterating over arrays. Spread allows taking all the items in an array and spreading them around. 

We can use spread to put all the items from one array inside another array. For example;

```
const oldBooks = ["Code", "Debugging Tips"];
const newBooks = ["Know JS", "Basic CSS"];
const allBooks = [...oldBooks, ...newBooks];  // ['Code', 'Debugging Tips', 'Know JS', 'Basic CSS']

```

Spread(...) can also be used to pass all the items from an array as arguments to a function or method. For example;

```
const frontEnd = ["HTML", "CSS", "JS"];
const backEnd = ["Python", "Django", "Postgres"];
frontEnd.push(...backEnd);
console.log(...frontEnd);  // HTML CSS JS Python Django Postgres

```
