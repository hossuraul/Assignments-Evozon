// Slideshow 
	var moveLeft=['left'];

	previous();

	function previous() {
			moveLeft.forEach(function(x) {
		        document.getElementById(x).addEventListener('click', toLeft);       
		    });
	}

	function toLeft(){
		var arr = document.getElementsByClassName("intro");

		if (arr[0].classList.contains("default")){
			arr[0].classList.remove("default");
			arr[2].classList.add("default");
		} else if (arr[2].classList.contains("default")){
			arr[2].classList.remove("default");
			arr[1].classList.add("default");
		} else if (arr[1].classList.contains("default")){
			arr[1].classList.remove("default");
			arr[0].classList.add("default");
		} else{
			document.getElementsByClassName("default");
		}
	}

	var moveRight = ['right'];

	next();

	function next() {
			moveRight.forEach(function(x) {
		        document.getElementById(x).addEventListener('click', toRight);       
		    });
	}

	function toRight(){
		var arr = document.getElementsByClassName("intro");

		if (arr[0].classList.contains("default")) {
			arr[0].classList.remove("default");
			arr[1].classList.add("default");
		} else if (arr[1].classList.contains("default")){
			arr[1].classList.remove("default");
			arr[2].classList.add("default");
		} else if (arr[2].classList.contains("default")){
			arr[2].classList.remove("default");
			arr[0].classList.add("default");
		} else{
			document.getElementsByClassName("default");
		}
	}

	// Adding div
		var a = ['addition'];

		ClickMe();

		function ClickMe() {
			a.forEach(function(x) {
		        document.getElementById(x).addEventListener('click', addContent);       
		    });
		}

		function addContent(){
			var location = document.getElementById('addDiv');
			var newContent = '<div class="space"><div class="text"><p class="up">01/01/2016</p><h4>PROJECT: SANCTUARY</h4><hr><p>Take a look at the features in the new release of Sanctuary, our education platform for League of Legends players.</p></div></div>';
		    var newElement = document.createElement('div');
		    newElement.classList.add('col-33');
		    newElement.innerHTML = newContent;
		    location.appendChild(newElement);
		    return false;
		}
	// Color-change
		var tabs = ['change', 'change2', 'change3'];

		setEventHandlers();

		function setEventHandlers() {
		    tabs.forEach(function(x) {
		        document.getElementById(x).addEventListener('click', setColor);       
		    });    
		}

		function clearColors() {
		    tabs.forEach(function(x) {
		        document.getElementById(x).style.background = "none";
		    });
		}

		function setColor(e) {
		    clearColors();
		    e.currentTarget.style.backgroundColor = '#00FF00';
		}