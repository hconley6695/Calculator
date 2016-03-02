//declare var, 
//will need elements, 
//need two functions (to calculate) 
//(second one to show the answer), 
//click on a button -will use listener

var num_one, num_two, calculateBtn, calculateSub, answer;

num_one = document.querySelector('#num_one');
num_two = document.querySelector('#num_two');
calculateBtn = document.querySelector('#calculateBtn');
calculateSub = document.querySelector('#calculateSub');
answer = document.querySelector('#answer');


//change variable num_one and num_two to numbers not strings from html
function add() {
	// Number(num_one.value, num_two.value);
	/*add(num_one, num_two);*/
	// Number(num_one.value);
	// Number(num_two.value);
	return (Number(num_one.value) + Number(num_two.value));

}

//
function sub() {
	// Number(num_one.value, num_two.value);
	/*add(num_one, num_two);*/
	// Number(num_one.value);
	// Number(num_two.value);
	return (Number(num_one.value) - Number(num_two.value));

}
//




function addAnswer() {
	answer.textContent = add();
}

function subAnswer() {
	answer.textContent = sub();
}


calculateBtn.addEventListener('click', addAnswer);
calculateSub.addEventListener('click', subAnswer);

