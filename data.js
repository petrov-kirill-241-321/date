const btnData = document.getElementById("data");
const btnTime = document.getElementById("time");
const btnFull = document.getElementById("full");
const btnBegin = document.getElementById("begin");
const btnHappy = document.getElementById("happy");
let mode = "full";
const now = new Date().getTime();
const happines = new Date(2024, 11, 14, 0, 0, 0).getTime();

btnHappy.onclick = function () {
  const setIntervalId = setInterval(function () {
    const now = new Date().getTime();
    const counter = happines - now;
    const days = Math.floor(counter / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((counter % (1000 * 60)) / 1000);
    btnBegin.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
};

btnData.onclick = () => {
  mode = "data";
  setInterval(() => {
    getData(mode);
  }, 1000);
};

btnTime.onclick = () => {
  mode = "time";
  setInterval(() => {
    getData(mode);
  }, 1000);
};

btnFull.onclick = () => {
  mode = "full";
  setInterval(() => {
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
  }
}

function getData(mode) {
  btnBegin.textContent = formatMode(mode);
}
