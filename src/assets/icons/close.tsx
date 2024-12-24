import { ISvg } from "../../interface"

export const CloseSVG: React.FC<ISvg> = ({
  color = "#667185",
  width = "30",
  height = "30"
}) => {
  return (   
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 30 30">
      <path d="M4 4L26 26M26 4L4 26" stroke={color} stroke-width="4" stroke-linecap="round"/>
    </svg>
  )
}
    