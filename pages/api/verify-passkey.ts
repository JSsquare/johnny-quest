import type { NextApiRequest, NextApiResponse } from "next"
import supabase from "../../utils/supabaseClient"
import { handleError, validateMethod } from "../../utils/apiHelpers"
import { logError, logInfo } from "../../utils/logger"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!validateMethod(req, res, "POST")) return

  const { passkey } = req.body

  try {
    const { data, error } = await supabase.from("passkeys").select("passkey").eq("passkey", passkey).maybeSingle()

    if (error) {
      logError("Error checking passkey", error)
      return handleError(res, error, "An error occurred while checking the passkey")
    }

    logInfo("Passkey verification successful")
    res.status(200).json({ valid: !!data })
  } catch (error) {
    logError("Unexpected error during passkey verification", error)
    handleError(res, error, "An unexpected error occurred")
  }
}

