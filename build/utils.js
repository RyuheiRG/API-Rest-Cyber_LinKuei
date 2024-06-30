"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseDialogo = (dialogoFromRequest) => {
    if (!isString(dialogoFromRequest)) {
        throw new Error('Incorrect or missing dialogo');
    }
    return dialogoFromRequest;
};
const parseAlias = (aliasFromRequest) => {
    if (!isString(aliasFromRequest)) {
        throw new Error('Incorrect or missing alias');
    }
    return aliasFromRequest;
};
const parseAfiliaciones = (afiliacionesFromRequest) => {
    if (!isAfiliaciones(afiliacionesFromRequest) || !isString(afiliacionesFromRequest)) {
        throw new Error('Incorrect or missing afiliaciones');
    }
    return afiliacionesFromRequest;
};
const parseHistoria = (historiaFromRequest) => {
    if (!isString(historiaFromRequest)) {
        throw new Error('Incorrect or missing historia');
    }
    return historiaFromRequest;
};
const parseNombre = (nombreFromRequest) => {
    if (!isString(nombreFromRequest)) {
        throw new Error('incrrect or missing nombre');
    }
    return nombreFromRequest;
};
const parseHabilidades = (habilidadesFromRequest) => {
    if (!isString(habilidadesFromRequest)) {
        throw new Error('incrrect or missing nombre');
    }
    return habilidadesFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
const isAfiliaciones = (params) => {
    return Object.values(types_1.Afiliaciones).includes(params);
};
const toNewCyberEntry = (object) => {
    const newEntry = {
        nombre: parseNombre(object.nombre),
        alias: parseAlias(object.alias),
        habilidades: parseHabilidades(object.habilidades),
        historia: parseHistoria(object.historia),
        afiliaciones: parseAfiliaciones(object.afiliaciones),
        dialogo: parseDialogo(object.dialogo)
    };
    return newEntry;
};
exports.default = toNewCyberEntry;
