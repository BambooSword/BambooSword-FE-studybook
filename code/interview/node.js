Promise.resolve()
  .then(() => {
    console.log('p1');
  })
  .then(() => {
    console.log('p2');
  });
process.nextTick(() => {
  console.log('n1');
  process.nextTick(() => {
    console.log('n2');
  });
});
