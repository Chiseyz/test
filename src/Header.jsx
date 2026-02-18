import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Header() {
  const [count, setCount] = useState(0)
  return (
    <>
        <div className="navbar bg-blue-500 min-h-8 h-8 text-sm height-10">
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="https://www.youtube.com/@Chisey">YouTube</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>


        </div>
    </>
  )
}

export default Header;