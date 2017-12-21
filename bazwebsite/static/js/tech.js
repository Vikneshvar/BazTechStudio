// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['treemap']});
google.charts.setOnLoadCallback(drawStatChart);
google.charts.setOnLoadCallback(drawMLChart);
google.charts.setOnLoadCallback(drawProgrammingChart);
google.charts.setOnLoadCallback(drawHealthMarketChart);
google.charts.setOnLoadCallback(drawLanguageChart);
google.charts.setOnLoadCallback(drawDatabaseChart);
google.charts.setOnLoadCallback(drawStat2Chart);
google.charts.setOnLoadCallback(drawOthersChart);


// Draw the chart and set the chart values
function drawStatChart() {
	var data = google.visualization.arrayToDataTable([
	 ['Competency', 'Score', { role: 'style' }],
	 ['Factor Analysis & PCA', 8, '#b87333'],            // RGB value
	 ['Regression', 10, 'silver'],            // English color name
	 ['Time Series & Forecasting', 7, '#b94333'],
	 ['Linear Programming', 6, 'b19333'],
	 ['Optimization', 5, 'gold'],
	]);

	// Optional; add a title and set the width and height of the chart
	var options = {
		chartArea: {
			width: '80%',
			height: '70%'
		},
		height: 300,
		width: 550,
		vAxis: {
		  title: 'Score (out of 10)'
		},
		legend: {position: 'none'}
	};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.ColumnChart(document.getElementById('stat'));
	chart.draw(data, options);
}

function drawMLChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Competency', 'Score'],
	  ['General Linear Models',  8],
	  ['Natural Language Processing (FNN, LSTM)',     6],
	  ['Computer Vision (CNN)',      5],
	  ['Q Learning, Markov Decisions',  3],
	  ['Content based & Collaborative Filtering',  3],
	]);

	var options = {
	  pieHole: 0.4,
	  chartArea: {
			width: '80%',
			height: '80%'
		},
		height: 300,
		width: 550,
	};	

	var chart = new google.visualization.PieChart(document.getElementById('machine'));
	chart.draw(data, options);
}

function drawProgrammingChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Task', 'Hours per Day'],
	  ['Android & Hybrid Application development', 5],
	  ['Web Services & APIs',  6],
	  ['Database, DW & ETL',  7],
	  ['Front-End, UX Design', 5],
	]);

	var options = {
	  is3D: true,
	  chartArea: {
			width: '80%',
			height: '80%'
		},
		height: 300,
		width: 550,
	};

	var chart = new google.visualization.PieChart(document.getElementById('programming'));
	chart.draw(data, options);
}

function drawHealthMarketChart() {
	var data = google.visualization.arrayToDataTable([
	  ['Location', 'Parent', 'Score', 'Market increase/decrease (color)'],
      ['Health',    null,                 0,                               0],
      ['Population Health & Vulnerability Analysis',   'Health',    7,      1],                      
      ['CMS Medicare Payments',    'Health',             4,                 -1],
      ['CMS RAF Score Analysis',    'Health',             4,                 -1],
      ['HCAHPS Surveys',    'Health',             4,                 -1],
      ['Elderly Health Analysis',    'Health',             4,                 -1],
      ['Cancer Detection',    'Health',             4,                 -1],
	]);

	var options = {
	  chartArea: {
			width: '80%',
			height: '80%'
		},
		height: 300,
		width: 550,
		minColor: '#f00',
        midColor: '#ddd',
        maxColor: '#0d0',
        headerHeight: 0,
	};

	var chart = new google.visualization.TreeMap(document.getElementById('healthMarket'));
	chart.draw(data, options);
}


//////////////////////////////////////////////////////////////////////////////////////



function drawLanguageChart() {
	var data = google.visualization.arrayToDataTable([
		['Me', 'How much'],
		['Python', 40],
		['Java', 30],
		['Node JS', 20],
		['Linux Shell', 15],
		['C#', 10],
		['HTML5, CSS3, JS', 30]
	]);

	// Optional; add a title and set the width and height of the chart
	var options = {
	  is3D: true,
	  chartArea: {
			width: '80%',
			height: '80%'
		},
		height: 300,
		width: 550,
	};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('language'));
	chart.draw(data, options);
}

function drawDatabaseChart() {
	var data = google.visualization.arrayToDataTable([
		['Me', 'How much'],
		['SQL Server', 40],
		['MySQL', 30],
		['Mongo DB', 20],
		['SQLite', 20],
		['Oracle 10g', 15],
		['Informatica', 5],
		['Cloudera Hadoop, Hive', 15],

	]);

	// Optional; add a title and set the width and height of the chart
	var options = {
	  is3D: true,
	  chartArea: {
			width: '80%',
			height: '80%'
		},
		height: 300,
		width: 550,
	};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('database'));
	chart.draw(data, options);
}

function drawStat2Chart() {
	var data = google.visualization.arrayToDataTable([
		['Me', 'How much'],
		['Pandas, Numpy, Sk-learn', 40],
		['Keras, Tensor-flow', 30],
		['Tableau, SPSS, Alteryx, SAS Viya, IBM Watson', 20],
		['MS Excel, XL Miner, Solver', 20],
		['Arc GIS, Informatica', 15],
	]);

	// Optional; add a title and set the width and height of the chart
	var options = {
	  is3D: true,
	  chartArea: {
			width: '80%',
			height: '80%'
		},
		height: 300,
		width: 550,
	};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('stat2'));
	chart.draw(data, options);
}

function drawOthersChart() {
	var data = google.visualization.arrayToDataTable([
		['Me', 'How much'],
		['Dockers', 40],
		['Github', 30],
		['ServiceNow, JIRA', 20],
		['Oracle PeopleSoft ERP, Siebel CRM', 20],
		['MS Office Packages', 15],
	]);

	// Optional; add a title and set the width and height of the chart
	var options = {
	  is3D: true,
	  chartArea: {
			width: '80%',
			height: '80%'
		},
		height: 300,
		width: 550,
	};

	// Display the chart inside the <div> element with id="piechart"
	var chart = new google.visualization.PieChart(document.getElementById('others'));
	chart.draw(data, options);
}


