'use client'
import {
  Button,
  Input,
  Show,
  Skeleton,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { CityPillMainButton } from './CityPillMainButton'
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

  const placeholderMessage = isFetching
    ? 'hmmm thinking...'
    : 'Ask Johnny for Recommendations....'

  return (
    <Stack align="center" mt={32} marginX={16}>
      <CityPillMainButton setInputMessage={setInputMessage} />
      <Stack className="lg:w-3/4">
        {chatHistory.map((message, index) => (
          <div key={index} className="bg-white rounded-md shadow-md p-5">
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
        <Stack
          spacing={4}
          className="mt-24"
          direction={{ base: 'column', md: 'row' }}
        >
          <Show above="sm">
            <Input
              variant="outline"
              type="text"
              placeholder={placeholderMessage}
              value={inputText}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAskMessage()
                }
              }}
            />
          </Show>
          <Show below="md">
            <Textarea
              placeholder={placeholderMessage}
              value={inputText}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleAskMessage()
                }
              }}
              onChange={(e) => setInputMessage(e.target.value)}
            />
          </Show>

          <Button
            colorScheme={DESIGN_COLORS.PRIMARY}
            onClick={() => handleAskMessage()}
            isLoading={isFetching}
            loadingText="Thinking ..."
          >
            Ask Johnny
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ChatContainer
