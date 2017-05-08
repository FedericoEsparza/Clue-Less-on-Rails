// var startBoard = {
//   "Ms. Scarlet": "Scarlet start",
//   "Col. Mustard": "Mustard start",
//   "Mrs. White": "White start",
//   "Mr. Green": "Green start",
//   "Mrs. Peacock": "Peacock start",
//   "Prof. Plum": "Plum start",
//   "Candlestick": "Study",
//   "Knife": "Hall",
//   "Pipe": "Lounge",
//   "Revolver": "Conservatory",
//   "Rope": "Billiard room",
//   "Wrench": "Kitchen"
// };

// var allKitchenBoard = {
//   "Ms. Scarlet": "Kitchen",
//   "Col. Mustard": "Kitchen",
//   "Mrs. White": "Kitchen",
//   "Mr. Green": "Kitchen",
//   "Mrs. Peacock": "Kitchen",
//   "Prof. Plum": "Kitchen",
//   "Candlestick": "Kitchen",
//   "Knife": "Kitchen",
//   "Pipe": "Kitchen",
//   "Revolver": "Kitchen",
//   "Rope": "Kitchen",
//   "Wrench": "Kitchen"
// };

// var allBallroomBoard = {
//   "Ms. Scarlet": "Ballroom",
//   "Col. Mustard": "Ballroom",
//   "Mrs. White": "Ballroom",
//   "Mr. Green": "Ballroom",
//   "Mrs. Peacock": "Ballroom",
//   "Prof. Plum": "Ballroom",
//   "Candlestick": "Ballroom",
//   "Knife": "Ballroom",
//   "Pipe": "Ballroom",
//   "Revolver": "Ballroom",
//   "Rope": "Ballroom",
//   "Wrench": "Ballroom"
// };

// var allConservatoryBoard = {
//   "Ms. Scarlet": "Conservatory",
//   "Col. Mustard": "Conservatory",
//   "Mrs. White": "Conservatory",
//   "Mr. Green": "Conservatory",
//   "Mrs. Peacock": "Conservatory",
//   "Prof. Plum": "Conservatory",
//   "Candlestick": "Conservatory",
//   "Knife": "Conservatory",
//   "Pipe": "Conservatory",
//   "Revolver": "Conservatory",
//   "Rope": "Conservatory",
//   "Wrench": "Conservatory"
// };

// var allDiningRoomBoard = {
//   "Ms. Scarlet": "Dining room",
//   "Col. Mustard": "Dining room",
//   "Mrs. White": "Dining room",
//   "Mr. Green": "Dining room",
//   "Mrs. Peacock": "Dining room",
//   "Prof. Plum": "Dining room",
//   "Candlestick": "Dining room",
//   "Knife": "Dining room",
//   "Pipe": "Dining room",
//   "Revolver": "Dining room",
//   "Rope": "Dining room",
//   "Wrench": "Dining room"
// };

// var allBilliardRoomBoard = {
//   "Ms. Scarlet": "Billiard room",
//   "Col. Mustard": "Billiard room",
//   "Mrs. White": "Billiard room",
//   "Mr. Green": "Billiard room",
//   "Mrs. Peacock": "Billiard room",
//   "Prof. Plum": "Billiard room",
//   "Candlestick": "Billiard room",
//   "Knife": "Billiard room",
//   "Pipe": "Billiard room",
//   "Revolver": "Billiard room",
//   "Rope": "Billiard room",
//   "Wrench": "Billiard room"
// };

// var allLibraryBoard = {
//   "Ms. Scarlet": "Library",
//   "Col. Mustard": "Library",
//   "Mrs. White": "Library",
//   "Mr. Green": "Library",
//   "Mrs. Peacock": "Library",
//   "Prof. Plum": "Library",
//   "Candlestick": "Library",
//   "Knife": "Library",
//   "Pipe": "Library",
//   "Revolver": "Library",
//   "Rope": "Library",
//   "Wrench": "Library"
// };

