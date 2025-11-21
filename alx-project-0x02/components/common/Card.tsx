import { type CardProps } from "@/interfaces"

const Card = ({title, content}: CardProps) => {
  return (
    <div>
        <div>{title}</div>
        <div>{content}</div>
    </div>
  )
}
export default Card