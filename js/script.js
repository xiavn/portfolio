var portfolio = [
		{
			"name": "Game Of Life",
			"snippet": "A Game Of Life created as part of FreeCodeCamp.",
			"link": "http://codepen.io/xiavn/pen/VjJwXv",
			"image": "life.png",
			"tags": ["react", "timers", "loops", "mixins"],
			"description": "The goal here was to create a working version of Conway's Game of Life. The user had to be able to start and stop the game, and be able to see the total number of 'generations' passed. In addition the board randomly generates a layout, but also allows the user to add their own starting cells, or clear the board entirely and draw their own starting layout. The user is also able to change the size of the board, and the speed of each generation. The SCSS for this project utilises loops and mixins in order to create responsive board grid patterns at each of the difference sizes."
		},
		{
			"name": "Recipe Box",
			"snippet": "An app designed to store and recall recipes, created as part of FreeCodeCamp.",
			"link": "http://codepen.io/xiavn/pen/kXpVBB",
			"image": "recipe.png",
			"tags": ["react", "storage"],
			"description": "For this project I was required to create an app that could store ingredients for recipes, local storage had to be utilised to save and recall a users recipes, and it had to offer a way for the user to add and remove recipes and ingredients."
		},
		{
			"name": "FreeCodeCamp Leaderboard",
			"snippet": "A leaderboard designed to show and sort total points earned on FreeCodeCamp.",
			"link": "https://codepen.io/xiavn/pen/grZpYp",
			"image": "leaderboard.png",
			"tags": ["react", "sorting"],
			"description": "This project required me to use React to import an array of scores from FreeCodeCamp of either the most recent top scorers, or the all time scorers. The scoreboard then sorts and displays the information in descending order. The user is able to choose between loading the alltime scoreboard or the recent one using buttons at the tops of the page, they can then change the sorting of each leaderboard to be based on total score or the top scores in the last 30 days. Usernames also provide links to the user's relevant profile page."
		},
		{
			"name": "Markdown Previewer",
			"snippet": "A FreeCodeCamp project to create a Markdown Previewer.",
			"link": "http://codepen.io/xiavn/pen/zBpyBp",
			"image": "markdown.png",
			"tags": ["react", "markdown"],
			"description": "For this project I had to use React to create a markdown previewer that would allow a user to enter text in markdown format and have it appear on the page correctly formatted. The display had to update as the user entered text so that the preview was always up to date. I used Markdown-It to provide the support for parsing the markdown."
		},
		{
			"name": "Splash Page",
			"snippet": "A commission to design a splash page for a games journalist's website.",
			"link": "https://xiavn.github.io/dontquoteme/",
			"image": "quote.png",
			"tags": ["gsap", "animation", "svg"],
			"description": "This was a commission piece intended to be used as a splash page for a <a href='http://dontquotemeonthat.co.uk/' target='_blank'>games journalist's website</a>. Having seen some of my previous work, I was requested to make a scene of a desk, with various subtley animated sections that would be used to provide links to various collections around the site. I used the GSAP javascript library in order to make sure the animations had maximum cross-browser compatibility, whilst also ensuring the splash page worked well across all sized. All of the artwork was my own work, designed in Adobe Illustrator, and then used in place as an inline svg."
		},

		{
			"name": "Noughts & Crosses",
			"snippet": "A project for FreeCodeCamp to create an unbeatable tic-tac-toe game.",
			"link": "http://codepen.io/xiavn/pen/bEOVmg/",
			"image": "noughts.png",
			"tags": ["debugging", "minimax"],
			"description": "In this project I was tasked with creating an unbeatable tic-tac-toe (also known as a noughts and crosses) game. I utilised a minimax algorithm in order to achieve this, which causes the script to recursively search through every possible future move option to pick the most optimal move it can take. This project taught me a lot about using the browser tools to debug and find issues in a complex, recursive script. The game also keeps track of the players win/loss record and allows the human player to pick the symbol they play with."
		},

		{
			"name": "Simon Game",
			"snippet": "A project as part of FreeCodeCamp to design and code a Simon game. The project should use sound, and allow the player to win after 20 correct presses in sequence.",
			"link": "http://codepen.io/xiavn/pen/xVbxgJ/",
			"image": "simon.png",
			"tags": ["web audio api", "css"],
			"description": "This project required me to make a Simon Game, where the player has to follow a series of flashing lights and notes and then repeat the button presses in order. The game was required to have the player complete 20 consecutive turns before being declared a winner. It also had to feature two seperate modes - one where the player could make a mistake, and the pattern would be repeated for them, and one where a mistake would end the game. I decided to use the Web Audio API in order to achieve the sound effects linked to each of the buttons without needing seperate audio files. Each button plays a different tone, allowing the player to associate the button with both a light and a sound; additionally, as the nmber of stages completed increases, the game shortens the length of the tone, and the length of the light activation to allow the game to move quickly and not get bogged down. "
		},
		{
			"name": "Animated Village",
			"snippet": "An animated svg image of a village that utilises the GSAP animation library.",
			"link": "http://codepen.io/xiavn/pen/KdEqJE/",
			"image": "village.png",
			"tags": ["gsap", "animation", "svg"],
			"description": "This was a personal project, in which I wished to design a piece of artwork and then experiment with animating various sections of the design. I created all the artwork using Adobe Illustrator and then exported and optimised the image, before displaying it as an inline svg image to allow for css animations. Initially I coded this project using entirely css to achieve all of the animations; however I found this gave unsatisfactory cross-browser compatibility and instead chose to explore options in Javascript. I settled on using the GSAP Animation Library which allowed me to port the css animations and have them be applied through javascript instead."
		},
		{
			"name": "Local Weather",
			"snippet": "Webpage that looks up the local weather for the user and displays various forecasts for the future.",
			"link": "http://codepen.io/xiavn/pen/NGqxoJ",
			"image": "weather.png",
			"tags": ["open weather api", "storage"],
			"description": "This was a project set by FreeCodeCamp with the goal of creating a page that would utilise the user's location to display the current weather for them through the OpenWeatherMap API. It should also allow them to view the results in either celcius or farenheit. I decided to expand this further by displaying a wider variety of forecasts, including the current, next 12 hours, and next three days and to allow the user to search for and change the location set. To build on top of this, in order to limit the number of repeat requests to the API, the page uses local storage to save results, and only refreshes if 30 minutes has past, or the user looks for a new city. It also stores the results of searches, allowing the user to recall previous searches they have already done."
		},

		{
			"name": "Twitch Streamers",
			"snippet": "A project to utilise the twitch api to display the status of various channels. Completed as part of FreeCodeCamp.",
			"link": "http://codepen.io/xiavn/pen/VeeKpM/",
			"image": "twitch.png",
			"tags": ["twitch api", "css", "filtering"],
			"description": "This project required me to use the twitch api to pull channel information to create a page that would display the status of various channels. It had to be capable of identifying if the channel was online, offline, or had been closed (which would throw an error), and if they were online, what were they currently streaming. In addition, this design utilises css to colour code the various channels and to allow the user to select a filter and view only those channels that are online, offline or both."
		},

		{
			"name": "Pomodoro Timer",
			"snippet": "A pomodoro timer created as part of FreeCodeCamp.",
			"link": "http://codepen.io/xiavn/pen/JYbZbw",
			"image": "pom.png",
			"tags": ["desktop notification", "timer"],
			"description": "This task required me to create a pomodoro timer that could be used as part of the Pomodoro Technique. This is a way of managing time, that encourages the user to work entirely unniterupted for a period of time, and then have a short rest break. A number of these sets of quick burts is normally completed, and then a longer rest. This timer is set to the default time reccomendations as laid out by the technique, but also allows the user to change the timer length for both break and work, and the number of sessions that make up a set. It also makes use of desktop notifications, should the user give permission, which allow it to inform the user in an unobtrusive way that the current session has been completed."
		},

		{
			"name": "Wikipedia Viewer",
			"snippet": "A project to make a wikipedia viewer as part of FreeCodeCamp. It should be able to offer a random article and provide a search function for entries.",
			"link": "http://codepen.io/xiavn/pen/WrJxGm",
			"image": "wiki.png",
			"tags": ["wikipedia api", "javascript"],
			"description": "For this project I was required to use the wikipedia API to search for an article linked to the search term and display a list of possible results. Each result should display a brief synopsis and provide a link for further information. In addition there should be an option for a user to randomly choose an article without entering a search term. This project required a lot of research into how to use headers correctly as part of an ajax call, to ensure the api allowed access."
		},

		{
			"name": "Rumour Generator",
			"snippet": "Easily expandable generator that produces random rumours for use in storytelling and rpg's.",
			"link": "http://codepen.io/xiavn/pen/VLNQQM",
			"image": "rumour.png",
			"tags": ["regex", "javascript"],
			"description": "This project was created as part of FreeCodeCamp, the task was to create a random quote generator. I decided I wanted to try and expand on the concept of a quote generator, and instead build something that could be useful when running tabletop roleplaying games to randomly generate rumours that could be given to the players to add flavour and inspire adventure. When creating the generator one of my main goals was to make it modular and easy to expand to allow for a greater variety of generated responses. I utilised Regular Expressions and a series of objects to allow new words to be added in categories that can then be randomly picked and filled into gaps in the core rumour template. This allows you to write a basic rumour and specify specific categories to be used when filling in the blanks - such as ay type of location, or only rural locations, male pronouns or female, and plural forms of animals."
		},
		{
			"name": "A Brief Tour of Britain's Early History",
			"snippet": "A timeline of Britain;s Early History, designed as part of FreeCodeCamp",
			"link": "http://codepen.io/xiavn/pen/vGyRJN/",
			"image": "britain.png",
			"tags": ["JSON, sorting"],
			"description": "This task initially asked the user to create a tribute page relating to a topic, person or interest. I chose to showcase my interest in British Early History by creating a page that would provide information displayed as part of a timeline. I designed all the icons used in the timeline, so that each entry would be considered part of a different category, and the data is stored in a JSON format, that allows data to be entered in any order but still be sorted into the correct place in the timeline."
		},

		{
			"name": "Electronic Calculator",
			"snippet": "An electronic calculator created as part of FreeCodeCamp.",
			"link": "http://codepen.io/xiavn/pen/bVopBK",
			"image": "calculator.png",
			"tags": ["javascript", "regex"],
			"description": "This project required me to make an electronic calculator that could perform basic mathematic functions like addition, subtraction, multiplication and divide. In addition I also utilised regular expressions to help design a way for the user to clear one button press at a time, rather than having to clear the whole screen."
		}
	];

