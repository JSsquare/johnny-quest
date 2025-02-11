import { createClient } from "@supabase/supabase-js"
import type { NextApiRequest, NextApiResponse } from "next"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { passkey } = req.body

    const { data, error } = await supabase.from("passkeys").select("passkey").eq("passkey", passkey).single()

    if (error) {
      return res.status(500).json({ error: "An error occurred while checking the passkey" })
    }

    if (data) {
      return res.status(200).json({ valid: true })
    } else {
      return res.status(200).json({ valid: false })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

