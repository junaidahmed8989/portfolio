let btnHistory = document.getElementById("history");
let btnForecast = document.getElementById("forecast");

let history = document.getElementsByClassName("tableContainer")[0];
let forecast = document.getElementsByClassName("tableCon")[0];

btnHistory.addEventListener("click", () => {
  history.classList.add("show");
  history.classList.remove("hide");
  forecast.classList.remove("show");
  forecast.classList.add("hide");
  filter.classList.add("showSelect");
  filter.classList.remove("hide");
  yearFilter.classList.add("showSelect");
  yearFilter.classList.remove("hide");
  document.body.style.overflowX = "hidden";
});

btnForecast.addEventListener("click", () => {
  history.classList.add("hide");
  history.classList.remove("show");
  forecast.classList.remove("hide");
  forecast.classList.add("show");
  buildForecastedChart(getLastYearData());
  filter.classList.remove("showSelect");
  filter.classList.add("hide");
  yearFilter.classList.remove("showSelect");
  yearFilter.classList.add("hide");
  document.body.style.overflowX = "auto";
});
