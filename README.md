# Accents

Provides a simple package check or remove accents from a string use CLI or function, Support multi languages.

## Install

```bash
npm i -g @aissaoui-ahmed/accents
```

## Usage

### Use CLI

```bash
accent --remove "cette chaîne a l'accent comme être"
```

Result

`
cette chaine a l'accent comme etre
`

### Use functions

ES6 modules

```js
import { check, remove, hasAccent } from '@aissaoui-ahmed/accents';
import accents from '@aissaoui-ahmed/accents';
```

Or CommonJS

```js
const { check, remove, hasAccent } = require('@aissaoui-ahmed/accents');
// OR
const accents = require('@aissaoui-ahmed/accents');
```

```js
remove("Put string here");
check("Put string here");
hasAccent("Put string here")
// OR
accents.remove("Put string here");
accents.check("Put string here");
accents.hasAccent("Put string here")
```

Report issues and request features with [issue tracker](https://github.com/Aissaoui-Ahmed/accents/issues/new)
