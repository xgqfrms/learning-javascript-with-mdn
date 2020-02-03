# ES6

## import & export

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

> api

```js
// 可以在导入时重命名导出。例如，这会将shortName插入当前作用域
import { reallyReallyLongModuleExportName as shortName } from '/modules/my-module.js';
  
```


> demo

```js

import {
  columns,
  operations,
} from "./columns";
// import { columns as selectManageClomuns } from "./columns";

```