// var allLoungeBoard = {
//   "Ms. Scarlet": "Lounge",
//   "Col. Mustard": "Lounge",
//   "Mrs. White": "Lounge",
//   "Mr. Green": "Lounge",
//   "Mrs. Peacock": "Lounge",
//   "Prof. Plum": "Lounge",
//   "Candlestick": "Lounge",
//   "Knife": "Lounge",
//   "Pipe": "Lounge",
//   "Revolver": "Lounge",
//   "Rope": "Lounge",
//   "Wrench": "Lounge"
// };

// var allHallBoard = {
//   "Ms. Scarlet": "Hall",
//   "Col. Mustard": "Hall",
//   "Mrs. White": "Hall",
//   "Mr. Green": "Hall",
//   "Mrs. Peacock": "Hall",
//   "Prof. Plum": "Hall",
//   "Candlestick": "Hall",
//   "Knife": "Hall",
//   "Pipe": "Hall",
//   "Revolver": "Hall",
//   "Rope": "Hall",
//   "Wrench": "Hall"
// };

// var allStudyBoard = {
//   "Ms. Scarlet": "Study",
//   "Col. Mustard": "Study",
//   "Mrs. White": "Study",
//   "Mr. Green": "Study",
//   "Mrs. Peacock": "Study",
//   "Prof. Plum": "Study",
//   "Candlestick": "Study",
//   "Knife": "Study",
//   "Pipe": "Study",
//   "Revolver": "Study",
//   "Rope": "Study",
//   "Wrench": "Study"
// };


// function transformToken(token, room, offsetX, offsetY) {
//     var baseX = 0;
//     var baseY = 0;

//     if (room == "Kitchen") {
//         baseX = 12;
//         baseY = 12;
//     } else if (room == "Ballroom") {
//         baseX = 6;
//         baseY = 12;
//     } else if (room == "Conservatory") {
//         baseX = 0;
//         baseY = 12;
//     } else if (room == "Dining room") {
//         baseX = 12;
//         baseY = 6;
//     } else if (room == "Billiard room") {
//         baseX = 6;
//         baseY = 6;
//     } else if (room == "Library") {
//         baseX = 0;
//         baseY = 6;
//     } else if (room == "Lounge") {
//         baseX = 12;
//         baseY = 0;
//     } else if (room == "Hall") {
//         baseX = 6;
//         baseY = 0;
//     } else if (room == "Study") {
//         baseX = 0;
//         baseY = 0;
//     } else if (room == "Scarlet start") {
//         baseX = 11;
//         baseY = 1;
//     } else if (room == "Mustard start") {
//         baseX = 15;
//         baseY = 5;
//     } else if (room == "White start") {
//         baseX = 11;
//         baseY = 15;
//     } else if (room == "Green start") {
//         baseX = 5;
//         baseY = 15;
//     } else if (room == "Peacock start") {
//         baseX = 1;
//         baseY = 11;
//     } else if (room == "Plum start") {
//         baseX = 1;
//         baseY = 5;
//     } else if (room == "Hall-Study") {
//         baseX = 5;
//         baseY = 2;
//     } else if (room == "Hall-Lounge") {
//         baseX = 11;
//         baseY = 2;
//     } else if (room == "Library-Study") {
//         baseX = 2;
//         baseY = 5;
//     } else if (room == "Billiard room-Hall") {
//         baseX = 8;
//         baseY = 5;
//     } else if (room == "Dining room-Lounge") {
//         baseX = 14;
//         baseY = 5;
//     } else if (room == "Billiard room-Library") {
//         baseX = 5;
//         baseY = 8;
//     } else if (room == "Billiard room-Dining room") {
//         baseX = 11;
//         baseY = 8;
//     } else if (room == "Conservatory-Library") {
//         baseX = 2;
//         baseY = 11;
//     } else if (room == "Ballroom-Billiard room") {
//         baseX = 8;
//         baseY = 11;
//     } else if (room == "Dining room-Kitchen") {
//         baseX = 14;
//         baseY = 11;
//     } else if (room == "Ballroom-Conservatory") {
//         baseX = 5;
//         baseY = 14;
//     } else if (room == "Ballroom-Kitchen") {
//         baseX = 11;
//         baseY = 14;
//     }

//     var x = baseX + offsetX;
//     var y = baseY + offsetY;

