import { ISvg } from "../../interface";

export const ArrowupSVG: React.FC<ISvg> = ({
  color = "#344054",
  width = "20",
  height = "20" 
}) => {
  return (   
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.41075 6.91075C9.73618 6.58531 10.2638 6.58531 10.5893 6.91075L15.5893 11.9107C15.9147 12.2362 15.9147 12.7638 15.5893 13.0893C15.2638 13.4147 14.7362 13.4147 14.4107 13.0893L10 8.67851L5.58926 13.0893C5.26382 13.4147 4.73618 13.4147 4.41075 13.0893C4.08531 12.7638 4.08531 12.2362 4.41075 11.9107L9.41075 6.91075Z" fill={color} />
    </svg>
  )
}
