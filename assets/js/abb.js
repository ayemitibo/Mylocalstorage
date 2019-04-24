
const tweetList = document.getElementById("tweet-list");

document.querySelector('#form').addEventListener('submit',textArea)

function textArea(e){
	e.preventDefault();

	const textValue = document.getElementById('tweet').value;

	

	let newElement = document.createElement('li');
	newElement.textContent = textValue;

	let newAnchor = document.createElement('a');

	newAnchor.classList = 'remove-tweet';

	newAnchor.textContent = 'x';



	newElement.appendChild(newAnchor);

	tweetList.appendChild(newElement);

	addToStorage(textValue);


	// console.log(allOf);

	// console.log(newElement)
	this.reset();
	
}

	tweetList.addEventListener('click',removeX);

function removeX(e){
	if (e.target.classList.contains('remove-tweet')) {
		 e.target.parentElement.remove();
	}
}


function addToStorage(textValue){
	let name = localSt();

	name.push(textValue)

	localStorage.setItem('names',JSON.stringify(name));
}

function localSt(){
	let tweetLS = localStorage.getItem('names');
	let name;
	if(tweetLS === null){
		name = []
	}else{
		name = JSON.parse(tweetLS);
	}
	console.log(name);
	return name;
}

document.addEventListener('DOMContentLoaded',reload);

function reload(){
	
}