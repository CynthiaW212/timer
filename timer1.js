const input = process.argv.slice(2);

input.forEach(e => {
  setTimeout(() =>{

    if (Number(e) > 0 && !isNaN(Number(e))) {
      process.stdout.write('\x07');
      console.log(`${e} seconds `);
    }
  },1000 * Number(e));
  
});
