function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	var added = false;
	var spread = 10;
	var points = 13
	var pointSlider;
	var spreadSlider;
	var pointSlider = createSlider(1,500,13)
	var spreadSlider = createSlider(1, 50, 10);
	var pointSlider = createSlider(1,500,13)
		// pointSlider.style('orient: vertical')
	var spreadSlider = createSlider(1, 50, 10);
		// spreadSlider.style('orient: vertical')
	pointSlider.addClass("option");
	spreadSlider.addClass("option");
	spread = spreadSlider.value();
	points = pointSlider.value()

	this.addToolOptions = function(){
		
		var c = select("#toolOptions")
		pointSlider.parent(c);
		spreadSlider.parent(c);
	}

	
	this.changeSpread = function(num){
		spread += num
		if (spread < 1){
			spread = 1
		}
		else if (spread > 50){
			spread = 50
		}
	};

	this.draw = function(){
		if (added == false){
		this.addToolOptions();
		added = true;
		}
		spread = spreadSlider.value();
		points = pointSlider.value();
		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
		
	};

	this.addOptions = function(){
		
	}
	
}