import Link from 'next/link'

export default function NavBar(){
    return(
        <div className='flex justify-evenly items-center w-full h-20 nav bg-black text-yellow-200 font-bold'>
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