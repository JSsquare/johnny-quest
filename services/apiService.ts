import type { AccessedUserTypes } from "@/app/types/servicesTypes"

const apiRequest = async (url: string, method: string, body: any) => {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  return response.json()
}

export const verifyPasskey = async (passkey: string) => {
  return apiRequest("/api/verify-passkey", "POST", { passkey })
}

export const createUser = async (email_id: string) => {
  return apiRequest("/api/new-user", "POST", { email_id })
}

export const createNewAccessedUser = async (user_type: AccessedUserTypes, value: string) => {
  return apiRequest("/api/accessed-user", "POST", { user_type, value })
}
