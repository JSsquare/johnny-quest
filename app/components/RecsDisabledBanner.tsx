import { BUY_ME_A_COFFEE_LINK, SUBSTACK_NEWSLETTER_LINK } from "@/app/constants/commonConstants"
import { Alert, AlertDescription, AlertTitle, border, Button } from "@chakra-ui/react"

export const RecsDisabledBanner = () => {
    return (
      <Alert status="info" className="fixed w-full flex flex-col text-xs text-center mt-20">        
        <AlertTitle>        
          I hope you found Johnnys Recommendation helpful. You can ask for more recommendations in 3 minutes.  
        </AlertTitle>
        <AlertDescription>
          While you wait, buy him a coffee or checkout{' '}
          <a target="_blank" href={SUBSTACK_NEWSLETTER_LINK} className="underline">
        His Free Newsletter!
          </a>
        </AlertDescription>
        <Button as="a" href={BUY_ME_A_COFFEE_LINK} target="_blank" variant="link" style={{ marginTop: '20px' }}>
            <img src="/orange-button.png" alt="Newsletter" style={{ width: '100px', height: '30px' }} />
        </Button>
      </Alert>
    )
  }