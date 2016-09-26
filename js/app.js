$(document).ready(function() {
    
    $(document).foundation();

    // Generate RSS Feeds
	$('#rss-feed').FeedEk({
		FeedUrl: 'http://jquery-plugins.net/rss',
		MaxCount: 10,
		DescCharacterLimit: 180,
		DateFormat: 'lll',
		DateFormatLang:'en'
	});

	// Sort by date, toggle asc and desc
	$('li').sort(function(a, b) {
		var aDate = $(a).find('.itemDate').text();
		var bDate = $(b).find('.itemDate').text();
		return new Date(bDate).getTime() - new Date(aDate).getTime();
	}).appendTo('#divRss ul');


	
});