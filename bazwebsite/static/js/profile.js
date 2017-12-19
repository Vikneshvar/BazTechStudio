// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawBarChart);


// Draw the chart and set the chart values
function drawPieChart() {
	var data = google.visualization.arrayToDataTable([
		['Me', 'How much'],
		['Data Analytics', 40],
		['Programming', 30],
		['Database & Reporting', 25],
		['Machine Learning', 30]
	]);

	// Optional; add a title and set the width and height of the chart
	var options = {
		titleTextStyle: {
				color: 'black',    // any HTML string color ('red', '#cc00cc')
				fontName: 'PT Mono', // i.e. 'Times New Roman'
				fontSize: 18, // 12, 18 whatever you want (don't specify px)
				bold: true,    // true or false
				italic: false   // true of false
		},
		chartArea:{
		    left:5,
		    top: 5,
		    width: '100%',
		    height: '300',
		},
		width:800,
		height: 350
	};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('dskills'));
	chart.draw(data, options);
}

function drawBarChart() {
	var data = google.visualization.arrayToDataTable([
		['', '',{ role: 'style' }],
		['Problem Solving', 80,'light blue'],
		['Critical Thinking', 72,'orange'],
		['Innovative & Research-Oriented', 90,'green'],
		['Leadership & Teamwork', 75,'brown'],
		['Communication & Presentation', 70,'gold']
	]);

	var options = {
		titleTextStyle: {
				color: 'black',    // any HTML string color ('red', '#cc00cc')
				fontName: 'PT Mono', // i.e. 'Times New Roman'
				fontSize: 18, // 12, 18 whatever you want (don't specify px)
				bold: true,    // true or false
				italic: false   // true of false
		},
		chartArea:{
		    width: '40%',
		    height: '200',
		},
		width:700,
		height:250,
		legend: {position: 'none'}
	};
	var chart = new google.visualization.BarChart(document.getElementById('pskills'));
	chart.draw(data, options);
}