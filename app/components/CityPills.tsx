'use client'
import {
  Button,
  Collapse,
  Stack,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import {
  CityStatesJohnnyHasBeenTo,
  DESIGN_COLORS,
  StateCodeToState,
  StateCountry,
} from '../constants'

export const CityPillMainButton = ({
  setInputMessage,
}: {
  setInputMessage: any
}) => {
  const { isOpen, onToggle } = useDisclosure()

  const mainButtonText = isOpen
    ? 'No Do Not Give City Recommendations'
    : `Give Me Recommendations from Cities Johnny's City List`

  return (
    <Stack direction="column" spacing={4} align="center" justify="center">
      <Button
        fontSize="xl"
        colorScheme={isOpen ? DESIGN_COLORS.ATTENTION : DESIGN_COLORS.PRIMARY}
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
    <Tooltip
      hasArrow
      label={`${city} is in ${StateCodeToState[stateCode]}, ${StateCountry[stateCode]}`}
      bg={DESIGN_COLORS.SECONDARY}
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
