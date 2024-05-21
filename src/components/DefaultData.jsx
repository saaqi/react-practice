import { useLocation } from 'react-router-dom'

function WebSiteTitle() {
  return "Saaqi Practices React"
}

function WebSiteLocation() {
  return useLocation().pathname;
}


export {WebSiteTitle, WebSiteLocation}