//     token.style["transform"] = "translate(" + x*30 + "px, " + y*30 + "px)";
// }

// function setMsScarlet(room) {
//     console.log(room);
//     var token = id("msScarletToken");
//     console.log(token);
//     if (room == "Scarlet start") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Kitchen") {
//         transformToken(token, room, 2, 0);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 2, 0);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 2, 0);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 2, 0);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 2, 0);
//     } else if (room == "Library") {
//         transformToken(token, room, 2, 0);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 2, 1);
//     } else if (room == "Hall") {
//         transformToken(token, room, 2, 0);
//     } else if (room == "Study") {
//         transformToken(token, room, 2, 0);
//     } else if (room == "Hall-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Hall-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Library-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Hall") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Dining room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Conservatory-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Billiard room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Kitchen") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Conservatory") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Kitchen") {
//         transformToken(token, room, 0, 0);
//     }
// }

// function setColMustard(room) {
//     var token = id("colMustardToken");
//     if (room == "Mustard start") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Kitchen") {
//         transformToken(token, room, 1, 3);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 1, 3);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 1, 3);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 1, 3);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 1, 3);
//     } else if (room == "Library") {
//         transformToken(token, room, 1, 3);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 0, 3);
//     } else if (room == "Hall") {
//         transformToken(token, room, 1, 3);
//     } else if (room == "Study") {
//         transformToken(token, room, 1, 3);
//     } else if (room == "Hall-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Hall-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Library-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Hall") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Dining room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Conservatory-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Billiard room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Kitchen") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Conservatory") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Kitchen") {
//         transformToken(token, room, 0, 0);
//     }
// }

// function setMrsWhite(room) {
//     var token = id("mrsWhiteToken");
//     if (room == "White start") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Kitchen") {
//         transformToken(token, room, 0, 2);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 0, 2);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 1, 1);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 2, 4);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 0, 2);
//     } else if (room == "Library") {
//         transformToken(token, room, 0, 2);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 0, 2);
//     } else if (room == "Hall") {
//         transformToken(token, room, 0, 2);
//     } else if (room == "Study") {
//         transformToken(token, room, 1, 1);
//     } else if (room == "Hall-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Hall-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Library-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Hall") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Dining room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Conservatory-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Billiard room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Kitchen") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Conservatory") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Kitchen") {
//         transformToken(token, room, 0, 0);
//     }
// }

// function setMrGreen(room) {
//     var token = id("mrGreenToken");
//     if (room == "Green start") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Kitchen") {
//         transformToken(token, room, 1, 4);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 1, 4);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 1, 4);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 0, 3);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 1, 4);
//     } else if (room == "Library") {
//         transformToken(token, room, 0, 3);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 1, 4);
//     } else if (room == "Hall") {
//         transformToken(token, room, 0, 3);
//     } else if (room == "Study") {
//         transformToken(token, room, 1, 4);
//     } else if (room == "Hall-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Hall-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Library-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Hall") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Dining room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Conservatory-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Billiard room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Kitchen") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Conservatory") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Kitchen") {
//         transformToken(token, room, 0, 0);
//     }
// }

// function setMrsPeacock(room) {
//     var token = id("mrsPeacockToken");
//     if (room == "Peacock start") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Kitchen") {
//         transformToken(token, room, 1, 2);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 1, 1);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 2, 3);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 0, 1);
//     } else if (room == "Library") {
//         transformToken(token, room, 1, 2);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 0, 4);
//     } else if (room == "Hall") {
//         transformToken(token, room, 1, 2);
//     } else if (room == "Study") {
//         transformToken(token, room, 1, 2);
//     } else if (room == "Hall-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Hall-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Library-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Hall") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Dining room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Conservatory-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Billiard room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Kitchen") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Conservatory") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Kitchen") {
//         transformToken(token, room, 0, 0);
//     }
// }

