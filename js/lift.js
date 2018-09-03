var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var dir = 0;
var liftPosition = 700;
var neededFloor = 1;
var timer;
var liftSpeed = 10;
var inMove = false;
var listFloor = [];
var numDifferentQuery = 0;

for(var k = 0; k < 8 ; k++){
	listFloor[k] = 0;
}

function startLift()
{

	// if (!isMove)
	// {
	// 	for ()
	// 	{

	// 	}
	// }


	var floorX = 800 - neededFloor*100 ;

	if(floorX != liftPosition)
	{
		if(liftPosition > floorX)
		{
			liftPosition--;
			dir = 0;

		}
		else {
			liftPosition++;
			dir = 1;
		}
		document.getElementById("cur-floor").innerHTML = 8 - Math.floor(liftPosition/100);
		ctx.clearRect(0,0,canvas.width, canvas.height);
		drawHome();
		drawLift();

	}

	
	timer = setTimeout(startLift, liftSpeed);

}


drawHome();
drawLift();
startLift();

function drawLift()
{	
	var width = 60;
	var height = 90;
	ctx.fillStyle = "silver";
	ctx.fillRect(170, liftPosition+5, width, height);
	ctx.fillStyle = "brown";
	ctx.fillRect(175, liftPosition+10, width-10, height -10);

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "gray";
	ctx.moveTo(190,0);
	ctx.quadraticCurveTo(200+Math.random()*3+Math.random(),liftPosition/2,180, liftPosition+5);
	ctx.stroke();
	ctx.beginPath();

	ctx.moveTo(210,0);
	ctx.quadraticCurveTo(200+Math.random()*3+Math.random(),liftPosition/2,220, liftPosition+5);
	ctx.stroke();

}

function drawHome()
{
	ctx.fillStyle = "skyblue";
	ctx.fillRect(0,0,canvas.width, canvas.height);

	ctx.lineWidth = 10;
	ctx.strokeStyle = "black";
	for(var i = 100; i <= 800; i+=100)
	{
		
		ctx.beginPath();
		ctx.moveTo(0,i);
		ctx.lineTo(400, i);
		ctx.stroke();
		ctx.closePath();
	}
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.strokeStyle = "black";
	ctx.moveTo(170-2,0);
	ctx.lineTo(170-2,800);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(230+2,0);
	ctx.lineTo(230+2,800);
	ctx.stroke();
}



document.onclick = function(event)
{
	if(event.target.tagName === "BUTTON")
	{
		neededFloor = event.target.id;
		
		document.getElementById("to-floor").innerHTML = neededFloor;
	}
}



