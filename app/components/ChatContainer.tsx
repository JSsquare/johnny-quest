'use client'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
  Skeleton,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useChat } from 'ai/react'
import { FormEvent, useEffect, useState } from 'react'
import { DESIGN_COLORS, SUBSTACK_NEWSLETTER } from '../constants/commonConstants'
import { DEFAULT_INPUT_PLACEHOLDER, LOADING_INPUT_PLACEHOLDER } from '../constants/copyConstants'
import { minutesToMilliseconds } from '../utils/common'
import { AboutJohnny } from './AboutJohnny'
import { CityPillMainButton } from './CityPillMainButton'

const ChatContainer = () => {
  const [isRecsAllowed, setIsRecsAllowed] = useState(true)
  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
    api: '/api/ask',
    onFinish: () => {
      setIsRecsAllowed(false)
      window.scrollTo(0, document.body.scrollHeight)
    },
  })

  useEffect(() => {
    if (isRecsAllowed === false) {
      const timer = setTimeout(() => {
        setIsRecsAllowed(true)
      }, minutesToMilliseconds(2))
      return () => {
        if (timer) clearTimeout(timer)
      }
    }
  }, [isRecsAllowed])

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit(e)
  }

  const placeholderMessage = isLoading ? LOADING_INPUT_PLACEHOLDER : DEFAULT_INPUT_PLACEHOLDER

  return (
    <>
      {isRecsAllowed && <AboutJohnny />}

      <Stack align="center" mt={48} marginX={16} className="w-100">
        {isRecsAllowed && <CityPillMainButton setUserAskQuery={setInput} />}

        <Stack className="lg:w-3/4 min-w-56" gap="1rem">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`${
                m.role === 'assistant' ? 'bg-green-200' : 'bg-green-50'
              } rounded-md shadow-2xl p-5`}
            >
              <Text fontSize={{ base: 'xs', md: '2xl' }}>{m.content}</Text>
            </div>
          ))}

          {isLoading && (
            <Skeleton
              startColor={DESIGN_COLORS.PRIMARY}
              endColor={DESIGN_COLORS.SUBTLE}
              height="30px"
              className="mb-4 p4 min-w-52"
            />
          )}
          {isRecsAllowed && (
            <form onSubmit={handleFormSubmit}>
              <Stack spacing={4} className="mt-24" direction={{ base: 'column', md: 'row' }}>
                <div className="hidden lg:block w-full">
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <QuestionOutlineIcon color={DESIGN_COLORS.PRIMARY} />
                    </InputLeftElement>
                    <Input
                      value={input}
                      variant="outline"
                      type="text"
                      placeholder={placeholderMessage}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </div>
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
        </Stack>
      </Stack>
      {!isRecsAllowed && isLoading === false && <RecsDisabledBanner />}
    </>
  )
}

const RecsDisabledBanner = () => {
  return (
    <Alert status="info" className="flex flex-col mt-12 text-orange-500 text-xs text-center">
      <AlertTitle>
        I hope you found Johnnys Recommendation useful. You can ask for more recommendations in 3
        minutes.
      </AlertTitle>
      <AlertDescription>
        While you wait, buy him a coffee or checkout{' '}
        <a target="_blank" href={SUBSTACK_NEWSLETTER} className="underline">
          His Newsletter
        </a>
        !
      </AlertDescription>
    </Alert>
  )
}

export default ChatContainer
