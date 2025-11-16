import type { NextApiRequest, NextApiResponse } from "next"
import supabase from "../../utils/supabaseClient"
import { handleError, validateMethod } from "../../utils/apiHelpers"
import { logError, logInfo } from "../../utils/logger"
import { AccessedUserTypes } from "@/app/types/servicesTypes"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!validateMethod(req, res, "POST")) return

  const { user_type, value } = req.body
  const env = process.env.NODE_ENV || "production"

  if (!user_type || !value) {
    return res.status(400).json({ error: "user_type or value required for adding new accessed user" })
  }

  try {
    // check if the value (email or passkey_code) already exists
    const { data: existing, error: selectError } = await supabase
      .from("accessed_users")
      .select("id")
      .eq("value", value)
      .limit(1)

    if (selectError) {
      logError("Error checking existing accessed user", selectError)
      return handleError(res, selectError, "An error occurred while checking existing accessed user")
    }

    if (Array.isArray(existing) ? existing.length > 0 : !!existing) {
      logInfo("Accessed user already exists, skipping insert")
      return res.status(200).json({ message: "Accessed User already exists", data: { success: "OK", skipped: true } })
    }

    const { error } = await supabase.from("accessed_users").insert([{ user_type, value, env }])

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