// function setProfPlum(room) {
//     var token = id("profPlumToken");
//     if (room == "Plum start") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Kitchen") {
//         transformToken(token, room, 2, 1);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 2, 1);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 2, 1);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 0, 1);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 1, 1);
//     } else if (room == "Library") {
//         transformToken(token, room, 2, 1);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 0, 1);
//     } else if (room == "Hall") {
//         transformToken(token, room, 2, 1);
//     } else if (room == "Study") {
//         transformToken(token, room, 2, 1);
//     } else if (room == "Hall-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Hall-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Library-Study") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Hall") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Lounge") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Billiard room-Dining room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Conservatory-Library") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Billiard room") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room-Kitchen") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Conservatory") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Ballroom-Kitchen") {
//         transformToken(token, room, 0, 0);
//     }
// }

// function setCandlestick(room) {
//     var token = id("candlestickToken");
//     if (room == "Kitchen") {
//         transformToken(token, room, 3, 2);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 3, 0);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 0, 0);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 4, 0);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 4, 0);
//     } else if (room == "Library") {
//         transformToken(token, room, 2, 4);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 3, 3);
//     } else if (room == "Hall") {
//         transformToken(token, room, 3, 2);
//     } else if (room == "Study") {
//         transformToken(token, room, 2, 4);
//     }
// }

// function setKnife(room) {
//     var token = id("knifeToken");
//     if (room == "Kitchen") {
//         transformToken(token, room, 4, 2);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 4, 2);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 4, 2);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 4, 2);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 4, 2);
//     } else if (room == "Library") {
//         transformToken(token, room, 4, 2);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 4, 2);
//     } else if (room == "Hall") {
//         transformToken(token, room, 4, 2);
//     } else if (room == "Study") {
//         transformToken(token, room, 4, 2);
//     }
// }

// function setPipe(room) {
//     var token = id("pipeToken");
//     if (room == "Kitchen") {
//         transformToken(token, room, 4, 4);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 4, 4);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 4, 1);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 4, 3);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 4, 4);
//     } else if (room == "Library") {
//         transformToken(token, room, 3, 2);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 4, 4);
//     } else if (room == "Hall") {
//         transformToken(token, room, 4, 3);
//     } else if (room == "Study") {
//         transformToken(token, room, 4, 1);
//     }
// }

// function setRevolver(room) {
//     var token = id("revolverToken");
//     if (room == "Kitchen") {
//         transformToken(token, room, 3, 1);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 2, 4);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 3, 1);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 3, 0);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 3, 0);
//     } else if (room == "Library") {
//         transformToken(token, room, 4, 3);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 3, 0);
//     } else if (room == "Hall") {
//         transformToken(token, room, 3, 1);
//     } else if (room == "Study") {
//         transformToken(token, room, 3, 1);
//     }
// }

// function setRope(room) {
//     var token = id("ropeToken");
//     if (room == "Kitchen") {
//         transformToken(token, room, 2, 3);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 2, 3);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 2, 4);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 2, 3);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 2, 4);
//     } else if (room == "Library") {
//         transformToken(token, room, 3, 1);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 2, 4);
//     } else if (room == "Hall") {
//         transformToken(token, room, 2, 3);
//     } else if (room == "Study") {
//         transformToken(token, room, 2, 3);
//     }
// }

// function setWrench(room) {
//     var token = id("wrenchToken");
//     if (room == "Kitchen") {
//         transformToken(token, room, 3, 3);
//     } else if (room == "Ballroom") {
//         transformToken(token, room, 3, 1);
//     } else if (room == "Conservatory") {
//         transformToken(token, room, 3, 3);
//     } else if (room == "Dining room") {
//         transformToken(token, room, 3, 3);
//     } else if (room == "Billiard room") {
//         transformToken(token, room, 3, 4);
//     } else if (room == "Library") {
//         transformToken(token, room, 3, 3);
//     } else if (room == "Lounge") {
//         transformToken(token, room, 3, 4);
//     } else if (room == "Hall") {
//         transformToken(token, room, 3, 3);
//     } else if (room == "Study") {
//         transformToken(token, room, 3, 3);
//     }
// }

