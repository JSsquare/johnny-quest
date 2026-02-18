'use client';
import { useTheme } from './ThemeProvider';
import { QuestionOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
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
import { motion } from 'framer-motion';
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
  const { theme } = useTheme();
  interface Message {
    role: string;
    content: string;
  }
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecsAllowed, setIsRecsAllowed] = useState(true);
  const [composerHeight, setComposerHeight] = useState(0);
  const [composerOffset, setComposerOffset] = useState(0);
  const [isComposerFocused, setIsComposerFocused] = useState(false);
  const askSubmitButtonRef = useRef<HTMLButtonElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const composerRef = useRef<HTMLFormElement | null>(null);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isMobileLayout = isMobile ?? false;


  useEffect(() => {
    if (isRecsAllowed === false) {
      const timer = setTimeout(() => {
        setIsRecsAllowed(true)
      }, RECS_ALLOWED_MILLISECONDS);
      return () => clearTimeout(timer);
    }
  }, [isRecsAllowed, messages]);

  useEffect(() => {
    const composer = composerRef.current;
    if (!isRecsAllowed || !composer) {
      setComposerHeight(0);
      setComposerOffset(0);
      return;
    }

    const updateHeight = () => {
      setComposerHeight(composer.offsetHeight);
    };

    updateHeight();

    if (typeof window !== 'undefined') {
      if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(updateHeight);
        observer.observe(composer);
        return () => observer.disconnect();
      }
      // @ts-ignore - Fallback for browsers without ResizeObserver
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [isRecsAllowed, isMobileLayout]);

  useEffect(() => {
    if (typeof window === 'undefined' || !isMobileLayout) {
      setComposerOffset(0);
      return;
    }

    const visualViewport = window.visualViewport;
    if (!visualViewport) {
      return;
    }

    const handleViewportChange = () => {
      if (!isComposerFocused) {
        setComposerOffset(0);
        return;
      }

      const keyboardHeight = window.innerHeight - visualViewport.height - visualViewport.offsetTop;
      const offset = Math.max(keyboardHeight, 0);
      setComposerOffset(offset);
    };

    handleViewportChange();

    visualViewport.addEventListener('resize', handleViewportChange);
    visualViewport.addEventListener('scroll', handleViewportChange);

    return () => {
      visualViewport.removeEventListener('resize', handleViewportChange);
      visualViewport.removeEventListener('scroll', handleViewportChange);
    };
  }, [isMobileLayout, isComposerFocused]);

  useEffect(() => {
    if (!isComposerFocused) return;
    if (typeof window === 'undefined') return;
    if ('visualViewport' in window) return;
    composerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [isComposerFocused, isMobileLayout]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    const fetchAndDecodeMessage = async () => {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
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
  }

  useEffect(() => {
    const scrollToBottom = () => {
      endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    };

    if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
      requestAnimationFrame(scrollToBottom);
    } else {
      scrollToBottom();
    }
  }, [messages, isLoading, composerHeight]);

  const placeholderMessage = isLoading ? FETCHING_RESULTS_PLACEHOLDER : DEFAULT_INPUT_PLACEHOLDER;
  const isShowPromotionBanner = !isRecsAllowed && isLoading === false;
  const mobileSpacingBuffer = 96;
  const desktopSpacingBuffer = 80;
  const conversationPaddingBottom = {
    base: isRecsAllowed && composerHeight
      ? `calc(${composerHeight + mobileSpacingBuffer}px + max(env(safe-area-inset-bottom), 0px))`
      : isRecsAllowed ? 'calc(14rem + max(env(safe-area-inset-bottom), 0px))' : 'calc(8rem + max(env(safe-area-inset-bottom), 0px))',
    md: isRecsAllowed && composerHeight
      ? `calc(${composerHeight + desktopSpacingBuffer}px + max(env(safe-area-inset-bottom), 0px))`
      : isRecsAllowed ? 'calc(10rem + max(env(safe-area-inset-bottom), 0px))' : 'calc(6rem + max(env(safe-area-inset-bottom), 0px))',
  };
  const bottomSpacerHeight = isRecsAllowed
    ? composerHeight
      ? `calc(${composerHeight + 48}px + max(env(safe-area-inset-bottom), 0px))`
      : 'calc(12rem + max(env(safe-area-inset-bottom), 0px))'
    : 'calc(2rem + max(env(safe-area-inset-bottom), 0px))';
  const handleComposerFocus = () => {
    setIsComposerFocused(true);
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    if (typeof window === 'undefined' || window.visualViewport) return;
    composerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  const handleComposerBlur = () => {
    setIsComposerFocused(false);
    setComposerOffset(0);
  };


  return (
    <>
      <Box
        minH="100vh"
        display="flex"
        flexDirection="column"
        position="relative"
        bg="transparent"
      >
        {isRecsAllowed && (
          <Box
            position="absolute"
            top={{ base: 2, md: 6 }}
            left={{ base: 2, md: 12 }}
            zIndex={920}
          >
            <AboutJohnnyLinkButton />
          </Box>
        )}

        <Box
          ref={scrollContainerRef}
          flex="1"
          width="100%"
          display="flex"
          justifyContent="center"
          px={{ base: 4, md: 12 }}
          pt={{ base: 20, md: 28 }}
          pb={conversationPaddingBottom}
          overflowY="auto"
          sx={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'thin',
          }}
        >
          <Stack spacing={10} maxW="3xl" width="100%" align="stretch" color={theme === 'dark' ? 'white' : DESIGN_COLORS.TEXT_PRIMARY}>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
              style={{ width: '100%' }}
            >
            <Stack spacing={4} textAlign="center" width="100%">
              <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="semibold" color={DESIGN_COLORS.PRIMARY}>
                Ask Johnny Where To Eat
              </Text>
              <Text color={theme === 'dark' ? 'gray.400' : DESIGN_COLORS.TEXT_MUTED} fontSize={{ base: 'md', md: 'lg' }}>
                Tell Johnny what you&apos;re craving for, he&apos;ll craft a personal pick for you.
              </Text>
            </Stack>
            </motion.div>

            {isRecsAllowed && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <CityPillsMainButton askSubmitButtonRef={askSubmitButtonRef} setUserAskQuery={setInput} />
              </motion.div>
            )}

            {/* Ask A Specific Question Feature is work in progress
            {ENABLE_SPECIFIC_QUESTION && <AskSpecificQuestion />} */}

            <Stack width="100%" minW="14rem" gap="1.25rem">
              {messages.map((m, index) => (
                <Box
                  key={index}
                  borderRadius="xl"
                  bg={m.role === 'assistant' ? (theme === 'dark' ? 'rgba(193, 95, 60, 0.25)' : 'rgba(193, 95, 60, 0.12)') : (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(177, 173, 161, 0.35)')}
                  border={theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(177, 173, 161, 0.6)'}
                  p={{ base: 4, md: 6 }}
                >
                  <Text fontSize={{ base: 'sm', md: 'lg' }} color={theme === 'dark' ? 'white' : DESIGN_COLORS.TEXT_PRIMARY}>
                    {m.content}
                  </Text>
                </Box>
              ))}

              {isLoading && (
                <Skeleton
                  startColor={DESIGN_COLORS.PRIMARY}
                  endColor={DESIGN_COLORS.SUBTLE}
                  height="30px"
                  borderRadius="xl"
                />
              )}
              <Box ref={endOfMessagesRef} height={bottomSpacerHeight} pointerEvents="none" />
            </Stack>
          </Stack>
        </Box>

        {isRecsAllowed && (
          <motion.div
            initial={{ opacity: 0, y: 100, x: '-50%', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25,
              mass: 1,
              delay: 0.2
            }}
            style={{
                position: 'fixed',
                left: '50%',
                bottom: isMobileLayout ? 'calc(env(safe-area-inset-bottom, 0px) + 16px)' : '40px',
                width: 'min(680px, calc(100% - 2rem))',
                zIndex: 900,
            }}
          >
          <Box
            as="form"
            onSubmit={handleFormSubmit}
            ref={composerRef}
            width="100%"
            bg={theme === 'dark' ? '#1a1a1aF2' : `${DESIGN_COLORS.SURFACE}F2`}
            borderRadius={{ base: '2xl', md: 'full' }}
            boxShadow="0px 24px 46px rgba(24, 23, 19, 0.25)"
            border={theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(177, 173, 161, 0.45)'}
            px={{ base: 4, md: 6 }}
            py={{ base: 3, md: 4 }}
            backdropFilter="blur(12px)"
            pointerEvents="auto"
            transition="transform 0.2s ease, box-shadow 0.2s ease"
            style={{
                transform: `translate3d(0, ${composerOffset ? -composerOffset : 0}px, 0)`
            }}
          >
            <Stack
              spacing={{ base: 3, md: 4 }}
              direction={isMobileLayout ? 'column' : 'row'}
              align={isMobileLayout ? 'stretch' : 'center'}
            >
              {isMobileLayout ? (
                <Textarea
                  value={input}
                  variant="unstyled"
                  placeholder={placeholderMessage}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={handleComposerFocus}
                  onBlur={handleComposerBlur}
                  color={theme === 'dark' ? 'white' : DESIGN_COLORS.TEXT_PRIMARY}
                  backgroundColor="transparent"
                  borderRadius="xl"
                  border={theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(177, 173, 161, 0.45)'}
                  px={4}
                  py={3}
                  _focus={{ borderColor: DESIGN_COLORS.PRIMARY, boxShadow: '0 0 0 2px rgba(193, 95, 60, 0.25)' }}
                  _placeholder={{ color: DESIGN_COLORS.TEXT_MUTED }}
                  minH={isMobileLayout ? 24 : 32}
                />
              ) : (
                <InputGroup flex="1">
                  <Input
                    value={input}
                    variant="unstyled"
                    type="text"
                    placeholder={placeholderMessage}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={handleComposerFocus}
                    onBlur={handleComposerBlur}
                    color={theme === 'dark' ? 'white' : DESIGN_COLORS.TEXT_PRIMARY}
                    backgroundColor="transparent"
                    border={theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(177, 173, 161, 0.45)'}
                    borderRadius="full"
                    pl={12}
                    pr={6}
                    py={4}
                    _focus={{ borderColor: DESIGN_COLORS.PRIMARY, boxShadow: '0 0 0 2px rgba(193, 95, 60, 0.25)' }}
                    _placeholder={{ color: DESIGN_COLORS.TEXT_MUTED }}
                  />
                </InputGroup>
              )}
              <Button
                ref={askSubmitButtonRef}
                backgroundColor={DESIGN_COLORS.PRIMARY}
                color={DESIGN_COLORS.WHITE}
                _hover={{ backgroundColor: '#a64f32' }}
                type="submit"
                isLoading={isLoading}
                minW={{ base: '100%', md: 'auto' }}
                borderRadius="full"
                py={{ base: 3, md: 4 }}
              >
                Ask him
              </Button>
            </Stack>
          </Box>
          </motion.div>
        )}
      </Box>
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
