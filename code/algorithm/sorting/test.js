const isInContainer = false;
const GetCopyWrite = copyWriteKey => {
  return new Promise((resolve, reject) => {
    if (isInContainer) {
      jsbridge.call(
        'GetCopyWrite',
        {
          copyWriteKey,
        },
        resolve
      )
    } else {
      resolve('not in the app')
    }
  })
}

async function run() {
	const a = await tngGetCopyWrite('base');
  console.log(a)

}
run()