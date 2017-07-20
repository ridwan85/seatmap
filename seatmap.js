window.onload = function () {

	var seats = [{ "x": 1, "y": 1 }, { "x": 2, "y": 1 }, { "x": 3, "y": 1 }, { "x": 4, "y": 1 }, { "x": 1, "y": 2 }, { "x": 2, "y": 2 }, { "x": 3, "y": 2 }, { "x": 4, "y": 2 },
	{ "x": 1, "y": 3 }, { "x": 2, "y": 3 }, { "x": 3, "y": 3 }, { "x": 4, "y": 3 }, { "x": 1, "y": 4 }, { "x": 2, "y": 4 }, { "x": 3, "y": 4 }, { "x": 4, "y": 4 }];
	var radius = 20;

	// Creates canvas 320 � 200 at 50, 30
	var paper = Raphael("container1","100%", "100%"); //(left,top,width,height)
	var paper2 = Raphael("container2","100%", "100%");

	for (var i = 0; i < seats.length; i++) {
		var seatObj = seats[i];
		var x = seatObj.x * 2.5 * radius,
			y = seatObj.y * 2.5 * radius;

		var seat = paper.circle(x, y, radius).attr({ stroke: "none", fill: "#f00", opacity: .4 }).data('id', seatObj);
		var seat2 = paper2.circle(x, y, radius).attr({ stroke: "none", fill: "#f00", opacity: .4 }).data('id', seatObj);
		var text;
		var text2;
		var bbox = seat.getBBox();
		text = paper.text(bbox.x + bbox.width / 2, bbox.y + bbox.height / 2, seatObj.x + "," + seatObj.y).hide();
		text.toFront().show();

		var bbox = seat2.getBBox();
		text2 = paper2.text(bbox.x + bbox.width / 2, bbox.y + bbox.height / 2, seatObj.x + "," + seatObj.y).hide();
		text2.toFront().show();

		seat.mouseover(function () {

			this.attr("opacity", 1);
			this.attr("cursor", "pointer");
		});

		seat.mouseout(function () {
			this.attr("opacity", .4);
			//text.hide();
		});

		seat.click(function () {
			if (this.attrs.fill == "#f00") {
				this.attr("fill", "#000");
			}
			else {
				this.attr("fill", "#f00");
			}
			document.getElementById('selectedSeat').innerHTML = 'Seat selected at ' + this.data("id").x + ',' + this.data("id").y;
		});

		seat2.mouseover(function () {

			this.attr("opacity", 1);
			this.attr("cursor", "pointer");
		});

		seat2.mouseout(function () {
			this.attr("opacity", .4);
			//text.hide();
		});

		seat2.click(function () {
			if (this.attrs.fill == "#f00") {
				this.attr("fill", "#000");
			}
			else {
				this.attr("fill", "#f00");
			}
			document.getElementById('selectedSeat2').innerHTML = 'Seat selected at ' + this.data("id").x + ',' + this.data("id").y;
		});

	}

}