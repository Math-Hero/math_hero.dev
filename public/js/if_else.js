// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.

if (color == 'red') {
	document.write(color + " is the color of an apple.");
} else if (color == 'orange') {
	document.write(color + " is the color of an orange.");
} else if (color == 'yellow') {
	document.write(color + " is the color of a banana.");
} else if (color == 'green') {
	document.write(color + " is the color of lettuce.");
} else if (color == 'blue') {
	document.write(color + " is the color of a sad fruit.");
} else {
	document.write("I do not know anything by that color.");
}




// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.


(color == favorite) ? alert("Hey, that\'s my favorite color!"): console.log();



switch (color) {
	case 'red':
		document.write(color + " is the color of an apple.");
		break;
	case 'orange':
		document.write(color + " is the color of an orange.");
		break;
	case 'yellow':
		document.write(color + " is the color of a banana.");
		break;
	case 'green':
		document.write(color + " is the color of a lettuce.");
		break;
	case 'blue':
		document.write(color + " is the color of a sad fruit.");
		break;
	default:
		document.write("I do not know anything by that color.");
}





