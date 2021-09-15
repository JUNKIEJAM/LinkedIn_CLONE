"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.db = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyBRmcCHvLDg-Uu3RX7ACkAnSuYWwAdln8E",
  authDomain: "linkedin-clone-yt-58576.firebaseapp.com",
  projectId: "linkedin-clone-yt-58576",
  storageBucket: "linkedin-clone-yt-58576.appspot.com",
  messagingSenderId: "113159401879",
  appId: "1:113159401879:web:3542cd8c5010ce09cdd4d2"
};

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var db = _firebase["default"].firestore();

exports.db = db;

var auth = _firebase["default"].auth();

exports.auth = auth;