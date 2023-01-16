let tableContainer = document.getElementsByClassName("tableContainer")[0];
let tableCon = document.getElementsByClassName("tableCon")[0];
let hiddenInput = document.getElementById("hiddenInput");
let filter = document.getElementById("filter");
let yearFilter = document.getElementById("yearFilter");

const years = [
  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  2022,
];

var labels = [
  "Jauary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var forecastedLlabels = [
  "September",
  "October",
  "November",
  "December",
  "Jauary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

let tables = [];

for (i of years) {
  buildTable(dataset, i, "4");
  tables.push(document.getElementsByClassName(i)[0]);
}

filter.addEventListener("change", (e) => {
  tableContainer.innerHTML = "";
  tables = [];
  for (i of years) {
    buildTable(dataset, i, e.target.value);
    tables.push(document.getElementsByClassName(i)[0]);
  }
});

yearFilter.addEventListener("change", (e) => {
  for (i of tables) {
    if (i.className == e.target.value) {
      tableContainer.scrollLeft = i.offsetLeft;
    }
  }
});

window.addEventListener("load", () => {
  sessionStorage.clear();
});

tableContainer.addEventListener("scroll", (e) => {
  if (e.target.scrollLeft < getOffsetLeft(tables[0]) - 50) {
    var alerted = sessionStorage.getItem("alerted") || "";
    if (alerted != "yes") {
      alert("Data before 1996 is not available");
      sessionStorage.setItem("alerted", "yes");
    }
    e.target.scrollLeft = getOffsetLeft(tables[0]) - 50;
  }
  if (getOffsetLeft(tables[26]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[26].className) {
      hiddenInput.value = tables[26].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[25]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[25].className) {
      hiddenInput.value = tables[25].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[24]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[24].className) {
      hiddenInput.value = tables[24].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[23]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[23].className) {
      hiddenInput.value = tables[23].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[22]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[22].className) {
      hiddenInput.value = tables[22].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[21]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[21].className) {
      hiddenInput.value = tables[21].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[20]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[20].className) {
      hiddenInput.value = tables[20].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[19]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[19].className) {
      hiddenInput.value = tables[19].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[18]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[18].className) {
      hiddenInput.value = tables[18].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[17]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[17].className) {
      hiddenInput.value = tables[17].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[16]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[16].className) {
      hiddenInput.value = tables[16].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[15]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[15].className) {
      hiddenInput.value = tables[15].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[14]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[14].className) {
      hiddenInput.value = tables[14].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[13]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[13].className) {
      hiddenInput.value = tables[13].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[12]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[12].className) {
      hiddenInput.value = tables[12].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[11]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[11].className) {
      hiddenInput.value = tables[11].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[10]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[10].className) {
      hiddenInput.value = tables[10].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[9]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[9].className) {
      hiddenInput.value = tables[9].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[8]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[8].className) {
      hiddenInput.value = tables[8].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[7]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[7].className) {
      hiddenInput.value = tables[7].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[6]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[6].className) {
      hiddenInput.value = tables[6].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[5]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[5].className) {
      hiddenInput.value = tables[5].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[4]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[4].className) {
      hiddenInput.value = tables[4].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[3]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[3].className) {
      hiddenInput.value = tables[3].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[2]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[2].className) {
      hiddenInput.value = tables[2].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[1]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[1].className) {
      hiddenInput.value = tables[1].className;
      buildChart(dataset, hiddenInput.value);
    }
  } else if (getOffsetLeft(tables[0]) < e.target.scrollLeft + 150) {
    if (hiddenInput.value != tables[0].className) {
      hiddenInput.value = tables[0].className;
      buildChart(dataset, hiddenInput.value);
    }
  }
});

tableContainer.scrollLeft = tables[26].offsetLeft;

buildForecastedTable(getLastYearData());

function getOffsetLeft(element) {
  return element ? element.offsetLeft + getOffsetLeft(element.offsetParent) : 0;
}

function buildChart(data, year) {
  let data1 = [];
  let data2 = [];
  let data3 = [];
  let data4 = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].year == year) {
      data1.push(data[i].solid.toFixed(1));
      data2.push(data[i].gas.toFixed(1));
      data3.push(data[i].electricity.toFixed(1));
      data4.push(data[i].liquid.toFixed(1));
    }
  }
  new Chart("fuelChart", {
    type: "line",
    data: {
      labels: labels,
      data: [],
      datasets: [
        {
          label: "Solid Fuels",
          data: data1,
          borderColor: "red",
          fill: false,
        },
        {
          label: "Gas",
          data: data2,
          borderColor: "green",
          fill: false,
        },
        {
          label: "Electricity",
          data: data3,
          borderColor: "blue",
          fill: false,
        },
        {
          label: "Liquid Fuels",
          data: data4,
          borderColor: "black",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
    },
  });
}

function buildForecastedChart(data) {
  let solidArr = [];
  let gasArr = [];
  let elecArr = [];
  let liquidArr = [];
  for (let i = 0; i < data.length; i++) {
    solidArr.push(data[i].solid);
    gasArr.push(data[i].gas);
    elecArr.push(data[i].electricity);
    liquidArr.push(data[i].liquid);
  }
  let forecastedSolidArr = straightLineForecast(solidArr);
  let forecastedGasArr = straightLineForecast(gasArr);
  let forecastedElecArr = straightLineForecast(elecArr);
  let forecastedLiquidArr = straightLineForecast(liquidArr);

  let data1 = [];
  let data2 = [];
  let data3 = [];
  let data4 = [];

  for (let i = 0; i < forecastedSolidArr.length; i++) {
    data1.push(forecastedSolidArr[i].toFixed(1));
    data2.push(forecastedGasArr[i].toFixed(1));
    data3.push(forecastedElecArr[i].toFixed(1));
    data4.push(forecastedLiquidArr[i].toFixed(1));
  }
  new Chart("fuelChart", {
    type: "line",
    data: {
      labels: forecastedLlabels,
      data: [],
      datasets: [
        {
          label: "Solid Fuels",
          data: data1,
          borderColor: "red",
          fill: false,
        },
        {
          label: "Gas",
          data: data2,
          borderColor: "green",
          fill: false,
        },
        {
          label: "Electricity",
          data: data3,
          borderColor: "blue",
          fill: false,
        },
        {
          label: "Liquid Fuels",
          data: data4,
          borderColor: "black",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: true },
    },
  });
}

function buildTable(data, year, filter) {
  let table = document.createElement("table");
  row = "";
  table.classList.add(year);
  tableContainer.appendChild(table);
  var head = `<tr>
                <th>Month</th>
                <th>Solid Fuels - D7DW</th>
                <th>Gas - D7DU</th>
                <th>Electricity - D7DT</th>
                <th>Liquid Fuels - D7DV</th>
            </tr>`;
  table.innerHTML += head;
  for (let i = 0; i < data.length; i++) {
    if (data[i].year == year) {
      switch (filter) {
        case "":
          row = `
          <td>${data[i].Month} ${data[i].year}</td>
          <td>£${data[i].solid.toFixed(1)}</td>
          <td>£${data[i].gas.toFixed(1)}</td>
          <td>£${data[i].electricity.toFixed(1)}</td>
          <td>£${data[i].liquid.toFixed(1)}</td>
          `;
          break;
        case "4":
          row = `
          <td>${data[i].Month} ${data[i].year}</td>
          <td>£${data[i].solid.toFixed(1)}</td>
          <td>£${data[i].gas.toFixed(1)}</td>
          <td>£${data[i].electricity.toFixed(1)}</td>
          <td>£${data[i].liquid.toFixed(1)}</td>
          `;
          break;
        case "3":
          row = `
          <td>${data[i].Month} ${data[i].year}</td>
          <td>£${data[i].solid.toFixed(1)}</td>
          <td>£${data[i].gas.toFixed(1)}</td>
          <td>£${data[i].electricity.toFixed(1)}</td>
          `;
          break;
        case "2":
          row = `
          <td>${data[i].Month} ${data[i].year}</td>
          <td>£${data[i].solid.toFixed(1)}</td>
          <td>£${data[i].gas.toFixed(1)}</td>
          `;
          break;
        case "1":
          row = `
          <td>${data[i].Month} ${data[i].year}</td>
          <td>£${data[i].solid.toFixed(1)}</td>
          `;
          break;
        case "0":
          row = `
          <td>${data[i].Month} ${data[i].year}</td>
          `;
          break;
        // default:
        //   row = `
        //   <td>${data[i].Month} ${data[i].year}</td>
        //   <td>${data[i].solid.toFixed(1)}</td>
        //   <td>${data[i].gas.toFixed(1)}</td>
        //   <td>${data[i].electricity.toFixed(1)}</td>
        //   <td>${data[i].liquid.toFixed(1)}</td>
        //   `;
        //   break;
      }
      table.innerHTML += row;
    }
  }
}

function getLastYearData() {
  let myData = [];
  for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].year == 2021) {
      if (dataset[i].Month == "September") {
        myData.push(dataset[i]);
      }
      if (dataset[i].Month == "October") {
        myData.push(dataset[i]);
      }
      if (dataset[i].Month == "November") {
        myData.push(dataset[i]);
      }
      if (dataset[i].Month == "December") {
        myData.push(dataset[i]);
      }
    }
  }
  for (let i = 0; i < dataset.length; i++) {
    if (dataset[i].year == 2022) {
      myData.push(dataset[i]);
    }
  }
  return myData;
}

