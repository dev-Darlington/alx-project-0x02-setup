import Button from "@/components/common/Button"

const About = () => {
  return (
    <div>
      <div>
      <Button size="10" shape="rounded-sm" text="Small Button"/>
      </div>
      <div>
      <Button size="20" shape="rounded-md" text="Medium Button"/>
      </div>
      <div>
      <Button size="40" shape="rounded-full" text="Large Button"/>
      </div>
    </div>
  )
}
export default About