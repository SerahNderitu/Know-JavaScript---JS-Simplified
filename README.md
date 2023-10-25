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

Arrays enable storing a collection of multiple items under a single variable. An array can be empty, hold a single item, or hold several items.

An array can hold mixed items, match, or hold any type in a single name.

You can access the values from an array by referring to an index number.

