const liurui = {
  sex: 'female',
  age: 18,
  name: 'liu',
};
const deng = {
  sex: 'male',
  name: 'deng',
  age: 19,
};

function print(a, b, c) {
	// this = liurui
  console.log(this.name);
  console.log(a, b, c);
}
// call, apply, bind
// fun.call(thisarg, param1, param2, ...)
// print.call(liurui, 1, 5, '邓');
// print.apply(liurui,[1,2,'deng'])
const a = print.bind(liurui, 1, 2)
a('deng')
