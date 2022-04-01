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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStaff = exports.editStaff = exports.createStaff = exports.getOneStaff = exports.getStaff = void 0;
const Staff_1 = __importDefault(require("../models/Staff"));
const getStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield Staff_1.default.findAll({});
        if (!staff) {
            return res.status(404).send({ error: "Staff not found" });
        }
        res.status(200).json(staff);
    }
    catch (error) {
        res.json({ message: error });
    }
});
exports.getStaff = getStaff;
const getOneStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const staff = yield Staff_1.default.findByPk(id);
        if (!staff) {
            res.status(404).json({ message: "No staff with the given id!" });
        }
        res.status(200).json(staff);
    }
    catch (error) {
        res.status(400).json({ message: "Bad request!" });
    }
});
exports.getOneStaff = getOneStaff;
const createStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailExists = yield Staff_1.default.findOne({
            where: {
                email: req.body.email
            }
        });
        if (emailExists) {
            return res.status(400).json({ message: "Email already exists!" });
        }
        let info = {
            fullName: req.body.fullName,
            email: req.body.email,
            age: Number(req.body.age)
        };
        const staff = yield Staff_1.default.create(info);
        res.status(201).json(staff);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "Bad request!" });
    }
});
exports.createStaff = createStaff;
const editStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const staff = yield Staff_1.default.findByPk(id);
        if (!staff) {
            res.status(404).json({ message: "No staff with the given id!" });
        }
        else {
            yield staff.update(req.body);
        }
        res.status(200).json(staff);
    }
    catch (error) {
        res.status(400).json({ message: "Bad request!" });
    }
});
exports.editStaff = editStaff;
const deleteStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const staff = yield Staff_1.default.findByPk(id);
        if (!staff) {
            res.status(404).json({ message: "No staff with the given id!" });
        }
        else {
            yield staff.destroy();
        }
        res.status(204).json(staff);
    }
    catch (error) {
        res.status(400).json({ message: "Bad request!" });
    }
});
exports.deleteStaff = deleteStaff;
