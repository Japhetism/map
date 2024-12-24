import { ISvg } from "../../interface"

export const ArrowrightSVG: React.FC<ISvg> = ({
  color = "#667185",
  width = "9",
  height = "16"
}) => {
  return (   
    <svg width={width} height={height} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path transform="rotate(180 4.5 8)" d="M0.597379 9.14227C-0.00662139 8.50052 -0.00662135 7.49947 0.597379 6.85772L6.7265 0.345527C7.04194 0.0103819 7.56933 -0.0055997 7.90448 0.309831C8.23962 0.625261 8.2556 1.15266 7.94017 1.4878L1.81105 8L7.94017 14.5122C8.2556 14.8473 8.23962 15.3747 7.90447 15.6902C7.56933 16.0056 7.04193 15.9896 6.7265 15.6545L0.597379 9.14227Z" fill={color} />
    </svg>
  )
}
  