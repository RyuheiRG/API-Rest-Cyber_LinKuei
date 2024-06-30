export enum Afiliaciones {
  Lin_Kuei = 'Lin Kuei',
  Tekuinin = 'Tekuinin',
  LFE = 'Las Fuerzas Especiales',
  GMK = 'Guerrero de Mortal Kombat'
}

export interface CyberEntry {
  id: number
  nombre: string
  alias: string
  habilidades: string
  historia: string
  afiliaciones: Afiliaciones
  dialogo: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'nombre' | 'alias' | 'hablidades' | 'historia' | 'afiliaciones'>

export type NewCyberEntry = Omit<CyberEntry, 'id'>
export type NonSensitiveInfoCyberEntry = Omit<CyberEntry, 'dialogo'>