//Create the Portfolio Section
function createPortfolio(data) {
	var portfolioDisplay = "";
	//For each project generate an individual portfolio square
	data.forEach(function createSquare(project,index) {
		portfolio[index].id = index;
		var name = project.name,
			snippet = project.snippet,
			tags = project.tags[0],
			desc = project.description,
			link = project.link,
			id = project.id;
			image = project.image;

		//Add additional tags
		for (var i=1; i<project.tags.length; i++) {
			tags+= " | " + project.tags[i];
		}

		portfolioDisplay+= "<div class='portfolio-square' id='" +
		id + 
		"'><div><img src='../img/" +
		image +
		"'></div><div class='overlay'><h4>" +
		name +
		"</h4><p>" +
		 snippet +
		 "</p><a class='button read-more'>read more</a><span>" +
		 tags +
		 "</span></div></div>";

		 //Generate the html for the modal pop up
		portfolio[id].modal = "<h1>" + 
		name +
		"</h1><p>" + 
		desc + 
		"</p><a href='" +
		link +
		"' target='_blank' class='button'>view project</a>";
		});	
		//Affix each square to the main portfolio display
		$("#portfolio-display").append(portfolioDisplay);
}
	
$(document).ready(function(){
	$('body').bind('touchstart', function() {});
	createPortfolio(portfolio);
	//Load the modal into view with the correct information.
	$('.read-more').on("click", function() {
		var id = $(this).parent().parent().attr('id');
		$('.modal-inner').html(portfolio[id].modal);
		$('.modal').removeClass("hidden");
	});
	$('.close-btn').on("click", function() {
		$('.modal').addClass("hidden");
	});

	//Animations
	var vw = $(window).width(),
		balloon = ".balloon",
		bubbles = ["#bubble1", "#bubble2"];

	//Balloon Drift
	var drift = new TimelineMax({repeat: -1, yoyo: true});
	drift.to(balloon, 20, {y: 20, ease: Linear.easeInOut})
	.to(balloon, 60, {y: -60, ease: Linear.easeInOut})
	.to(balloon, 40, {y: 40, ease: Linear.easeInOut})
	.to(balloon, 20, {y: -20, ease: Linear.easeInOut})
	.to(balloon, 40, {y: 40, ease: Linear.easeInOut})
	.to(balloon, 20, {y: -20, ease: Linear.easeInOut})
	.to(balloon, 200, {x: vw, ease: Linear.easeInOut}, 0)
	.to(balloon, 150, {scaleX:0, scaleY:0, ease: Linear.easeNone}, 50);

	//Waterfall
		//Bubbles
	TweenMax.staggerTo(bubbles, 5, {
		opacity: 1,
		repeat: -1,
		yoyo: true,
		ease: Linear.easeNone
	}, 5);
});
