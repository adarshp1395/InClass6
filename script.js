var quarter = [1,2,3,4];
// For drawing the lines
var saints = [2,1,5,6];
var panthers = [1,3,6,3];
var buccaneers = [6,2,4,7];
var falcons = [1,3,8,2];
var texans = [3,5,3,7];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: africa
      }
    ]
  }
});