import { createClient } from "@supabase/supabase-js"
import type { NextApiRequest, NextApiResponse } from "next"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email_id } = req.body

    if (!email_id) {
      return res.status(400).json({ error: "Email ID is required" })
    }

    const { error } = await supabase.from("init_users").insert([{ email_id }])
    
    if (error) {
      return res.status(500).json({ error: "An error occurred while creating the user" })
    }

    return res.status(200).json({ message: "User created successfully", data: { success: 'OK' } })
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
