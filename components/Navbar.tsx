import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h3>Next List</h3>
            </div>
            <Link legacyBehavior href={'/'}><a>Home</a></Link>
            <Link legacyBehavior href={'/about'}><a>About</a></Link>
            <Link legacyBehavior href={'/students'}><a>Students</a></Link>
            
        </nav>
     );
}
 
export default Navbar;