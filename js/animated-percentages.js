const genNumber = () => {
  document.querySelector("div").style.setProperty("--percent", Math.random());
};

setInterval(genNumber, 2000);
setTimeout(genNumber);