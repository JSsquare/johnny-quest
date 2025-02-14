import type { NextApiRequest, NextApiResponse } from "next"
import supabase from "../../utils/supabaseClient"
import { handleError, validateMethod } from "../../utils/apiHelpers"
import { logError, logInfo } from "../../utils/logger"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!validateMethod(req, res, "POST")) return

  const { email_id } = req.body

  if (!email_id) {
    return res.status(400).json({ error: "Email ID is required" })
  }

  try {
    const { error } = await supabase.from("init_users").insert([{ email_id }])

    if (error) {
      logError("Error creating user", error)
      return handleError(res, error, "An error occurred while creating the user")
    }

    logInfo("User created successfully")
    res.status(200).json({ message: "User created successfully", data: { success: 'OK' } })
  } catch (error) {
    logError("Unexpected error during user creation", error)
    handleError(res, error, "An unexpected error occurred")
  }
}
