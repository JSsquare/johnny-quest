'use client';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Stack,
  Text,
  Textarea,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  DESIGN_COLORS,
  RECS_ALLOWED_MESSAGE_LENGTH,
  RECS_ALLOWED_MILLISECONDS,
} from '../constants/commonConstants';
import { ENABLE_SPECIFIC_QUESTION } from '../constants/configConstants';
import { DEFAULT_INPUT_PLACEHOLDER, FETCHING_RESULTS_PLACEHOLDER } from '../constants/copyConstants';
import { AboutJohnnyLinkButton } from './AboutJohnnyLinkButton';
import AskSpecificQuestion from './AskSpecificQuestion';
import { CityPillsMainButton } from './CityPillMainButton';
import { RecsDisabledBanner } from '@/app/components/RecsDisabledBanner';

const MainChatContainer = () => {
  interface Message {
    role: string;
    content: string;
  }
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecsAllowed, setIsRecsAllowed] = useState(true);
  const askSubmitButtonRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false });


  useEffect(() => {
    if (isRecsAllowed === false) {
      const timer = setTimeout(() => {
        setIsRecsAllowed(true)
      }, RECS_ALLOWED_MILLISECONDS);
      return () => clearTimeout(timer);
    }
  }, [isRecsAllowed, messages]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    setInput('');

    const fetchAndDecodeMessage = async () => {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: input }] }),
      });
  
      if (!response.ok) {
        setMessages((prev) => [...prev, { role: 'assistant', content: 'Error fetching response.' }]);
        setIsLoading(false);
        return;
      }
  
      const reader = response.body?.getReader();
      if (!reader) {
        setMessages((prev) => [...prev, { role: 'assistant', content: 'Error reading response body.' }]);
        setIsLoading(false);
        return;
      }
      const decoder = new TextDecoder();
      let accumulatedResponse = '';
  
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        accumulatedResponse += chunk;
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage?.role === 'assistant') {
            return [...prev.slice(0, -1), { role: 'assistant', content: accumulatedResponse }];
          }
          return [...prev, { role: 'assistant', content: accumulatedResponse }];
        });
      }
    }
   
    await fetchAndDecodeMessage()
    setIsLoading(false);
    if(messages.length >= RECS_ALLOWED_MESSAGE_LENGTH) setIsRecsAllowed(false);
    window.scrollTo(0, document.body.scrollHeight);
  }

  const placeholderMessage = isLoading ? FETCHING_RESULTS_PLACEHOLDER : DEFAULT_INPUT_PLACEHOLDER;
  const isShowPromotionBanner = !isRecsAllowed && isLoading === false


  return (
    <>
      {isRecsAllowed && <AboutJohnnyLinkButton />}

      <Stack align="center" mt={48} marginX={16} className="w-100 ">
      <Text fontSize="3xl" fontWeight="bold" mb={8} textAlign='center'>
        Ask Johnny Where To Eat
      </Text>
      {isRecsAllowed && (
        <CityPillsMainButton askSubmitButtonRef={askSubmitButtonRef} setUserAskQuery={setInput} />
      )}
      
      {/* Ask A Specific Question Feature is work in progress
      {ENABLE_SPECIFIC_QUESTION && <AskSpecificQuestion />} */}

      <Stack
        className={`lg:w-3/4 min-w-56 ${isShowPromotionBanner ? 'mb-40' : ''}`}
        gap="1rem"
      >
        {messages.map((m, index) => (
        <div
          key={index}
          className={`${
          m.role === 'assistant' ? 'bg-green-200' : 'bg-green-50'
          } rounded-shadow-card`}
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
          {isMobile ? 
        <Textarea
        value={input}
        variant="outline"
        placeholder={placeholderMessage}
        onChange={(e) => setInput(e.target.value)}
        color={DESIGN_COLORS.PRIMARY}
        _placeholder={{ color: "inherit" }}
        minH={32}                  
          /> : 
          <InputGroup>
          <InputLeftElement pointerEvents="none">
          <QuestionOutlineIcon color={DESIGN_COLORS.PRIMARY} />
          </InputLeftElement>
          <Input
          value={input}
          variant="outline"
          type="text"
          placeholder={placeholderMessage}
          onChange={(e) => setInput(e.target.value)}
          color={DESIGN_COLORS.PRIMARY}
          backgroundColor={'white'}
          _placeholder={{ color: "inherit" }}
          /></InputGroup>}                                
          <Button backgroundColor={DESIGN_COLORS.PRIMARY} color={DESIGN_COLORS.WHITE} type="submit" isLoading={isLoading}>
        Ask Johnny
          </Button>
          </Stack>
        </form>
        )}
      </Stack>        
      </Stack>
      {isShowPromotionBanner && (
      <div
        style={{
        animation: 'slideIn 0.7s ease-out, bounce 0.5s ease-out 0.8s',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        }}
      >
        <RecsDisabledBanner />
      </div>
      )}
      <style jsx>{`
      @keyframes slideIn {
        from {
          transform: translateY(100%);
        }
        to {
          transform: translateY(0);
        }
      }
      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-30px);
        }
      }
      `}</style>
    </>
  );
};

export default MainChatContainer