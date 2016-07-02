var portfolio  =[
	{
		"name": "Rumour Generator",
		"snippet": "Easily expandable generator that produces random rumours for use in storytelling and rpg's.",
		"link": "http://codepen.io/xiavn/pen/VLNQQM",
		"image": ["rumour.png", "rumour2.png", "rumour3.png"],
		"tags": ["regex", "javascript"],
		"description": "This project was created as part of FreeCodeCamp, the task was to create a random quote generator. I decided I wanted to try and expand on the concept of a quote generator, and instead build something that could be useful when running tabletop roleplaying games to randomly generate rumours that could be given to the players to add flavour and inspire adventure. When creating the generator one of my main goals was to make it modular and easy to expand to allow for a greater variety of generated responses. I utilised Regular Expressions and a series of objects to allow new words to be added in categories that can then be randomly picked and filled into gaps in the core rumour template. This allows you to write a basic rumour and specify specific categories to be used when filling in the blanks - such as ay type of location, or only rural locations, male pronouns or female, and plural forms of animals."
	},
	{
		"name": "Local Weather",
		"snippet": "Webpage that looks up the local weather for the user and displays various forecasts for the future.",
		"link": "http://codepen.io/xiavn/pen/NGqxoJ",
		"image": [],
		"tags": ["ajax", "api", "local storage"],
		"description": "This was a project set by FreeCodeCamp with the goal of creating a page that would utilise the user's location to display the current weather for them through the OpenWeatherMap API. It should also allow them to view the results in either celcius or farenheit. I decided to expand this further by displaying a wider variety of forecasts, including the current, next 12 hours, and next three days and to allow the user to search for and change the location set. To build on top of this, in order to limit the number of repeat requests to the API, the page uses local storage to save results, and only refreshes if 30 minutes has past, or the user looks for a new city. It also stores the results of searches, allowing the user to recall previous searches they have already done."
	}];


//Create the Portfolio Section
function createPortfolio(data) {
	var portfolioDisplay = "";
	//For each project generate an individual portfolio square
	data.forEach(function createSquare(project) {
		var name = project.name,
			snippet = project.snippet,
			tags = project.tags[0],
			image = project.image[0];

		//Add additional tags
		for (var i=1; i<project.tags.length; i++) {
			tags+= " | " + project.tags[i];
		}

		portfolioDisplay+= "<div class='portfolio-square'><div><img src='../img/" +
		image +
		"'></img></div><div class='overlay'><h4>" +
		name +
		"</h4><p>" +
		 snippet +
		 "</p><a class='button'>read more</a><span>" +
		 tags +
		 "</span></div></div>";
	});	
	//Affix each square to the main portfolio display
	$("#portfolio-display").html(portfolioDisplay);
}
	
$(document).ready(function(){
	createPortfolio(portfolio);
});
