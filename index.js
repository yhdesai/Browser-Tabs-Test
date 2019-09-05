const SimpleJsonStore = require('simple-json-store')
const store = new SimpleJsonStore('./mystore.json');
const open = require('open');
var os = require('os');
var numOfTabs = 0;




function writeToFile() {
  totalMem = os.totalmem();
  freeMem = os.freemem();
  usedMem = totalMem - freeMem;

  store.set(numOfTabs, {
    tabs: numOfTabs,
    Memory: {
      totalMem: totalMem,
      freeMem: freeMem,
      usedMem: usedMem
    }
  });
  console.log(freeMem);
}

function myLoop() { //  create a loop function
  setTimeout(function() { //  call a 3s setTimeout when the loop is called
    main(); //  your code here
    numOfTabs++; //  increment the counter
    if (numOfTabs < 100000) { //  if the counter < 10, call the loop function
      myLoop(); //  ..  again which will trigger another
    } //  ..  setTimeout()
  }, 250)
}


function openBrowser(num) {
  (async () => {
    console.log("opening browser number " + num);
    await open('https://chrome-test--yashdesai2.repl.co',{app: 'google-chrome-stable'});
  })();
}

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

function main() {

  writeToFile();
  openBrowser(numOfTabs);
}
myLoop();
