"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedUserController = exports.updateUserController = exports.createUserController = exports.getUserController = void 0;
const user_repository_1 = require("../repositories/user.repository");
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.userId;
    try {
        const user = yield (0, user_repository_1.getUserRepo)(userId);
        if (userId) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(200).json({ error: " user not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.getUserController = getUserController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    try {
        const success = yield (0, user_repository_1.createUserRepo)(user);
        if (success) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(200).json({ error: " user not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.createUserController = createUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = req.body;
    try {
        const success = yield (0, user_repository_1.updateUserRepo)(updatedUser.uid, updatedUser);
        if (success) {
            res.status(200).json({ data: "user updated" });
        }
        else {
            res.status(200).json({ error: " user not updated" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.updateUserController = updateUserController;
const deletedUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.query.userId;
    try {
        const success = yield (0, user_repository_1.deleteUserRepo)(userId);
        if (success) {
            res.status(200).json({ data: "user deleted" });
        }
        else {
            res.status(200).json({ error: " user not deleted" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
});
exports.deletedUserController = deletedUserController;
