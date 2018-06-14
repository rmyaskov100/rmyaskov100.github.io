var arrayOfProperNouns = ["Abzorbaloff", 
"Adipose", 
"Aggedor", 
"The Alliance", 
"Alpha Centauri",
"Atraxi",
"Axons",
"Azal",
"Blon Fel-Fotch Passameer-Day Slitheen",
"Carrionites",
"Davros",
"Dorium Maldovar",
"Draconians",
"Eknodines",
"Face of Boe",
"Family of Blood",
"The Flood",
"Gelth",
"Hath",
"Ice Warriors",
"Idris",
"Jabe",
"Jagrafess",
"Judoon",
"Kahler-Jex",
"Krillitanes",
"Krotons",
"Krynoids",
"Macra",
"Minotaur",
"Moxx of Balhoon",
"Mutts",
"Nimon",
"Ogri",
"Ogrons",
"Ood",
"Patchwork people",
"Peg Dolls",
"Plasmavore",
"Prisoner Zero",
"Pyrovile",
"Racnoss",
"Reapers",
"Saturnyns",
"Scarecrow",
"Scaroth",
"Sensorites",
"Shakri",
"Sill the Mentor",
"The Silence",
"The Sisterhood of Karn",
"Sisters of Plenitude",
"Slitheen",
"Sontarans",
"Sutekh the Destroyer",
"Sycorax",
"Terileptil",
"Thals",
"Vashta Nerada",
"Vervoids",
"Vespiform",
"Vinvocci",
"Weeping Angels",
"Werewolf",
"Wirrn",
"Wooden King and Wooden Queen",
"Zarbi",
"Zygon",
"Companions",
"Adam Mitchell",
"Ace",
"Adric",
"Amy Pond",
"Astrid Peth",
"Barbara Wright",
"Ben Jackson",
"Brigadier Alistair Gordon Lethbridge-Stewart",
"Captain Jack Harkness",
"Captain Mike Yates",
"Clara Oswald",
"Donna Noble",
"Dodo Chaplet",
"Grace Holloway",
"Harry Sullivan",
"Ian Chesterton",
"Jamie McCrimmon",
"Jo Grant",
"Katarina",
"Leela",
"Liz Shaw",
"Martha Jones",
"Melanie Bush",
"Mickey Smith",
"Nyssa",
"Peri Brown",
"Polly Wright",
"River Song",
"Romana",
"Rory Williams",
"Rose Tyler",
"Sarah Jane Smith",
"Sergant Benton",
"Steven Taylor",
"Susan Foreman",
"Tegan Jovanka",
"Vicki Pallister",
"Victoria Waterfield",
"Vislor Turlough",
"Wilfred Mott",
"Zoe Heriot",
"Cyborgs",
"Bannakaffalatta",
"The Captain",
"Cyberman",
"Daleks",
"John Lumic",
"Kahler-Tek",
"Max Capricorn",
"Toclafane",
"Earth Creatures",
"Gangers",
"Giant maggots",
"Haemovore",
"Madame Vastra",
"Pig slaves",
"Sea Devils",
"Silurians",
"Entities",
"The Beast",
"The Black Guardian",
"The Celestial Toymaker",
"The Dream Lord",
"Fenric",
"Gods of Ragnarok",
"The TARDIS",
"Humans",
"Adelaide Brooke",
"Brian Williams",
"Canton Delaware",
"Craig Owens",
"Doctor Simeon",
"Futurekind",
"Grayle",
"Harriet Jones",
"Headless Monks",
"Henry Avery",
"Henry Van Statten",
"Jackie Tyler",
"Jackson Lake",
"Joan Redfern",
"John Riddell",
"Kate Stewart",
"Kazran Sardick",
"Lady Cassandra",
"Lady Christina De Souza",
"Liz Ten",
"Madame de Pompadour",
"Madame Kovarian",
"Madge Arwell",
"Mercy Hartigan",
"Pete Tyler",
"Professor Edward Travers",
"Professor Lazarus",
"Salamander",
"Sally Sparrow",
"Sharaz Jek",
"Solomon",
"Sylvia Noble",
"Tobias Vaughn",
"Weng-Chiang",
"Robots",
"Autons",
"Handbots",
"K-9",
"Kamelion",
"Raston Warrior Robots",
"Roboforms",
"Smilers",
"Solomon's Robots",
"The Teselecta",
"Voc Robots",
"War Machine",
"Yeti",
"Time Lords",
"Borusa",
"First Doctor",
"Second Doctor",
"Third Doctor",
"Fourth Doctor",
"Fifth Doctor",
"Sixth Doctor",
"Seventh Doctor",
"Eighth Doctor",
"War Doctor",
"Ninth Doctor",
"Tenth Doctor",
"Eleventh Doctor",
"Twelfth Doctor",
"Thirteenth Doctor",
"Jenny",
"The Master",
"The Meddling Monk",
"Morbius",
"Omega",
"The Rani",
"Rassilon",
"The Valeyard"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var charactersOfSelectedWord = [];
var selectedWord;
var stringOfUnderlines = "";
var userChoice;
var lettersGuessed = "";
var lettersGuessedArray = [];
var randomNumber;
var wins = 0;
var guessesRemaining = 10; 

document.onkeyup = function(event) {
	randomNumber = Math.floor(Math.random() * arrayOfProperNouns.length);
	selectedWord = arrayOfProperNouns[randomNumber];
	document.getElementById("guesses_remaining").textContent = guessesRemaining;
	document.getElementById("wins").textContent = wins;

	for(var r = 0; r < selectedWord.length; r++) {
		charactersOfSelectedWord.push(selectedWord.charAt(r));
		if(alphabet.indexOf(selectedWord.charAt(r).toLowerCase()) > -1)
			stringOfUnderlines = stringOfUnderlines.concat("_");
		else
			stringOfUnderlines = stringOfUnderlines.concat(selectedWord.charAt(r));
	}

	document.getElementById("current_word").textContent = stringOfUnderlines;

	document.onkeyup = function(event) {
		userChoice = event.key;
		userChoice = userChoice.toLowerCase();

		if(alphabet.indexOf(userChoice) > -1) {
			if(lettersGuessedArray.indexOf(userChoice) === -1 && charactersOfSelectedWord.indexOf(userChoice) === -1 && charactersOfSelectedWord.indexOf(userChoice.toUpperCase()) === -1) {
				guessesRemaining--;
				lettersGuessedArray.push(userChoice);
				document.getElementById("guesses_remaining").textContent = guessesRemaining;
				if(lettersGuessed.length === 0)
					lettersGuessed = lettersGuessed.concat(userChoice);
				else 
					lettersGuessed = lettersGuessed.concat(", ", userChoice);
				document.getElementById("letters_guessed").textContent = lettersGuessed;
			}
			else {
				for(var r = 0; r < charactersOfSelectedWord.length; r++) {
					if(userChoice === charactersOfSelectedWord[r].toLowerCase())
						stringOfUnderlines = stringOfUnderlines.substr(0,r) + charactersOfSelectedWord[r] + stringOfUnderlines.substr(r+1);
				}
				document.getElementById("current_word").textContent = stringOfUnderlines;
			}
		}
		
		if(stringOfUnderlines.indexOf("_") === -1) {
			wins++;
			document.getElementById("wins").textContent = wins;
		}

		if(guessesRemaining === 0 || stringOfUnderlines.indexOf("_") === -1) {
			guessesRemaining = 10;
			lettersGuessed = "";
			lettersGuessedArray = [];
			stringOfUnderlines = "";
			charactersOfSelectedWord = [];

			randomNumber = Math.floor(Math.random() * arrayOfProperNouns.length);
			selectedWord = arrayOfProperNouns[randomNumber];
			document.getElementById("guesses_remaining").textContent = guessesRemaining;
			document.getElementById("letters_guessed").textContent = lettersGuessed;

			for(var r = 0; r < selectedWord.length; r++) {
				charactersOfSelectedWord.push(selectedWord.charAt(r));
				if(alphabet.indexOf(selectedWord.charAt(r).toLowerCase()) > -1)
					stringOfUnderlines = stringOfUnderlines.concat("_");
				else
					stringOfUnderlines = stringOfUnderlines.concat(selectedWord.charAt(r));
			}

			document.getElementById("current_word").textContent = stringOfUnderlines;
		}
	}
}