// function setBoard(board) {
//     setMsScarlet(board["Ms. Scarlet"]);
//     setColMustard(board["Col. Mustard"]);
//     setMrsWhite(board["Mrs. White"]);
//     setMrGreen(board["Mr. Green"]);
//     setMrsPeacock(board["Mrs. Peacock"]);
//     setProfPlum(board["Prof. Plum"]);
//     setCandlestick(board["Candlestick"]);
//     setKnife(board["Knife"]);
//     setPipe(board["Pipe"]);
//     setRevolver(board["Revolver"]);
//     setRope(board["Rope"]);
//     setWrench(board["Wrench"]);
// }

// function highlightCharacter(character) {
//     var highlight = id("characterHighlight");
//     if (character == "Ms. Scarlet") {
//         highlight.style["transform"] = id("msScarletToken").style["transform"];
//         highlight.className = "token-highlight";
//     } else if (character == "Col. Mustard") {
//         highlight.style["transform"] = id("colMustardToken").style["transform"];
//         highlight.className = "token-highlight";
//     } else if (character == "Mrs. White") {
//         highlight.style["transform"] = id("mrsWhiteToken").style["transform"];
//         highlight.className = "token-highlight";
//     } else if (character == "Mr. Green") {
//         highlight.style["transform"] = id("mrGreenToken").style["transform"];
//         highlight.className = "token-highlight";
//     } else if (character == "Mrs. Peacock") {
//         highlight.style["transform"] = id("mrsPeacockToken").style["transform"];
//         highlight.className = "token-highlight";
//     } else if (character == "Prof. Plum") {
//         highlight.style["transform"] = id("profPlumToken").style["transform"];
//         highlight.className = "token-highlight";
//     } else {
//         highlight.className = "token-highlight hidden";
//     }
// }

// function id(id) {
//     return document.getElementById(id);
// }

// setBoard(startBoard);


// function setSuccessMsg(msg) {
//     $("#notificationArea").html(
//     "<div class=\"alert alert-success alert-dismissible\">\n" +
//     "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">&times;</button>\n" +
//     msg + "\n" +
//     "</div>\n"
//     );
// }

// function setErrorMsg(msg) {
//     $("#notificationArea").html(
//     "<div class=\"alert alert-danger alert-dismissible\">\n" +
//     "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">&times;</button>\n" +
//     msg + "\n" +
//     "</div>\n"
//     );
// }

// function setStatusMessage(msg) {
//     $("#status-message").html(msg);
// }

// function setMove(moveList) {
//     var moveSelect = $("#moveModalBody .form-control");
//     moveSelect.html("");
//     for (var i = 0; i < moveList.length; i++) {
//         moveSelect.append($('<option>', {
//             text: moveList[i]
//         }));
//     }
// }

// function setDisproveCards(cardList) {
//     var cardSelect = $("#disproveSuggestionModalBody .form-control");
//     cardSelect.html("");
//     for (var i = 0; i < cardList.length; i++) {
//         cardSelect.append($('<option>', {
//             text: cardList[i]
//         }));
//     }
// }

// function setActions(actions, status) {
//     // TODO: actions from WebSocket
//     if (status == "SETUP") {
//         $("#clue-actions .setup-phase").removeClass("hidden");
//         $("#clue-actions .active-phase").addClass("hidden");
//     } else if (status == "ACTIVE" || status == "ACTIVE_SUGGESTION") {
//         $("#clue-actions .setup-phase").addClass("hidden");
//         $("#clue-actions .active-phase").removeClass("hidden");
//     }

//     if ("AddPlayer" in actions) {
//         $("#addPlayerBtn").prop("disabled", false);
//     } else {
//         $("#addPlayerBtn").prop("disabled", true);
//     }

//     if ("SetToken" in actions) {
//         $("#setTokenBtn").prop("disabled", false);
//         var setTokenArr = actions["SetToken"];
//         if (setTokenArr.indexOf("Ms. Scarlet") >= 0) {
//             $("#setTokenModalBody option")[0].disabled = false;
//         } else {
//             $("#setTokenModalBody option")[0].disabled = true;
//         }

//         if (setTokenArr.indexOf("Col. Mustard") >= 0) {
//             $("#setTokenModalBody option")[1].disabled = false;
//         } else {
//             $("#setTokenModalBody option")[1].disabled=true;
//         }

