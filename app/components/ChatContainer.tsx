'use client'
import { Button, Center, Stack } from '@chakra-ui/react'
import { SyntheticEvent, useState } from 'react'

const ChatContainer = () => {
  const [inputText, setInputText] = useState('')
  const [chatHistory, setChatHistory] = useState<string[]>([])

  const handleSubmit = () => {
    if (inputText.length)
      setChatHistory((prevChatHistory) => [...prevChatHistory, inputText])
    setInputText('')
  }

  return (
    <div className="p-4 bg-gray-200 rounded-md h-screen w-screen">
      <CityPills />

      <Stack align="center">
        {chatHistory.map((message, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg">{message}</p>
          </div>
        ))}
        <input
          className="px-4 py-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit()
            }
          }}
        />
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </Stack>
    </div>
  )
}

const CityPills = () => {
  return (
    <Stack direction="row" spacing={4} align="center" justify="center">
      <Button colorScheme="teal" variant="outline">
        San Francisco
      </Button>
      <Button colorScheme="teal" variant="outline">
        New York City
      </Button>
      <Button colorScheme="teal" variant="outline">
        Arizona
      </Button>
      <Button colorScheme="teal" variant="outline">
        Kochi, Kerala
      </Button>
      <Button colorScheme="teal" variant="outline">
        Pune, India
      </Button>
    </Stack>
  )
}

export default ChatContainer
