var lr = new LineByLineReader(STAAD_FILE);

lr.on('error', function (err) {
	// 'err' contains error object
	console.log("Error reading the file");
});

lr.on('line', function (line) {
	console.log("Line read from the file");
	console.log(line);
	console.log("\n");

	var joint_index = line.indexOf("JOINT COORDINATES");
	if (joint_index != -1)
	{
		console.log("JOINT COordinates located");
		//lr.pause();

		lr.on(line,  function(line) {

			console.log("After joint coordinates");
			console.log(line);

		})
	}
	// pause emitting of lines...


	// ...do your asynchronous line processing..
	/*setTimeout(function () {

	 // ...and continue emitting lines.
	 lr.resume();
	 }, 100);*/
});
