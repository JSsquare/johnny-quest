'use client'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Button, Collapse, Stack, HStack, Tooltip, useDisclosure } from '@chakra-ui/react'
import { DESIGN_COLORS } from '../constants/commonConstants'
import {
  CityStatesJohnnyHasBeenTo,
  StateCodeToState,
  StateCountry,
} from '../constants/placesConstants'

export const CityPillMainButton = ({ setInputMessage }: { setInputMessage: any }) => {
  const { isOpen, onToggle } = useDisclosure()

  const mainButtonText = isOpen
    ? 'No! Do Not Give Me City Recommendations'
    : `Ask Recommendations from Johnny's Cities`

  return (
    <Stack direction="column" spacing={4} align="center" justify="center">
      <Button
        fontSize={{ base: 'xs', md: 'xl' }}
        variant="outline"
        colorScheme={isOpen ? DESIGN_COLORS.PRIMARY : DESIGN_COLORS.SECONDARY}
        onClick={() => {
          if (isOpen) setInputMessage('')
          onToggle()
        }}
        size={{ base: 'xs', md: 'lg' }}
        padding={8}
        style={{
          whiteSpace: 'normal',
          wordWrap: 'break-word',
        }}
        leftIcon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      >
        {mainButtonText}
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <HStack spacing={6} overflowX="auto" wrap="wrap">
          {Object.keys(CityStatesJohnnyHasBeenTo).map((city) => (
            <CityButton key={city} city={city} setInputMessage={setInputMessage} />
          ))}
        </HStack>
      </Collapse>
    </Stack>
  )
}
const CityButton = ({ city, setInputMessage }: { city: string; setInputMessage: any }) => {
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
          setInputMessage(
            `Can you give me recommendations from ${city}, ${StateCodeToState[stateCode]}, ${StateCountry[stateCode]}`,
          )
        }
      >
        {city}
      </Button>
    </Tooltip>
  )
}
