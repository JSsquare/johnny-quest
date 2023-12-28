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
import { useState, useEffect, FormEvent } from 'react'
import { CityPillMainButton } from './CityPillMainButton'
import { DESIGN_COLORS } from '../constants'
import { useChat } from 'ai/react'

const ChatContainer = () => {
  const [recsAllowed, setRecsAllowed] = useState(true)
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setInput,
  } = useChat({
    api: '/api/ask',
  })

  useEffect(() => {
    if (recsAllowed === false) {
      const timer = setTimeout(() => {
        setRecsAllowed(true)
      }, 90000)
      return () => {
        if (timer) clearTimeout(timer)
      }
    }
  }, [recsAllowed])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit(e)
    setRecsAllowed(false)
  }

  const placeholderMessage = isLoading
    ? 'hmmm thinking...'
    : 'Ask Johnny for Recommendations....'

  return (
    <Stack align="center" mt={40} marginX={16}>
      {Boolean(recsAllowed) && (
        <CityPillMainButton setInputMessage={setInput} />
      )}

      <Stack className="lg:w-3/4">
        {messages.map((m) => (
          <div key={m.id} className="bg-white rounded-md shadow-md p-5">
            <Text fontSize="xl">{m.content}</Text>
          </div>
        ))}

        {isLoading && (
          <Skeleton
            startColor={DESIGN_COLORS.PRIMARY}
            endColor={DESIGN_COLORS.SUBTLE}
            height="60px"
            className="mb-4 p4"
          />
        )}
        {Boolean(recsAllowed) && isLoading === false && (
          <form onSubmit={handleFormSubmit}>
            <Stack
              spacing={4}
              className="mt-24"
              direction={{ base: 'column', md: 'row' }}
            >
              <Show above="md">
                <Input
                  value={input}
                  variant="outline"
                  type="text"
                  placeholder={placeholderMessage}
                  onChange={handleInputChange}
                />
              </Show>
              <Show below="md">
                <Textarea
                  placeholder={placeholderMessage}
                  size="lg"
                  focusBorderColor={DESIGN_COLORS.PRIMARY}
                  value={input}
                  onChange={handleInputChange}
                />
              </Show>
              <Button
                colorScheme={DESIGN_COLORS.PRIMARY}
                type="submit"
                isLoading={isLoading}
                loadingText="Thinking ..."
              >
                Ask Johnny
              </Button>
            </Stack>
          </form>
        )}

        {recsAllowed === false && isLoading === false && (
          <Text
            className="mt-24 mb-8"
            fontSize="xl"
            color={DESIGN_COLORS.SECONDARY}
            align="center"
          >
            I hope you found Johnnys Recommendation useful <br /> You can ask for
            more recommendations in 3 minutes. <br />
            While you wait, buy him a coffee or checkout{' '}
            <a
              target="_blank"
              href="https://foodieyouall.substack.com"
              className="underline"
            >
              His Newsletter
            </a>
            !
          </Text>
        )}
      </Stack>
    </Stack>
  )
}

const ChatForm = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/ask',
  })

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}

export default ChatContainer