//         if (setTokenArr.indexOf("Mrs. White") >= 0) {
//             $("#setTokenModalBody option")[2].disabled = false;
//         } else {
//             $("#setTokenModalBody option")[2].disabled=true;
//         }

//         if (setTokenArr.indexOf("Mr. Green") >= 0) {
//             $("#setTokenModalBody option")[3].disabled = false;
//         } else {
//             $("#setTokenModalBody option")[3].disabled=true;
//         }

//         if (setTokenArr.indexOf("Mrs. Peacock") >= 0) {
//             $("#setTokenModalBody option")[4].disabled = false;
//         } else {
//             $("#setTokenModalBody option")[4].disabled=true;
//         }

//         if (setTokenArr.indexOf("Prof. Plum") >= 0) {
//             $("#setTokenModalBody option")[5].disabled = false;
//         } else {
//             $("#setTokenModalBody option")[5].disabled=true;
//         }
//     } else {
//         $("#setTokenBtn").prop("disabled", true);
//     }

//     if ("StartGame" in actions) {
//         $("#startGameBtn").prop("disabled", false);
//     } else {
//         $("#startGameBtn").prop("disabled", true);
//     }


//     if ("Move" in actions) {
//         $("#moveBtn").prop("disabled", false);
//         setMove(actions["Move"]);
//     } else {
//         $("#moveBtn").prop("disabled", true);
//     }

//     if ("MakeSuggestion" in actions) {
//         $("#makeSuggestionBtn").prop("disabled", false);
//     } else {
//         $("#makeSuggestionBtn").prop("disabled", true);
//     }

//     if ("DisproveSuggestion" in actions) {
//         $("#disproveSuggestionBtn").prop("disabled", false);
//         setDisproveCards(actions["DisproveSuggestion"]);
//     } else {
//         $("#disproveSuggestionBtn").prop("disabled", true);
//     }

//     if ("MakeAccusation" in actions) {
//         $("#makeAccusationBtn").prop("disabled", false);
//     } else {
//         $("#makeAccusationBtn").prop("disabled", true);
//     }

//     if ("EndTurn" in actions) {
//         $("#endTurnBtn").prop("disabled", false);
//     } else {
//         $("#endTurnBtn").prop("disabled", true);
//     }



// }

// // ACTIONs onClick
// $( "#addPlayerBtn" ).click(function( event ) {
//     $.post("/game/join", JSON.stringify({"api":null}), function(data) {
//         var responseData = JSON.parse(data);
//         var msg = responseData.msg;
//         if (msg != "") {
//             // TODO: might get success message when coming from Websocket...
//             setSuccessMsg(msg);
//         } else {
//             setSuccessMsg("Successfully joined game");
//         }
//     }).fail( function(data) {
//         var responseData = JSON.parse(data.responseText);
//         var msg = responseData.msg;
//         if (msg != "") {
//             setErrorMsg(msg);
//         } else {
//             setErrorMsg("Internal server error when joining game");
//         }
//     });
//     event.preventDefault();
// });

// $( "#setTokenModalOk" ).click(function(event) {
//     var who = $("#setTokenModalBody").find(':selected').text();
//     $.post("/game/token", JSON.stringify({"api":null, "who": who}), function(data) {
//         var responseData = JSON.parse(data);
//         var msg = responseData.msg;
//         if (msg != "") {
//             // TODO: might get success message when coming from Websocket...
//             setSuccessMsg(msg);
//         } else {
//             setSuccessMsg("Successfully set token.");
//         }
//     }).fail( function(data) {
//         var responseData = JSON.parse(data.responseText);
//         var msg = responseData.msg;
//         if (msg != "") {
//             setErrorMsg(msg);
//         } else {
//             setErrorMsg("Internal server error when setting token.");
//         }
//     });
// });

// $( "#moveModalOk" ).click(function(event) {
//     var moveTo = $("#moveModalBody").find(':selected').text();
//     $.post("/game/move", JSON.stringify({"api":null, "to": moveTo}), function(data) {
//         var responseData = JSON.parse(data);
//         var msg = responseData.msg;
//         if (msg != "") {
//             // TODO: might get success message when coming from Websocket...
//             setSuccessMsg(msg);
//         } else {
//             setSuccessMsg("Successfully set token.");
//         }
//     }).fail( function(data) {
//         var responseData = JSON.parse(data.responseText);
//         var msg = responseData.msg;
//         if (msg != "") {
//             setErrorMsg(msg);
//         } else {
//             setErrorMsg("Internal server error when setting token.");
//         }
//     });
// });

