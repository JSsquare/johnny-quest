import { NextApiRequest, NextApiResponse } from "next"

export const handleError = (res: NextApiResponse, error: any, message: string) => {
  console.error(error)
  res.status(500).json({ error: message })
}

export const validateMethod = (req: NextApiRequest, res: NextApiResponse, method: string) => {
  if (req.method !== method) {
    res.setHeader("Allow", [method])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return false
  }
  return true
}
