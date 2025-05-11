import { BUY_ME_A_COFFEE_LINK, SUBSTACK_NEWSLETTER_LINK } from "@/app/constants/commonConstants"
import { Alert, AlertDescription, AlertTitle, border, Button } from "@chakra-ui/react"

export const RecsDisabledBanner = () => {
    return (
      <Alert status="info" className="fixed w-full flex flex-col text-xs text-center mt-20">        
        <AlertTitle>        
        Hope you found this helpful. You can ask more, if you just wait 3 minutes.  
        </AlertTitle>
        <AlertDescription>
          While you wait, checkout Johnnys FREE  {' '}
          <a target="_blank" href={SUBSTACK_NEWSLETTER_LINK} className="underline">
          &rarr; Newsletter
          </a><br/>OR
        </AlertDescription>
        <Button as="a" href={BUY_ME_A_COFFEE_LINK} target="_blank" variant="link" style={{ marginTop: '20px' }}>
            <img src="/orange-button.png" alt="Newsletter" style={{ width: '100px', height: '30px' }} />
        </Button>
      </Alert>
    )
  }