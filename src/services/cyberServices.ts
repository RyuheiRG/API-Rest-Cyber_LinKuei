import { CyberEntry, NewCyberEntry, NonSensitiveInfoCyberEntry } from '../types'
import cyberData from './cybers.json'

const cybers: CyberEntry[] = cyberData as CyberEntry[]

export const getEntries = (): CyberEntry[] => cybers

export const findById = (id: number): CyberEntry | undefined => {
  const entry = cybers.find(d => d.id === id)
  return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoCyberEntry[] => {
  return cybers.map(({ id, nombre, alias, habilidades, historia, afiliaciones }) => {
    return {
      id,
      nombre,
      alias,
      habilidades,
      historia,
      afiliaciones
    }
  })
}

export const addCyber = (newCyberEntry: NewCyberEntry): CyberEntry => {
  const newCyber = {
    id: Math.max(...cybers.map(c => c.id)) + 1,
    ...newCyberEntry
  }

  cybers.push(newCyber)
  return newCyber
}
