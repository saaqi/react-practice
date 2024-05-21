import { useLocation } from 'react-router-dom'

const webSiteTitle = "Saaqi Practices React"

function WebSiteLocation() {
  return useLocation().pathname;
}

export {webSiteTitle, WebSiteLocation}