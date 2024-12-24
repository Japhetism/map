import { ISvg } from "../../interface"

export const GridSVG: React.FC<ISvg> = ({
  color = "#667185",
  width = "20",
  height = "20",
  ...props
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.6667 12.0833V16.25C11.6667 16.9404 12.2263 17.5 12.9167 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V12.0833C17.5 11.393 16.9404 10.8333 16.25 10.8333H12.9167C12.2263 10.8333 11.6667 11.393 11.6667 12.0833Z" fill={color} />
      <path d="M2.5 12.0833L2.5 16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H7.08333C7.77369 17.5 8.33333 16.9404 8.33333 16.25V12.0833C8.33333 11.393 7.77369 10.8333 7.08333 10.8333H3.75C3.05964 10.8333 2.5 11.393 2.5 12.0833Z" fill={color} />
      <path d="M2.5 3.75L2.5 7.08333C2.5 7.77369 3.05964 8.33333 3.75 8.33333L16.25 8.33333C16.9404 8.33333 17.5 7.77369 17.5 7.08333V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5L3.75 2.5C3.05964 2.5 2.5 3.05964 2.5 3.75Z" fill={color} />
    </svg>
  )
}