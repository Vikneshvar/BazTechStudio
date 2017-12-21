// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawBarChart);


// Draw the chart and set the chart values
function drawPieChart() {
	var data = google.visualization.arrayToDataTable([
		['Me', 'How much'],
		['Data Analytics', 40],
		['Coding', 30],
		['Database & Reporting', 25],
		['Machine Learning', 30],
		['Healthcare & Marketing Analytics', 20]
	]);

	var options = {
		chartArea:{
		    width: '80%',
		    height: '80%',
		},
		height: 300,
		width: 550,
	};

	var chart = new google.visualization.PieChart(document.getElementById('dskills'));
	chart.draw(data, options);
}

function drawBarChart() {
	var data = google.visualization.arrayToDataTable([
		['Skill', 'Score',{ role: 'style' }],
		['Problem Solving & Critical Thinking', 80,'light blue'],
		['Independent', 72,'orange'],
		['Innovative & Research-Oriented', 90,'green'],
		['Leadership & Teamwork', 75,'brown'],
		['Communication & Presentation', 70,'gold']
	]);

	var options = {
		chartArea:{
		    width: '30%',
		    height: '80%',
		},
		height: 300,
		width: 700,
		legend: {position: 'none'}
	};
	var chart = new google.visualization.BarChart(document.getElementById('pskills'));
	chart.draw(data, options);
}