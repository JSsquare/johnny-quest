import { BUY_ME_A_COFFEE, SUBSTACK_NEWSLETTER } from "@/app/constants/commonConstants"
import { Alert, AlertDescription, AlertTitle, Button } from "@chakra-ui/react"

export const RecsDisabledBanner = () => {
    return (
      <Alert status="info" className="fixed w-full flex flex-col text-xs text-center mt-20">        
        <AlertTitle>        
          I hope you found Johnnys Recommendation helpful. You can ask for more recommendations in 3 minutes.  
        </AlertTitle>
        <AlertDescription>
          While you wait, buy him a coffee or checkout{' '}
          <a target="_blank" href={SUBSTACK_NEWSLETTER} className="underline">
        His Free Newsletter!
          </a>
        </AlertDescription>
        <Button as="a" href={BUY_ME_A_COFFEE} target="_blank" variant="link" style={{ marginTop: '20px' }}>
            <img src="/orange-button.png" alt="Newsletter" style={{ width: '100px', height: '30px' }} />
        </Button>
      </Alert>
    )
  }