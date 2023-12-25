'use client'
import { Button, Collapse, Stack, useDisclosure } from '@chakra-ui/react'
import {
  CityStatesJohnnyHasBeenTo,
  DESIGN_COLORS,
  StateCountry,
} from '../constants'

export const CityPills = ({ setInputMessage }: { setInputMessage: any }) => {
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
      mb={24}
    >
      <Button
        fontSize="xl"
        colorScheme={isOpen ? DESIGN_COLORS.SECONDARY : DESIGN_COLORS.PRIMARY}
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
      colorScheme={DESIGN_COLORS.PRIMARY}
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
