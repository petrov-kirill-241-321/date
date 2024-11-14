const btnData = document.getElementById("data");
const btnTime = document.getElementById("time");
const btnFull = document.getElementById("full");
const btnBegin = document.getElementById("begin");
const btnHappy = document.getElementById("happy");
let mode = "full";
let intervalId;

const happines = new Date(2024, 11, 14, 0, 0, 0).getTime();

btnHappy.onclick = function () {
  mode = "happy";
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    getHappy();
  }, 1000);
};

btnData.onclick = () => {
  mode = "data";
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    getData(mode);
  }, 1000);
};

btnTime.onclick = () => {
  mode = "time";
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    getData(mode);
  }, 1000);
};

btnFull.onclick = () => {
  mode = "full";
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    getData(mode);
  }, 1000);
};

function formatMode(format) {
  const now = new Date();
  switch (format) {
    case "data":
      return now.toLocaleDateString();
    case "time":
      return now.toLocaleTimeString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    case "happy":
      return getHappy();
  }
}

function getHappy() {
  const now = new Date().getTime();
  const counter = happines - now;

  if (counter < 0) {
    btnBegin.innerText = "ура";
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(counter / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((counter % (1000 * 60)) / 1000);

  btnBegin.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function getData(mode) {
  btnBegin.textContent = formatMode(mode);
}
