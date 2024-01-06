import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'
import { useState } from 'react'
import { DESIGN_COLORS, askRecsSteps } from '../constants/commonConstants'
import { RecommendationSteps } from './RecommendationSteps'

const AskSpecificQuestion = () => {
  const [isOpen, setIsOpen] = useState(false)
  const totalNumberOfSteps = askRecsSteps.length

  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: 1,
    count: totalNumberOfSteps,
  })
  const isLastStep = activeStep === askRecsSteps.length

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleProgress = () => {
    isLastStep ? goToPrevious() : goToNext()
  }

  return (
    <>
      <Button onClick={handleOpenModal}>Ask A Specific Question</Button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What Are You Looking For?</ModalHeader>

          <ModalBody>
            <Stepper
              size="sm"
              index={activeStep}
              colorScheme={DESIGN_COLORS.PRIMARY}
              orientation="vertical"
              gap={12}
            >
              {askRecsSteps.map((step, index) => (
                <Step
                  key={index}
                  onClick={() => setActiveStep(index + 1)}
                  className="flex flex-col w-full cursor-pointer gap-6"
                >
                  <Box className="flex gap-6">
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>
                    <Stack>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </Stack>
                  </Box>

                  {activeStep === index + 1 && <RecommendationSteps step={step} />}
                </Step>
              ))}
            </Stepper>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleProgress()} colorScheme={DESIGN_COLORS.PRIMARY}>
              {isLastStep ? 'Prev' : 'Next'}
            </Button>
            <Button onClick={handleCloseModal}>No, Cancel My Ask</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AskSpecificQuestion
