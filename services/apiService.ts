export const verifyPasskey = async (passkey: string) => {
  const response = await fetch("/api/verify-passkey", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ passkey }),
  })

  return response.json()
}

export const createUser = async (email_id: string) => {
  const response = await fetch("/api/new-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email_id }),
  })

  return response.json()
}
