"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LABELS_GAME = exports.DEFUAL_LABELS_HEADER = exports.LOWER_SECTION_LABELS = exports.UPPER_SECTION_LABELS = exports.CATEGORIES = exports.EItemType = exports.ETypeGame = exports.EDifficulty = exports.EDiceTheme = exports.YATZY_SCORES = exports.INITIAL_ITEM_SELECTED = exports.ROOM_SIZE_RANGE_BASE = exports.TOTAL_THROWING = exports.INTERVAL_VALUE_COUNTDOWN = exports.INTERVAL_TIME = exports.MIN_SCORE_BONUS = exports.BONUS_VALUE = exports.BASE_WIDTH = exports.BASE_HEIGHT = void 0;
exports.BASE_HEIGHT = 732;
exports.BASE_WIDTH = 412;
exports.BONUS_VALUE = 35;
exports.MIN_SCORE_BONUS = 63;
exports.INTERVAL_TIME = 1000;
exports.INTERVAL_VALUE_COUNTDOWN = 60;
exports.TOTAL_THROWING = 3;
exports.ROOM_SIZE_RANGE_BASE = 5;
exports.INITIAL_ITEM_SELECTED = {
    index: -1,
    type: "LOWER_SECTION",
};
exports.YATZY_SCORES = {
    FULLHOUSE: 25,
    LARGE_STRAIGHT: 40,
    SMALL_STRAIGHT: 30,
    YATZY: 50,
};
var EDiceTheme;
(function (EDiceTheme) {
    EDiceTheme["WHITE"] = "WHITE";
    EDiceTheme["RED"] = "RED";
})(EDiceTheme || (exports.EDiceTheme = EDiceTheme = {}));
var EDifficulty;
(function (EDifficulty) {
    EDifficulty["EASY"] = "EASY";
    EDifficulty["MEDIUM"] = "MEDIUM";
    EDifficulty["HARD"] = "HARD";
})(EDifficulty || (exports.EDifficulty = EDifficulty = {}));
var ETypeGame;
(function (ETypeGame) {
    ETypeGame["SOLO"] = "SOLO";
    ETypeGame["ONLINE"] = "ONLINE";
    ETypeGame["FRIEND"] = "FRIEND";
    ETypeGame["BOT"] = "BOT";
})(ETypeGame || (exports.ETypeGame = ETypeGame = {}));
var EDiceState;
(function (EDiceState) {
    EDiceState["HIDE"] = "HIDE";
    EDiceState["SPIN"] = "SPIN";
    EDiceState["STOPPED"] = "STOPPED";
  })(EDiceState || (exports.EDiceState = EDiceState = {}));
var ETypeButtonGame;
(function (ETypeButtonGame) {
    ETypeButtonGame["ROLL"] = "ROLL";
    ETypeButtonGame["PLAY"] = "PLAY";
  })(ETypeButtonGame || (exports.ETypeButtonGame = ETypeButtonGame = {}));
var EItemType;
(function (EItemType) {
    EItemType["UPPER_SECTION"] = "UPPER_SECTION";
    EItemType["LOWER_SECTION"] = "LOWER_SECTION";
})(EItemType || (exports.EItemType = EItemType = {}));
exports.CATEGORIES = [
    "THREE_KIND",
    "FOUR_KIND",
    "FULL_HOUSE",
    "SMALL_STRAIGHT",
    "LARGE_STRAIGHT",
    "YATZY",
    "CHANCE",
];
exports.UPPER_SECTION_LABELS = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
];
exports.LOWER_SECTION_LABELS = [
    "Three of a kind",
    "Four of a kind",
    "Full house",
    "Small straight",
    "Large straight",
    "Yatzy",
    "Chance",
];
exports.DEFUAL_LABELS_HEADER = ["Minor", "Mayor"];
exports.LABELS_GAME = {
    BOT: "Bot",
    PLAYER1: "Player 1",
    PLAYER2: "Player 2",
    THEM: "Them",
    YOU: "You",
    BONUS: "Seccion Bonus",
    ROLL: "Girar",
    PLAY: "Jugar",
    AMAZING_SCORE: "Increible Puntaje :D!",
    TIE: "Empate!",
    WON: "Felicidades! Ganaste :D !",
    LOSE: "Muy mal! Perdiste esta vez :(",
};
document.documentElement.style.setProperty("--base-height", `${exports.BASE_HEIGHT}px`);
document.documentElement.style.setProperty("--base-width", `${exports.BASE_WIDTH}px`);
