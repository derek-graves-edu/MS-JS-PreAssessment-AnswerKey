// question-01
// answer: Many answers possible, though students should get the general role of each language correct. Sample answers included below.

//	(a) HTML contains the actual content of the webpage, such as text, links, and forms. It does not style the content for the most part,  and it also does not give it functionality, for the most part.

//	(b) CSS styles the HTML elements on the page. Things like colors, relative size and arrangement of elements, and fonts are all controlled by CSS.

//	(c) JS gives websites functionality. Any interactive elements of websites are almost always made with JS. HTML and CSS can be edited via JS.


// question-02
// answer: Many answers possible. The integer should be defined using 'const,' and the float can be defined using 'const,' 'let,' or 'var.' The name of the integer should be in camel case, which is where the first word is lowercase and every subsequent word in the name has its first letter capitalized. Sample answers included below.

//	(a)
const myNumber = 4;
let myFloat = 6.5;

//	(b)
//		(i)
console.log(myNumber + myFloat);

//		(ii)
console.log(myNumber - myFloat);

//		(iii)
console.log(myNumber * myFloat);


// question-03
// answer: Any three of the following: numbers, strings, booleans, arrays, objects

// question-04
// answer:

//	(a)
const concatenated = firstString + secondString;
console.log(concatenated);

//	(b) Note: variable names can be anything reasonable. This is also possible without creating new variables; accept those, too.
const newString1 = concatenated.replace('o', '0');
const newString2 = newString1.replace('e', '3');
console.log(concatenated);


// question-05
// answer:

//	(a) "You've become a baby again!"

//	(b) The main change needs to be made in the first if condition. The code should read:
let userAge = parseInt(prompt("Please enter your age: "));
if (userAge < 18 && userAge >= 13) {
  alert("Age validated successfully. Welcome!")
} else if (userAge < 13) {
  alert("You're too young!")
} else {
  alert("You're too old!")
}
// if (!(userAge >= 18 && userAge < 13)) is also acceptable for the first condition


// question-06
// answer: TypeError (or Uncaught TypeError)


// question-07
// answer: 

//	(a) '3:10:37'

//	(b) Parameters: a, b || Arguments: 2, 3.5, 3, 4, product1, product2 (and if students include superProduct, that's also okay)


// question-08
// answer:

// (a) 'message' is not globally defined. It is locally scoped to the showMessage function, and therefore cannot be accessed outside of showMessage.

// (b) 
function secondToLast(s) {
	if (s.length < 2) {
		return "Not possible";
	}
	
	return s[s.length - 2];
}


// question-09
// answer:

//	(a) Any three of the following: SyntaxError, TypeError, EvalError, RangeError, ReferenceError, InternalError

//	(b) Answers will vary greatly. It is best to test student code in a JavaScript shell to see if it produces the error they intended. Below is sample code that produces a SyntaxError.
let arrayWithError = [1,2,3,4,5]};


// question-10
// answer: 
function maxInArray(array) {
  let currentMax = array[0];
  while (array.length > 0) {
    // Your code goes here
		let temp = array.pop();
		if (temp > currentMax) {
			currentMax = temp;
		}
  }

  return currentMax;
}

// alternate answer: 
function maxInArray(array) {
  let currentMax = array[0];
	let i = 1;
  while (i < array.length) {
    // Your code goes here
		if (array[i] > currentMax) {
			currentMax = array[i];
		}
		i++;
  }

  return currentMax;
}


// question-11
// answer:

//	(a)
for (let i = 1; i <= 50; i++) {
	console.log(i * i);
}

//	(b)
let i = 1;
while (i <= 1000) {
	console.log(2 * i);
	i++;
}


// question-12
// answer:

//	(a)
const messageElements = document.querySelectorAll('.message');
const targetParagraph = [...messageElements][1];
targetParagraph.textContent = "You might want to."

//	(b)
function userName() {
  prompt("Enter your username:");
  alert("Username does not exist");
}

const desiredElement = document.querySelector('.has-account');
desiredElement.addEventListener('click', userName);
