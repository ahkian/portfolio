import Link from 'next/link'

export default function NavBar(){
    return(
        <div>
            <div>
                <Link href='/'>Home</Link>
            </div>
            <div>
                <Link href='/experience'>Experience</Link>
            </div>
            <div>
                <Link href='/about'>About Me</Link>
            </div>
            <div>
                <Link href='/contact'>Contact</Link>
            </div>
        </div>
    )
}