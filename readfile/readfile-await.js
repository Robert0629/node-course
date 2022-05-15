const fs = require('fs');


let p = new Promise((resolve, reject) => {
  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
      // 錯誤了
      reject('喔喔喔，發生錯誤了');
    } else {
      // 因為沒有 err，所以是正確的
     resolve(data);
    }
  });
});

async function main(){
  try{
    let result = await p;
    console.log(result);
  }catch (err){
    console.log(err);
  }
}
main();