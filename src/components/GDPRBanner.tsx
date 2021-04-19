import * as React from 'react'
import { useCookies } from 'react-cookie'
import Fade from 'react-reveal/Fade'
import { Constants } from '../constants/Constants'
import { useDidMount } from '../hooks/useDidMount'

export function GDPRBanner() {
  const didMount = useDidMount()
  const [cookies, setCookie] = useCookies([Constants.GOOGLE_ANALYTICS_COOKIE_NAME])

  const setCookieValue = (value: string) => {
    setCookie(Constants.GOOGLE_ANALYTICS_COOKIE_NAME, value)
  }

  const needToShowBanner =
    cookies[Constants.GOOGLE_ANALYTICS_COOKIE_NAME] !== 'true' && cookies[Constants.GOOGLE_ANALYTICS_COOKIE_NAME] !== 'false'
  const delay = needToShowBanner ? Constants.ANIMATION_DELAY : 0
  return (
    <Fade bottom delay={delay} when={didMount && needToShowBanner} duration={Constants.ANIMATION_DURATION}>
      <div className="fixed-bottom bg-gold p-2">
        <div className="row justify-content-center align-items-center">
          <span className="text-dark font-weight-bold mx-3">
            We use cookies to track the count of visits to this site, but that's it. ♥️
          </span>
          <button className="btn btn-primary mr-3" onClick={() => setCookieValue('true')}>
            Allow
          </button>
          <button className="btn btn-secondary" onClick={() => setCookieValue('false')}>
            Disable
          </button>
        </div>
      </div>
    </Fade>
  )
}