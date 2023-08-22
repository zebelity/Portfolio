import express from 'express'
import { Greeting } from '../shared/types'

const router = express.Router()

router.get('/', (_req, res) => {
  const response: Greeting = {
    message: "I looked back to my engineering roots, something I always had a keen interest in growing up."
  }

  res.json(response)
})

export const greetingRouter = router
