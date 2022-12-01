import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza block"
    speed={1}
    width={280}
    height={468}
    viewBox="0 0 280 468"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="29" y="32" rx="0" ry="0" width="0" height="1" /> 
    <circle cx="129" cy="122" r="120" /> 
    <rect x="0" y="272" rx="10" ry="10" width="280" height="26" /> 
    <rect x="3" y="326" rx="11" ry="11" width="274" height="77" /> 
    <rect x="101" y="420" rx="10" ry="10" width="175" height="45" /> 
    <rect x="8" y="420" rx="10" ry="10" width="82" height="45" />
  </ContentLoader>
)

export default Skeleton