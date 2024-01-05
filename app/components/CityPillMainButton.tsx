'use client'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Button, Collapse, HStack, Stack, Tooltip, useDisclosure } from '@chakra-ui/react'
import { DESIGN_COLORS } from '../constants/commonConstants'
import { BUTTON_TEXTS } from '../constants/copyConstants'
import {
  CityStatesJohnnyHasBeenTo,
  StateCodeToState,
  StateCountry,
} from '../constants/placesConstants'

export const CityPillMainButton = ({ setUserAskQuery }: { setUserAskQuery: any }) => {
  const { isOpen, onToggle } = useDisclosure()

  const mainButtonText = isOpen ? BUTTON_TEXTS.CITIES_OPEN : BUTTON_TEXTS.CITIES_CLOSED

  return (
    <Stack direction="column" spacing={4} align="center" justify="center">
      <Button
        fontSize={{ base: 'xs', md: 'xl' }}
        variant="outline"
        colorScheme={isOpen ? DESIGN_COLORS.PRIMARY : DESIGN_COLORS.SECONDARY}
        onClick={() => {
          if (isOpen) setUserAskQuery('')
          onToggle()
        }}
        size={{ base: 'xs', md: 'lg' }}
        padding={8}
        style={{
          whiteSpace: 'normal',
          wordWrap: 'break-word',
        }}
        borderColor={isOpen ? DESIGN_COLORS.SECONDARY : DESIGN_COLORS.PRIMARY}
        leftIcon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        rightIcon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      >
        {mainButtonText}
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <HStack spacing={6} overflowX="auto" wrap="wrap">
          {Object.keys(CityStatesJohnnyHasBeenTo).map((city) => (
            <CityButton key={city} city={city} setUserAskQuery={setUserAskQuery} />
          ))}
        </HStack>
      </Collapse>
    </Stack>
  )
}
const CityButton = ({ city, setUserAskQuery }: { city: string; setUserAskQuery: any }) => {
  const stateCode = CityStatesJohnnyHasBeenTo[city]
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
        onClick={() =>
          setUserAskQuery(
            `Can you give me recommendations from ${city}, ${StateCodeToState[stateCode]}, ${StateCountry[stateCode]}`,
          )
        }
      >
        {city}
      </Button>
    </Tooltip>
  )
}
