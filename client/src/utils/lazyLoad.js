import { lazy } from "react";

export function lazyLoad(path, namedExport) {
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    }
    return promise.then((module) => ({ default: module[namedExport] }));
  });
}

/////////////////////
// USE CASES when you are not using default export in component:

//i. instead of this below being used everywhere

// const AdminData = lazy(() =>
//   // wait(3000).then(() =>
//   import("./AdminData").then((module) => {
//     return { default: module.AdminData };
//   })
// );

//ii import this file and call the function below and parse the path and name
//lazyLoad('./page/About','About)