function buildForecastedTable(data) {
  let table = document.createElement("table");
  tableCon.appendChild(table);
  var head = `<tr>
                <th>Month</th>
                <th>Solid Fuels - D7DW</th>
                <th>Gas - D7DU</th>
                <th>Electricity - D7DT</th>
                <th>Liquid Fuels - D7DV</th>
            </tr>`;
  table.innerHTML += head;
  let solidArr = [];
  let gasArr = [];
  let elecArr = [];
  let liquidArr = [];
  for (let i = 0; i < data.length; i++) {
    solidArr.push(data[i].solid);
    gasArr.push(data[i].gas);
    elecArr.push(data[i].electricity);
    liquidArr.push(data[i].liquid);
  }
  let forecastedSolidArr = straightLineForecast(solidArr);
  let forecastedGasArr = straightLineForecast(gasArr);
  let forecastedElecArr = straightLineForecast(elecArr);
  let forecastedLiquidArr = straightLineForecast(liquidArr);
  for (let i = 0; i < data.length; i++) {
    row = `
        <td>${data[i].Month} ${Number(data[i].year) + 1}</td>
        <td>£${forecastedSolidArr[i].toFixed(1)}</td>
        <td>£${forecastedGasArr[i].toFixed(1)}</td>
        <td>£${forecastedElecArr[i].toFixed(1)}</td>
        <td>£${forecastedLiquidArr[i].toFixed(1)}</td>
    `;
    table.innerHTML += row;
  }
}

function straightLineForecast(previousData) {
  let forecastedData = [];

  for (i of previousData) {
    forecastedData.push(i * calculateGrowthRate(previousData));
  }

  return forecastedData;
}

function calculateGrowthRate(prices) {
  let start = prices[0];
  let end = prices[prices.length - 1];

  let averageGrowth = (end - start) / start;

  return averageGrowth;
}
