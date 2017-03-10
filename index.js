const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
//ctx.globalCompositeOperation = 'multiply';

function draw(e){
	if(!isDrawing) return; //stops the function from running when mouse is not clicked down
	console.log(e);

		ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
		ctx.beginPath();
		// start from...
		ctx.moveTo(lastX, lastY);
		// go to
		ctx.lineTo(e.offsetX, e.offsetY)
		ctx.stroke();

		lastX = e.offsetX;
		lastY = e.offsetY;
		// or ES6 alternative to lines 26 and 27
		//[lastX, lastY] = [e.offsetX, e.offsetY] 
		hue++
		if(hue >= 360) {
			hue = 0;
		}
		if(ctx.lineWidth >= 100 || ctx.lineWidth <= 3) { 
			direction = !direction
		}
			if(direction) {
				ctx.lineWidth++
			} else {
				ctx.lineWidth--
			}
};

canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

