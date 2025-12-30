var currentChapter = "all";
var currentStar = "all";
function toggleChapter(name) {
	currentChapter = name;
	mainFX();
}
function toggleStar(name) {
	currentStar = name;
	mainFX();
}

// third class is the chapter name
// fourth class is the star name
function mainFX() {
	var x = document.getElementsByClassName('questionBlock');
	
	for(var i = 0; i < x.length; i++) {
		var l = x[i].className.split(" ");
		if (currentChapter == "all" && currentStar == "all") x[i].style.display = 'block';
		else if(l[2] == currentChapter && currentStar == "all") x[i].style.display = 'block';
		else if(currentChapter == "all" && l[3] == currentStar) x[i].style.display = 'block';
		else if(l[2] == currentChapter && l[3] == currentStar) x[i].style.display = 'block';
		else x[i].style.display = 'none';
		// console.log(x[i]);
	}
}