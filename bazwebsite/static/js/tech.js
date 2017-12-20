// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['treemap']});
google.charts.setOnLoadCallback(drawStatChart);
google.charts.setOnLoadCallback(drawMLChart);
google.charts.setOnLoadCallback(drawProgrammingChart);
google.charts.setOnLoadCallback(drawHealthMarketChart);
google.charts.setOnLoadCallback(drawLanguageChart);
google.charts.setOnLoadCallback(drawDonutChart2);
google.charts.setOnLoadCallback(drawDonut2Chart2);
google.charts.setOnLoadCallback(drawTreeChart2);


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
		['Python, R', 40],
		['Java', 30],
		['C#', 15],
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

function drawDonutChart2() {
		var data = google.visualization.arrayToDataTable([
		  ['Task', 'Hours per Day'],
		  ['Work',     11],
		  ['Eat',      2],
		  ['Commute',  2],
		  ['Watch TV', 2],
		  ['Sleep',    7]
		]);

		var options = {
		  title: 'My Daily Activities',
		  pieHole: 0.4,
		};

		var chart = new google.visualization.PieChart(document.getElementById('database'));
		chart.draw(data, options);
}

function drawDonut2Chart2() {
		var data = google.visualization.arrayToDataTable([
		  ['Task', 'Hours per Day'],
		  ['Work',     11],
		  ['Eat',      2],
		  ['Commute',  2],
		  ['Watch TV', 2],
		  ['Sleep',    7]
		]);

		var options = {
		  title: 'My Daily Activities',
		  pieHole: 0.4,
		};

		var chart = new google.visualization.PieChart(document.getElementById('stat2'));
		chart.draw(data, options);
}

function drawTreeChart2() {
	var data = google.visualization.arrayToDataTable([
	  ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
	  ['Global',    null,                 0,                               0],
	  ['America',   'Global',             0,                               0],
	  ['Europe',    'Global',             0,                               0],
	  ['Asia',      'Global',             0,                               0],
	  ['Australia', 'Global',             0,                               0],
	  ['Africa',    'Global',             0,                               0],
	  ['Brazil',    'America',            11,                              10],
	  ['USA',       'America',            52,                              31],
	  ['Mexico',    'America',            24,                              12],
	  ['Canada',    'America',            16,                              -23],
	  ['France',    'Europe',             42,                              -11],
	  ['Germany',   'Europe',             31,                              -2],
	  ['Sweden',    'Europe',             22,                              -13],
	  ['Italy',     'Europe',             17,                              4],
	  ['UK',        'Europe',             21,                              -5],
	  ['China',     'Asia',               36,                              4],
	  ['Japan',     'Asia',               20,                              -12],
	  ['India',     'Asia',               40,                              63],
	  ['Laos',      'Asia',               4,                               34],
	  ['Mongolia',  'Asia',               1,                               -5],
	  ['Israel',    'Asia',               12,                              24],
	  ['Iran',      'Asia',               18,                              13],
	  ['Pakistan',  'Asia',               11,                              -52],
	  ['Egypt',     'Africa',             21,                              0],
	  ['S. Africa', 'Africa',             30,                              43],
	  ['Sudan',     'Africa',             12,                              2],
	  ['Congo',     'Africa',             10,                              12],
	  ['Zaire',     'Africa',             8,                               10]
	]);

	tree = new google.visualization.TreeMap(document.getElementById('others'));

	tree.draw(data, {
	  minColor: '#f00',
	  midColor: '#ddd',
	  maxColor: '#0d0',
	  headerHeight: 15,
	  fontColor: 'black',
	  showScale: true
	});

}


