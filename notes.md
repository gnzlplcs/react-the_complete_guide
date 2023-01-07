# ⚛️ react notes

## components

+ all user interfaces in the end are made up of components.
+ components are reusable pieces of code.
+ components allow to separate concerns.
+ split big code in small chunks of code.
+ a component is built by HTML, CSS, and JS code.

## declarative way

+ react uses a declarative approach: define the desired target state and let React figure out the actual JS DOM instructions.
+ build your own custom HTML elements.

## build a component tree

```js
<App /> | <Header /> <Tasks /> // render into a single HTML file
<Tasks /> | <Task /> <Task /> <Task />
```
