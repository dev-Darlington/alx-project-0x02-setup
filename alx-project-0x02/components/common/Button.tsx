import { ButtonProps } from "@/interfaces"

const Button = ({size, shape, text}: ButtonProps) => {
  return (
    <button className={`p-${size} ${shape} bg-amber-500 mt-2`}>
        {text}
    </button>
  )
}
export default Button