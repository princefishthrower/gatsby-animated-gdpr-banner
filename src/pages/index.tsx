import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { useCookies } from "react-cookie"
import { Constants } from "../constants/Constants"

const IndexPage = () => {
  const [cookies, setCookie] = useCookies([
    Constants.GOOGLE_ANALYTICS_COOKIE_NAME,
  ])

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <button
        className="btn btn-primary"
        onClick={() => setCookie(Constants.GOOGLE_ANALYTICS_COOKIE_NAME, "")}
      >
        Reset GDPR Cookie Value
      </button>
      <p>(For testing purposes)</p>
    </Layout>
  )
}

export default IndexPage
