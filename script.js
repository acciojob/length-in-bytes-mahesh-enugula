const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str]);
	str = blob.size;
	return str;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
