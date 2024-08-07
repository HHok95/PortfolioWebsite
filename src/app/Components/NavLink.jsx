import Link from "next/link";

const NavLink = ({ href, title, setNavbarOpen, navBarOpen }) => {

    return (
        <Link href={href} onClick={() => navBarOpen && setNavbarOpen(false)} className='block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0 hover:text-primary-500 duration-500'>
            {title}
        </Link>
    )
}

export default NavLink;