import Link from "next/link"

const Header = () => {
  
  return (
    <div>
      <Link className="mx-2" href="/home">Home</Link>
      <Link className="mx-2" href='/about'>About</Link>
      <Link className="mx-2" href='/pages'>Pages</Link>
    </div>
  )
}
export default Header