'use client'
import {
  Button,
  Collapse,
  HStack,
  Input,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  CityStatesJohnnyHasBeenTo,
  CityStates,
  StateCountry,
} from '../constants'

const ChatContainer = () => {
  const [inputText, setInputText] = useState('')
  const [chatHistory, setChatHistory] = useState<string[]>([])

  const handleAskMessage = async () => {
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

  const setInputMessage = (message: string) => {
    setInputText(message)
  }

  return (
    <div className="p-4 rounded-md h-screen w-1/2 justify-center justify-self-center justify-items-center">
      <CityPills setInputMessage={setInputMessage} />

      {chatHistory.map((message, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
          <Text fontSize="xl">{message}</Text>
        </div>
      ))}
      <HStack spacing={4} align="center" justify="center" mb={4}>
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
        <Button colorScheme="orange" onClick={() => handleAskMessage()}>
          Ask
        </Button>
      </HStack>
    </div>
  )
}

const CityPills = ({ setInputMessage }: { setInputMessage: any }) => {
  const { isOpen, onToggle } = useDisclosure()

  const mainButtonText = isOpen
    ? "No Don't Give City Recommendations"
    : 'I Would Like City Recommendations'

  return (
    <Stack
      direction="column"
      spacing={4}
      align="center"
      justify="center"
      mb={4}
    >
      <Button
        fontSize="xl"
        colorScheme={isOpen ? 'blackAlpha' : 'orange'}
        onClick={() => onToggle()}
      >
        {mainButtonText}
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Stack direction="row" spacing={6}>
          {Object.keys(CityStatesJohnnyHasBeenTo).map((city) => (
            <CityButton
              key={city}
              city={city}
              setInputMessage={setInputMessage}
            />
          ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const CityButton = ({
  city,
  setInputMessage,
}: {
  city: string
  setInputMessage: any
}) => {
  const stateCode = CityStatesJohnnyHasBeenTo[city]
  return (
    <Button
      colorScheme="orange"
      variant="outline"
      onClick={() =>
        setInputMessage(
          `I would like a recommendation from ${city} ${stateCode} ${StateCountry[stateCode]}`,
        )
      }
    >
      {city}
    </Button>
  )
}

export default ChatContainer
