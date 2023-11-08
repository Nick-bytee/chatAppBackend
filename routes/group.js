"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth_1 = __importDefault(require("../middleware/auth"));
const group_1 = require("../controllers/group");
const group_2 = require("../controllers/group");
const group_3 = require("../controllers/group");
const group_4 = require("../controllers/group");
router.post('/createGroup', auth_1.default, group_1.createGroup);
router.get('/getGroups', auth_1.default, group_2.getGroups);
router.get('/getChat/:id', auth_1.default, group_3.getGroupChat);
router.get('/getInfo/:id', auth_1.default, group_4.getGroupInfo);
router.post('/updateGroupInfo', auth_1.default, group_1.updateGroupInfo);
router.post('/joinGroup', auth_1.default, group_1.joinGroup);
router.put('/updateGroupAdmin', auth_1.default, group_1.createAdmin);
router.delete('/removeUser', auth_1.default, group_1.removeUser);
router.post('/searchUser', auth_1.default, group_1.searchUser);
router.post('/addUser', auth_1.default, group_1.addUser);
exports.default = router;
