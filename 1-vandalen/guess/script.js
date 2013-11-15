"use strict";

window.onload = function(){
	
	var secret = Math.floor(Math.random()*100)+1,
		numberOfGuesses = 1;
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		var prompts = [
					"Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + numberOfGuesses + " gissningar för att hitta det."
					,"Det hemliga talet är högre!"
					,"Det hemliga talet är lägre!"
					,"Talet är utanför intervallet 1 - 100"
					];

		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		numberOfGuesses+=1;
		// Plats för förändring.
		var answer = [];
		if(parseInt(number) == secret)
		{
			answer = [true, prompts[0]];
		}
		else if(parseInt(number) > 100 || parseInt(number) < 1)
		{
			answer = [false, prompts[3]];
		}
		else if(parseInt(number) > secret)
		{
			answer = [false, prompts[2]];
		}
		else if(parseInt(number) < secret)
		{
			answer = [false, prompts[1]];
		}
		return answer;
		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};