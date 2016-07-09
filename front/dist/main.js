'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// var socket = new WebSocket("127.0.0.1", "TCP", "");
// var Socket = window['WebSocket'] || window['MozWebSocket'];
// function greeter(person: string) : string {
//     return "Hello, " + person;
// }
// var user = "World";
var Cell = (function () {
    function Cell(X, Y) {
        this.posX = X;
        this.posY = Y;
        this.beenHit = false;
    }
    Cell.prototype.getX = function () {
        return this.posX;
    };
    Cell.prototype.getY = function () {
        return this.posY;
    };
    Cell.prototype.getHit = function () {
        return this.beenHit;
    };
    Cell.prototype.doHit = function () {
        this.beenHit = true;
    };
    return Cell;
}());
var ShipCell = (function (_super) {
    __extends(ShipCell, _super);
    function ShipCell(X, Y, ship) {
        _super.call(this, X, Y);
        this.shipNum = ship;
    }
    ShipCell.prototype.getShip = function () {
        return this.shipNum;
    };
    return ShipCell;
}(Cell));
var Ship = (function () {
    function Ship(size, start, horizontal) {
        this.cells = new Cell[size];
        // let horizontal;
        // if(start[0] == end[0]) {
        // 	horizontal = true;
        // } else {
        // 	horizontal = false;
        // }
        for (var cell in this.cells) {
        }
    }
    return Ship;
}());
<<<<<<< Updated upstream
=======
var infodiv = document.getElementById("area");
var socket = new WebSocket('ws://battleships.local/');
socket.onopen = function () {
    socket.send("message");
};
socket.onmessage = function (message) {
    // console.log(message.data);
};
>>>>>>> Stashed changes
window.onload = function () {
    // document.body.innerHTML = greeter(user);
    var infodiv = document.getElementById("area");
    var cell = new Cell(0, 0);
    console.log(cell.getHit());
    cell.doHit();
    console.log(cell.getHit());
};
var Socket = (function () {
    function Socket() {
        this.socket = new WebSocket('ws://echo.websocket.org');
    }
    return Socket;
}());
