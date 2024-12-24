import { ISvg } from "../../interface";

export const BoxSVG: React.FC<ISvg> = ({
  color = "#667185",
  width = "20",
  height = "20"
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.11173 2.93766C8.1259 2.61851 9.02816 2.35703 9.54419 2.21072C9.84439 2.12561 10.1537 2.12947 10.4519 2.22138C11.8345 2.64753 16.0106 3.96678 17.6561 4.84809L14.7451 6.07374L7.11173 2.93766Z" fill={color} />
      <path d="M5.28809 3.53982C4.0758 3.96252 2.92611 4.41758 2.25908 4.81697C2.28138 4.82354 2.30353 4.83143 2.32546 4.84066L9.99957 8.07178L13.1206 6.75772L5.28809 3.53982Z" fill={color} />
      <path d="M1.57708 5.78391C1.3809 7.16612 1.53254 11.4919 1.61806 13.5173C1.64554 14.168 2.05385 14.7384 2.65853 14.9803L9.38064 17.6691C9.38705 17.6717 9.39348 17.6742 9.39992 17.6767C9.38343 17.6206 9.37457 17.5613 9.37457 17.4999V9.16491L1.8404 5.99271C1.73119 5.94673 1.64187 5.87334 1.57708 5.78391Z" fill={color} />
      <path d="M10.5992 17.6767C10.6057 17.6742 10.6122 17.6717 10.6186 17.6691L17.3407 14.9802C17.9454 14.7384 18.3537 14.168 18.3812 13.5173C18.4667 11.4918 18.6184 7.16595 18.4222 5.78382C18.3574 5.87329 18.268 5.94671 18.1588 5.99271L10.6246 9.16491V17.4999C10.6246 17.5613 10.6157 17.6207 10.5992 17.6767Z" fill={color} />
    </svg>
  )
}