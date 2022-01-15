const arr = [];

for (var i = 0; i < 5; i++) {
  arr.push(function () {
    return console.log(i);
  });
}
arr[0]()
arr[0]()
