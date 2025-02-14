import type { NextApiRequest, NextApiResponse } from "next"
import supabase from "../../utils/supabaseClient"
import { handleError, validateMethod } from "../../utils/apiHelpers"
import { logError, logInfo } from "../../utils/logger"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!validateMethod(req, res, "POST")) return

  const { user_type, value } = req.body

  if (!user_type || !value) {
    return res.status(400).json({ error: "user_type or value required for adding new accessed user" })
  }

  try {
    const { error } = await supabase.from("accessed_users").insert([{ user_type, value }])

    if (error) {
      logError("Error creating new accessed user", error)
      return handleError(res, error, "An error occurred while creating a new accessed user")
    }

    logInfo("Accessed User created successfully")
    res.status(200).json({ message: "Accessed User created successfully", data: { success: 'OK' } })
  } catch (error) {
    logError("Unexpected error during new Accessed User creation", error)
    handleError(res, error, "An unexpected error occurred")
  }
}
