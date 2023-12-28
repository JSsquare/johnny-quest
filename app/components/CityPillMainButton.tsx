'use client'
import {
  Button,
  Collapse,
  Stack,
  HStack,
  Tooltip,
  useDisclosure,
  VStack,
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
    : `Give Me Recommendations from Johnny's City List`

  return (
    <Stack direction="column" spacing={4} align="center" justify="center">
      <Button
        fontSize={{ base: 'xs', md: 'xl' }}
        colorScheme={isOpen ? DESIGN_COLORS.SECONDARY : DESIGN_COLORS.PRIMARY}
        onClick={() => onToggle()}
        size={{ base: 'xs', md: 'lg' }}
        padding={8}
        style={{
          whiteSpace: 'normal',
          wordWrap: 'break-word',
        }}
      >
        {mainButtonText}
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <HStack spacing={6} overflowX="auto" wrap="wrap">
          {Object.keys(CityStatesJohnnyHasBeenTo).map((city) => (
            <CityButton
              key={city}
              city={city}
              setInputMessage={setInputMessage}
            />
          ))}
        </HStack>
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
