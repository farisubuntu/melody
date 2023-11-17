## Useful snippets:

- remove all inline styles attributes:
```js
var allMainElements = [...document.body.querySelectorAll('*')];
allMainElements.forEach(e => e.removeAttribute('style'));
```

