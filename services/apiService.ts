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