// $( "#makeSuggestionModalOk" ).click(function(event) {
//     var character = $("#makeSuggestionModalBody .character-list").find(':selected').text();
//     var weapon = $("#makeSuggestionModalBody .weapon-list").find(':selected').text();
//     $.post("/game/suggest", JSON.stringify({"api":null, "character": character, "weapon": weapon}), function(data) {
//         var responseData = JSON.parse(data);
//         var msg = responseData.msg;
//         if (msg != "") {
//             // TODO: might get success message when coming from Websocket...
//             setSuccessMsg(msg);
//         } else {
//             setSuccessMsg("Successfully set token.");
//         }
//     }).fail( function(data) {
//         var responseData = JSON.parse(data.responseText);
//         var msg = responseData.msg;
//         if (msg != "") {
//             setErrorMsg(msg);
//         } else {
//             setErrorMsg("Internal server error when setting token.");
//         }
//     });
// });


// $( "#disproveSuggestionModalOk" ).click(function(event) {
//     var card = $("#disproveSuggestionModalBody").find(':selected').text();
//     $.post("/game/disprove", JSON.stringify({"api":null, "card": card}), function(data) {
//         var responseData = JSON.parse(data);
//         var msg = responseData.msg;
//         if (msg != "") {
//             // TODO: might get success message when coming from Websocket...
//             setSuccessMsg(msg);
//         } else {
//             setSuccessMsg("Successfully set token.");
//         }
//     }).fail( function(data) {
//         var responseData = JSON.parse(data.responseText);
//         var msg = responseData.msg;
//         if (msg != "") {
//             setErrorMsg(msg);
//         } else {
//             setErrorMsg("Internal server error when setting token.");
//         }
//     });
// });

// $( "#makeAccusationModalOk" ).click(function(event) {
//     var character = $("#makeAccusationModalBody .character-list").find(':selected').text();
//     var weapon = $("#makeAccusationModalBody .weapon-list").find(':selected').text();
//     var room = $("#makeAccusationModalBody .room-list").find(':selected').text();
//     $.post("/game/accuse", JSON.stringify({"api":null, "character": character, "weapon": weapon, "room": room}), function(data) {
//         var responseData = JSON.parse(data);
//         var msg = responseData.msg;
//         if (msg != "") {
//             // TODO: might get success message when coming from Websocket...
//             setSuccessMsg(msg);
//         } else {
//             setSuccessMsg("Successfully set token.");
//         }
//     }).fail( function(data) {
//         var responseData = JSON.parse(data.responseText);
//         var msg = responseData.msg;
//         if (msg != "") {
//             setErrorMsg(msg);
//         } else {
//             setErrorMsg("Internal server error when setting token.");
//         }
//     });
// });

// $( "#startGameBtn" ).click(function( event ) {
//     $.post("/game/start", JSON.stringify({"api":null}), function(data) {
//         var responseData = JSON.parse(data);
//         var msg = responseData.msg;
//         if (msg != "") {
//             // TODO: might get success message when coming from Websocket...
//             setSuccessMsg(msg);
//         } else {
//             setSuccessMsg("Successfully joined game.");
//         }
//     }).fail( function(data) {
//         var responseData = JSON.parse(data.responseText);
//         var msg = responseData.msg;
//         if (msg != "") {
//             setErrorMsg(msg);
//         } else {
//             setErrorMsg("Internal server error when joining game.");
//         }
//     });
// });

