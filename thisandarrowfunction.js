/*In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an object method, this refers to the object.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
Note
this is not a variable.

this is a keyword.

You cannot change the value of this.

this in a Method
When used in an object method, this refers to the object.

In the example on top of this page, this refers to the person object.

Because the fullName method is a method of the person object.
