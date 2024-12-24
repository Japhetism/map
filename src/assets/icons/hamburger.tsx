import { ISvg } from "../../interface"

export const HamburgerSVG: React.FC<ISvg> = ({
  color = "#667185",
  width = "30",
  height = "20"
}) => {
  return (   
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 30 20">
      <rect x="0" y="2" width="30" height="4" fill={color} />
      <rect x="0" y="8" width="30" height="4" fill={color} />
      <rect x="0" y="14" width="30" height="4" fill={color} />
    </svg>  
  )
}
  