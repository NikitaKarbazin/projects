const press = [];
const secretCode = 'ukraine';

window.addEventListener('keydown', (e) => {
  press.push(e.key);
  press.splice(-secretCode.length - 1, press.length - secretCode.length );  
  console.log(press);

  if(press.join('').includes(secretCode)){
    cornify_add();
  }
})
