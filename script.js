
// Vse metodi sozdayut novie massivi. Tolko forEach menyaet tekushiy massiv

let array = [1,2,3,4,5,6,7,8,9,10];

let newArray = array.map((item) => {
	return {
		digget: item,
		odd: item % 2 == 0 ? 'false' : 'true'
	}
} )

console.log(newArray);