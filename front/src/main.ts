'use strict';
// var socket = new WebSocket("127.0.0.1", "TCP", "");
// var Socket = window['WebSocket'] || window['MozWebSocket'];
// function greeter(person: string) : string {
//     return "Hello, " + person;
// }
// var user = "World";

class Cell {
	private posX: number;
	private posY: number;
	protected beenHit: boolean;

	constructor(X: number, Y: number) {
		this.posX = X;
		this.posY = Y;
		this.beenHit = false;
	}

	public getX(): number {
		return this.posX;
	}
	public getY(): number {
		return this.posY;
	}
	public getHit(): boolean {
		return this.beenHit;
	}
	public doHit(): void {
		this.beenHit = true;
	}
}

class ShipCell extends Cell {
	private shipNum: number;
	constructor(X: number, Y: number, ship: number) {
		super(X, Y);
		this.shipNum = ship;
	}
	public getShip(): number {
		return this.shipNum;
	}
}

class Ship {
	private cells: Cell[];
	constructor(size: number, start: number[], horizontal: boolean) {
		this.cells = new Cell[size];
		// let horizontal;
		// if(start[0] == end[0]) {
		// 	horizontal = true;
		// } else {
		// 	horizontal = false;
		// }
		for(var cell in this.cells) {
			// cell = new Cell();
		}
	}
}

var infodiv = document.getElementById("area");

var socket = new WebSocket('ws://echo.websocket.org');
socket.onopen = () => {
	socket.send("message");
}

socket.onmessage = (message) => {
	// console.log(message.data);
}


window.onload = () => {
    // document.body.innerHTML = greeter(user);
    var cell = new Cell(0,0);
    console.log(cell.getHit());
    cell.doHit();
	console.log(cell.getHit());
};
 










