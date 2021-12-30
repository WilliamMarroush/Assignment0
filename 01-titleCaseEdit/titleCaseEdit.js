function titleCaseEdit(title) {
  	text = title.split(" ");
	finaltext = "";
	for (let step = 0;step<text.length;step++){
		addtext = text[step].charAt(0).toUpperCase()+text[step].slice(1);
		if (step<text.length-1){
			finaltext+=addtext+" ";}
		else
			finaltext+=addtext;
	}
	return finaltext;
}

// Do not edit this line;
module.exports = titleCaseEdit;
