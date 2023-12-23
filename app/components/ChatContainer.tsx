'use client'
import { Button, Input, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const ChatContainer = () => {
  const [inputText, setInputText] = useState('')
  const [chatHistory, setChatHistory] = useState<string[]>([])

  const hndleAskMessage = async () => {
    if (inputText.length) {
      setChatHistory((prevChatHistory) => [...prevChatHistory, inputText])
      setInputText('')
      try {
        const response = await fetch('/api/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputText }),
        })
        const data = await response.json()
        setChatHistory((prevChatHistory) => [...prevChatHistory, data.message])
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <div className="p-4 rounded-md h-screen w-screen justify-center justify-self-center justify-items-center">
      <CityPills />
      <Stack
        spacing={8}
        className="w-3/4 justify-center justify-self-center justify-items-center"
      >
        {chatHistory.map((message, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <Text fontSize="xl">{message}</Text>
          </div>
        ))}
        <Input
          variant="flushed"
          type="text"
          placeholder="Ask Johnny for Recommendations...."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              hndleAskMessage()
            }
          }}
        />
        <Button colorScheme="teal" onClick={() => hndleAskMessage()}>
          Ask
        </Button>
      </Stack>
    </div>
  )
}

const CityPills = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Stack direction="row" spacing={4} align="center" justify="center" mb={4}>
      <div onMouseEnter={() => setIsHovered(true)}>
        {!isHovered && (
          <Text fontSize="xl" color="#48BB78">
            I Would Like Recommendations On A City
          </Text>
        )}
      </div>

      {isHovered && (
        <Stack
          direction="row"
          spacing={6}
          onMouseLeave={() => setIsHovered(false)}
        >
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
      )}
    </Stack>
  )
}

export default ChatContainer
