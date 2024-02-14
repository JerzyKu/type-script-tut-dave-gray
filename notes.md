### global installation of typescpit:

```
npm i typescript -g
```

### when PS dont want to execute

```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### compile

```
tsc main.ts
```

### watch changes on file and recompile

```
tsc main.ts -w
```

### init tsconfig.json

```
tsc --init
```
### ignore ts files outside of src folder

```
{
  "compilerOptions": {
    ...
  },
  "include": [
    "src"
  ]
}

```


`if you remove ts file, js file is not remove`





npm create vite@latest



npx json-server -w data/products.json -p 3500