// $( "#endTurnBtn" ).click(function( event ) {
//     $.post("/game/endturn", JSON.stringify({"api":null}), function(data) {
//         var responseData = JSON.parse(data);
//         var msg = responseData.msg;
//         if (msg != "") {
//             // TODO: might get success message when coming from Websocket...
//             setSuccessMsg(msg);
//         } else {
//             setSuccessMsg("Successfully joined game.");
//         }
//     }).fail( function(data) {
//         var responseData = JSON.parse(data.responseText);
//         var msg = responseData.msg;
//         if (msg != "") {
//             setErrorMsg(msg);
//         } else {
//             setErrorMsg("Internal server error when joining game.");
//         }
//     });
// });

// function setHand(hand) {
//     console.log(hand);
//     // TODO: hand of dealt cards from WebSocket
//     $("#handModalBody img").addClass("hidden");
//     for (var i = 0; i < hand.length; i++) {
//         var thisCard = hand[i];
//         if (thisCard == "Ms. Scarlet") {
//             $("#msScarletCard").removeClass("hidden");
//         } else if (thisCard == "Col. Mustard") {
//             $("#colMustardCard").removeClass("hidden");
//         } else if (thisCard == "Mrs. White") {
//             $("#mrsWhiteCard").removeClass("hidden");
//         } else if (thisCard == "Mr. Green") {
//             $("#mrGreenCard").removeClass("hidden");
//         } else if (thisCard == "Mrs. Peacock") {
//             $("#mrsPeacockCard").removeClass("hidden");
//         } else if (thisCard == "Prof. Plum") {
//             $("#profPlumCard").removeClass("hidden");
//         } else if (thisCard == "Candlestick") {
//             $("#candlestickCard").removeClass("hidden");
//         } else if (thisCard == "Knife") {
//             $("#knifeCard").removeClass("hidden");
//         } else if (thisCard == "Pipe") {
//             $("#pipeCard").removeClass("hidden");
//         } else if (thisCard == "Revolver") {
//             $("#revolverCard").removeClass("hidden");
//         } else if (thisCard == "Rope") {
//             $("#ropeCard").removeClass("hidden");
//         } else if (thisCard == "Wrench") {
//             $("#wrenchCard").removeClass("hidden");
//         } else if (thisCard == "Kitchen") {
//             $("#kitchenCard").removeClass("hidden");
//         } else if (thisCard == "Ballroom") {
//             $("#ballroomCard").removeClass("hidden");
//         } else if (thisCard == "Conservatory") {
//             $("#conservatoryCard").removeClass("hidden");
//         } else if (thisCard == "Dining room") {
//             $("#diningRoomCard").removeClass("hidden");
//         } else if (thisCard == "Billiard room") {
//             $("#billiardRoomCard").removeClass("hidden");
//         } else if (thisCard == "Library") {
//             $("#libraryCard").removeClass("hidden");
//         } else if (thisCard == "Lounge") {
//             $("#loungeCard").removeClass("hidden");
//         } else if (thisCard == "Hall") {
//             $("#hallCard").removeClass("hidden");
//         } else if (thisCard == "Study") {
//             $("#studyCard").removeClass("hidden");
//         }
//     }

//     if (hand.length == 0) {
//         $("#handModalBody span").text("You do not have any cards.");
//     } else {
//         $("#handModalBody span").text("");
//     }
// }

// function setCharacter(character) {
//     if (character != "") {
//         $("#clue-character").html("Your character: " + character);
//     } else {
//         $("#clue-character").html("");
//     }
// }

// function setNotification(msg) {
//     setSuccessMsg(msg);
// }

// // CHAT!!!

// //Update the chat-panel, and the list of connected users
// function updateChat(data) {
//     insert("chat", data.usermessage);
//     id("userlist").innerHTML = "";
//     data.userlist.forEach(function (user) {
//         insert("userlist", "<li>" + user + "</li>");
//     });
// }

// //Helper function for inserting HTML as the first child of an element
// function insert(targetId, message) {
//     id(targetId).insertAdjacentHTML("afterbegin", message);
// }

// function updateGame(json) {
//     setBoard(json["board"]);
//     highlightCharacter(json["statusWho"]);
//     setActions(json["action"], json["status"]);
//     setStatusMessage(json["statusMessage"]);
//     if (json["notification"] != "") {
//         setNotification(json["notification"]);
//     }
//     setHand(json["yourHand"]);
//     setCharacter(json["yourCharacter"]);
// }


