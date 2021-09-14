const max = 7;
const min = 3;
const dataCount = Math.ceil(Math.random() * (max - min) + min);
var xLabel;
var data;
var fakeDate = new Date("2021/3/15 12:05");
var enabledColor = '#aaa';
var disabledColor = '#dddddd';
$(function () {
    let chartJs = document.getElementById("chartJs");
    let ctx = chartJs.getContext("2d");
    xLabel = getXLabel();
    data = getData();
    // let xLabelColor = getXLabelColor(data);
    // console.log(xLabelColor);
    new Chart(ctx, {
        type: "line",

        // The data for our dataset
        data: {
            labels: xLabel,
            datasets: [
                {
                    label: "總點閱率",
                    borderColor: "#135eef",
                    backgroundColor: "#135eef",
                    fill: "false",
                    lineTension: 0,
                    data: data,
                },
            ],
        },

        // Configuration options go here
        options: {
            animation:{
                duration: 0
            },
            maintainAspectRatio: false,
            title: {
                display: true,
                text: `點閱時間分析圖(${fakeDate.getFullYear()}/${
                    fakeDate.getMonth() + 1
                }/${fakeDate.getDate()}~${fakeDate.getFullYear()}/${fakeDate.getMonth() + 1}/${
                    fakeDate.getDate() + 7
                })`,
                fontSize: 20,
            },
            tooltips: {
                mode: "nearest",
                intersect: false,
                callbacks: {
                    title: function (tooltipItemArr) {
                        return `${formatDate(tooltipItemArr[0].label)}`;
                    },
                    label: function (tooltipItem) {
                        return `${tooltipItem.value}%`;
                    },
                },
            },
            legend: {
                position: "bottom",
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            callback: function (value) {
                                return `${formatDate(value)}`;
                            },
                            stepSize: 12,
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 100,
                            callback: function (value) {
                                return `${value}%`;
                            },
                        },
                    },
                ],
            },
        },
    });
});

getXLabel = function () {
    let millisecondsPerDay = 24 * 60 *60 * 1000;
    let daysPerWeek = 7;
    let dateArray = [];
    for (let i = 0; i <= daysPerWeek; i++) {
        dateArray.push(fakeDate.getTime() + millisecondsPerDay * i);
    }
    return dateArray;
};

getData = function () {
    let data = [10,21,33,13,14,21,40,12,8,7,19,22,50,13,26,17,14,32];
    let currentPercent = 0;
    let result = [];
    let maxPercent = 80;
    for (let i = 0; i < dataCount; i++) {
        let index = Math.floor(Math.random()*data.length);
        let percent = data[index];
        if(percent + currentPercent >= maxPercent) currentPercent += Math.floor((maxPercent-currentPercent) / 2);
        else currentPercent += percent;
        if(i == dataCount - 1) currentPercent = maxPercent;
        result.push(currentPercent);
    }
    return result;
};

getXLabelColor = function (data) {
    let color = [];
    if (data instanceof Array) {
        let disabledIndex = data.length;
        for (let i = 1; i <= xLabel.length; i++) {
            if(i > disabledIndex ){
                color.push(disabledColor);
            }else{
                color.push(enabledColor);
            }
        }
    }
    return color;
};

// 時間取 時:分
// formatDate = function (date) {
//     let temp = new Date(Number.parseInt(date));
//     return (
//         `${temp.getHours() < 10 ? "0" + temp.getHours() : temp.getHours()}:${
//             temp.getMinutes() < 10 ? "0" + temp.getMinutes() : temp.getMinutes()
//         }`
//     );
// };
formatDate = function (date) {
    let temp = new Date(Number.parseInt(date));
    return `${temp.getFullYear()}/${temp.getMonth() + 1}/${temp.getDate()}`;
};
