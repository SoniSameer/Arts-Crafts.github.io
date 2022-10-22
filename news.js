const prom = new Promise((resolve, reject) => {
  function sing() {
    resolve('I am singing a song');
  }
  sing();
});

prom.then((res) => console.log(res));
