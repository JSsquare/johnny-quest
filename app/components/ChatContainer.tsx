'use client'
import { Button, HStack, Input, Skeleton, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { CityPills } from './CityPills'
import { DESIGN_COLORS } from '../constants'

const ChatContainer = () => {
  const [inputText, setInputText] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [chatHistory, setChatHistory] = useState<string[]>([])

  const handleAskMessage = async () => {
    if (inputText.length) {
      setChatHistory((prevChatHistory) => [...prevChatHistory, inputText])
      setInputText('')
      try {
        setIsFetching(true)
        const response = await fetch('/api/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: inputText }),
        })
        const data = await response.json()
        setChatHistory((prevChatHistory) => [...prevChatHistory, data.message])
        setIsFetching(false)
      } catch (e) {
        console.log(e)
      }
    }
  }

  const setInputMessage = (message: string) => {
    setInputText(message)
  }

  return (
    <Stack align="center" mt={32}>
      <CityPills setInputMessage={setInputMessage} />
      <Stack className="lg:w-3/4">
        {chatHistory.map((message, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
            <Text fontSize="xl">{message}</Text>
          </div>
        ))}
        {isFetching && (
          <Skeleton
            startColor={DESIGN_COLORS.PRIMARY}
            endColor={DESIGN_COLORS.SUBTLE}
            height="60px"
            className="mb-4 p4"
          />
        )}
        <HStack spacing={4} className="mt-24">
          <Input
            variant="outline"
            type="text"
            placeholder="Ask Johnny for Recommendations...."
            value={inputText}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAskMessage()
              }
            }}
          />
          <Button
            colorScheme={DESIGN_COLORS.PRIMARY}
            onClick={() => handleAskMessage()}
            isLoading={isFetching}
          >
            Ask Johnny
          </Button>
        </HStack>
      </Stack>
    </Stack>
  )
}

export default ChatContainer
