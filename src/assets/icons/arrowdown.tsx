import { ISvg } from "../../interface";

export const ArrowdownSVG: React.FC<ISvg> = ({
  color = "#344054",
  width = "20",
  height = "20"
}) => {
  return (  
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.41075 6.91075C4.73618 6.58531 5.26382 6.58531 5.58926 6.91075L10 11.3215L14.4107 6.91075C14.7362 6.58531 15.2638 6.58531 15.5893 6.91075C15.9147 7.23619 15.9147 7.76382 15.5893 8.08926L10.5893 13.0893C10.2638 13.4147 9.73618 13.4147 9.41075 13.0893L4.41075 8.08926C4.08531 7.76382 4.08531 7.23619 4.41075 6.91075Z" fill={color} />
    </svg>
  )
}
