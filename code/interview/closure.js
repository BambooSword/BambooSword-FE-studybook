var i = 1;

var foo = function () {
  var x = 2;
  var y = 3;

  (function () {
    debugger;
    console.log(x, i);
  })();

  var foo2 = function () {
    var z = 4;

    console.log(y);
    debugger;

    return () => {
      debugger;
      console.log(z, i) //生成闭包
      console.log(y, i) //不生成闭包
    };
  };

  return foo2();
};

foo()();
