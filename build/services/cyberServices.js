"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCyber = exports.getEntriesWithoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const cybers_json_1 = __importDefault(require("./cybers.json"));
const cybers = cybers_json_1.default;
const getEntries = () => cybers;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = cybers.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
const getEntriesWithoutSensitiveInfo = () => {
    return cybers.map(({ id, nombre, alias, habilidades, historia, afiliaciones }) => {
        return {
            id,
            nombre,
            alias,
            habilidades,
            historia,
            afiliaciones
        };
    });
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const addCyber = (newCyberEntry) => {
    const newCyber = Object.assign({ id: Math.max(...cybers.map(c => c.id)) + 1 }, newCyberEntry);
    cybers.push(newCyber);
    return newCyber;
};
exports.addCyber = addCyber;
