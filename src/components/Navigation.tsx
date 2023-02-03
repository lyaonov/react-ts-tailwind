import {Link} from 'react-router-dom'

export function Navigation(){
    return(
        <nav className="h-[50px] flex items-center justify-between px-5 bg-gray-500 text-white">
            <span className="font-bold">React 2023</span>

            <span>
                <Link to='/' className='mr-2'>Products</Link>
                <Link to='/about' >About</Link>
            </span>
        
        </nav>
    )
}