# Scope 

* Escopo determina a visibilidade de alguma variável no JS

## Block statements

```JS
    // Vamos iníciar um bloco
    {
        // Aqui dentro é um bloco e posso colocar qualquer coisa código
        // aqui fechamos o bloco
    }
```

O Bloco, também criara um novo escopo. Chamamos de `Block scope`


## Var 
```js
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x)

{
    var x = 0;
}

console.log('> existe x depois do bloco?', x)
```


## let e const
````js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco? ', y)

{
    let y = 0;
}

console.log('> existe x depois do bloco? ')