import { Afiliaciones, NewCyberEntry } from './types'

const parseDialogo = (dialogoFromRequest: any): string => {
  if (!isString(dialogoFromRequest)) {
    throw new Error('Incorrect or missing dialogo')
  }

  return dialogoFromRequest
}

const parseAlias = (aliasFromRequest: any): string => {
  if (!isString(aliasFromRequest)) {
    throw new Error('Incorrect or missing alias')
  }

  return aliasFromRequest
}

const parseAfiliaciones = (afiliacionesFromRequest: any): Afiliaciones => {
  if (!isAfiliaciones(afiliacionesFromRequest) || !isString(afiliacionesFromRequest)) {
    throw new Error('Incorrect or missing afiliaciones')
  }

  return afiliacionesFromRequest
}

const parseHistoria = (historiaFromRequest: any): string => {
  if (!isString(historiaFromRequest)) {
    throw new Error('Incorrect or missing historia')
  }

  return historiaFromRequest
}

const parseNombre = (nombreFromRequest: any): string => {
  if (!isString(nombreFromRequest)) {
    throw new Error('incrrect or missing nombre')
  }

  return nombreFromRequest
}

const parseHabilidades = (habilidadesFromRequest: any): string => {
  if (!isString(habilidadesFromRequest)) {
    throw new Error('incrrect or missing nombre')
  }

  return habilidadesFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isAfiliaciones = (params: any): boolean => {
  return Object.values(Afiliaciones).includes(params)
}

const toNewCyberEntry = (object: any): NewCyberEntry => {
  const newEntry: NewCyberEntry = {
    nombre: parseNombre(object.nombre),
    alias: parseAlias(object.alias),
    habilidades: parseHabilidades(object.habilidades),
    historia: parseHistoria(object.historia),
    afiliaciones: parseAfiliaciones(object.afiliaciones),
    dialogo: parseDialogo(object.dialogo)
  }

  return newEntry
}

export default toNewCyberEntry
