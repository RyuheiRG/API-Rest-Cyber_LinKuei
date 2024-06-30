import express from 'express'
import * as cyberServices from '../services/cyberServices'
import toNewCyberEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(cyberServices.getEntries())
})

router.get('/no-dialogo', (_req, res) => {
  res.send(cyberServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const cyber = cyberServices.findById(+req.params.id)

  return (cyber !== null)
    ? res.send(cyber)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newCyberEntry = toNewCyberEntry(req.body)

    const addedCyberEntry = cyberServices.addCyber(newCyberEntry)

    res.json(addedCyberEntry)
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send(error.message)
    }
  }
})

export default router
