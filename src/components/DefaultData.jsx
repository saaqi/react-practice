import { useLocation } from 'react-router-dom'

const webSiteTitle = "Saaqi Practices React"

const WebSiteLocation = () => {
  return useLocation().pathname;
}

export {webSiteTitle, WebSiteLocation}