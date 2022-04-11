
function receivesAFunction(callBack) {
    return callBack();
}


function returnsANamedFunction() {
    return function namedFunc() {
      return ("function");
    };
  }


function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}