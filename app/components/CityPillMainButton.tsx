'use client'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Box, Button, Collapse, HStack, Stack, Tooltip, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { DESIGN_COLORS } from '../constants/commonConstants'
import { BUTTON_TEXTS } from '../constants/copyConstants'
import {
  CityStatesJohnnyHasExplored,
  CityStatesJohnnyHasExploredType,
  StateCodeToState,
  StateCountry,
} from '../constants/placesConstants'

export const CityPillsMainButton = ({
  askSubmitButtonRef,
  setUserAskQuery,
}: {
  askSubmitButtonRef: any
  setUserAskQuery: any
}) => {
  const { isOpen, onToggle } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false });

  const mainButtonText = isOpen ? BUTTON_TEXTS.CITIES_OPEN : BUTTON_TEXTS.CITIES_CLOSED

  return (
    <Stack direction="column" spacing={4} align="center" justify="center">
  {/* Main Ask Toggle Button */}
  <Button
    fontSize={{ base: "xs", md: "xl" }}
    variant="outline"
    colorScheme={isOpen ? DESIGN_COLORS.PRIMARY : DESIGN_COLORS.SECONDARY}
    onClick={() => {
      if (isOpen) setUserAskQuery("");
      onToggle();
    }}
    size={{ base: "xs", md: "lg" }}
    padding={8}
    whiteSpace="normal"
    borderColor={isOpen ? DESIGN_COLORS.SECONDARY : DESIGN_COLORS.PRIMARY}
    leftIcon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
    rightIcon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
  >
    {mainButtonText}
  </Button>

  {/* Scrollable City Buttons */}
  <Collapse in={isOpen} animateOpacity>
    <Box 
      width="100%" 
      maxWidth="100vw" 
      overflowX={isMobile ? "auto" : "visible"} 
      overflowY="hidden"
      p={2}
      sx={{
        scrollbarWidth: "none", 
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none"
      }}
    >
      <HStack 
        spacing={4} 
         display="flex"
        flexWrap={isMobile ? 'nowrap' : 'wrap'} /* Prevents wrapping */
        minWidth={isMobile ? "max-content" : ''}  /* Prevents shrinking */
      >
        {Object.keys(CityStatesJohnnyHasExplored)
          .sort((a, b) => a.localeCompare(b)) // Sort cities alphabetically
          .map((city) => (
            <CityButton
              key={city}
              city={city}
              setUserAskQuery={setUserAskQuery}
              askSubmitButtonRef={askSubmitButtonRef}
            />
          ))}
      </HStack>
    </Box>
  </Collapse>
</Stack>
  )
}
const CityButton = ({
  city,
  setUserAskQuery,
  askSubmitButtonRef,
}: {
  city: string
  setUserAskQuery: any
  askSubmitButtonRef: any
}) => {
  const stateCode = CityStatesJohnnyHasExplored[city]
  return (
    <Tooltip
      hasArrow
      label={`${city} is in ${StateCodeToState[stateCode]}, ${StateCountry[stateCode]}`}
      bg={DESIGN_COLORS.PRIMARY}
      arrowSize={15}
      color="black"
    >
      <Button
        colorScheme={DESIGN_COLORS.PRIMARY}
        variant="outline"
        onClick={() => {
          setUserAskQuery(
            `Can you give me recommendations from ${city}, ${StateCodeToState[stateCode]}, ${StateCountry[stateCode]}`,
          )
          askSubmitButtonRef?.current?.scrollIntoView({ behavior: 'smooth' })
          askSubmitButtonRef?.current?.focus()
        }}
      >
        {city}
      </Button>
    </Tooltip>
  )
}
