//如何封装类库
// IIFF
const MyLibrary = (function (global) {
  const myData = '***';
  function feature1(params) {
    console.log(params, global);
  }
  function feature2(params) {
    console.log(params);
  }
  function ReturnFunction(params) {
    // do something;
    return {
      myData,
      feature1,
    };
  }
  ReturnFunction.myData = myData;
  ReturnFunction.feature2 = feature2;
  return ReturnFunction;
})(typeof window !== 'undefined' ? window : this);

// 高阶函数

function MyLibrary2(params) {
  const myName = '**';
  const myData = '***';
  function feature1(params) {
    console.log(params, global);
  }
  function feature2(params) {
    console.log(params);
  }
  return {
    feature1,
    feature2,
    myName,
    myData,
  };
}

// 单例需求 singleton

const MyLibrary3 = (function (global) {
  const myData = '***';
  let instance;
  function feature1(params) {
    console.log(params, global);
  }
  function feature2(params) {
    console.log(params);
  }
  function ReturnFunction(params) {
    // do something;
    return {
      myData,
      feature1,
    };
  }
  ReturnFunction.myData = myData;
  ReturnFunction.feature2 = feature2;
  return function () {
    if (instance) {
      return instance;
    }
    instance = new ReturnFunction();
    return instance;
  };
})(typeof window !== 'undefined' ? window : this);
