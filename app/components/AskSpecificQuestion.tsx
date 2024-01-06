import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Step,
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
import { RecommendationStep } from './RecommendationStep'

const AskSpecificQuestion = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState('full')
  const totalNumberOfSteps = askRecsSteps.length

  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 1,
    count: totalNumberOfSteps,
  })
  const isLastStep = activeStep === askRecsSteps.length
  const hasCompletedAllSteps = activeStep === totalNumberOfSteps

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

      <Modal isOpen={isOpen} onClose={handleCloseModal} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What Are You Looking For?</ModalHeader>

          <ModalBody>
            <Stepper
              size="sm"
              index={activeStep}
              colorScheme={DESIGN_COLORS.PRIMARY}
              orientation="vertical"
            >
              {askRecsSteps.map((step, index) => (
                <Step key={index} className="flex flex-col w-full">
                  <Box className="flex">
                    <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>
                    <StepTitle>{step.title}</StepTitle>
                  </Box>

                  {activeStep === index + 1 && <RecommendationStep step={step} />}
                </Step>
              ))}
            </Stepper>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleProgress()} colorScheme={DESIGN_COLORS.PRIMARY}>
              {isLastStep ? 'Prev' : 'Next'}
            </Button>
            <Button onClick={handleCloseModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AskSpecificQuestion
