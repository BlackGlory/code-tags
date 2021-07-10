# code-tags

## Install

```sh
npm install --save @blackglory/code-tags
# or
yarn add @blackglory/code-tags
```

## API

```ts
type Value =
| string
| number
| boolean
| null
| bigint
| undefined
| ((args: any) => any)
| { [property: string]: Value }
| Value[]
```

### javascript

```ts
function javascript(strings: TemplateStringsArray, ...values: Value[]): string
```

### IIFE

```ts
function IIFE(strings: TemplateStringsArray, ...values: Value[]): string
```

### IIAFE

```ts
function IIAFE(strings: TemplateStringsArray, ...values: Value[]): string
```
