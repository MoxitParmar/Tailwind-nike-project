import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../Constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            height={129}
            width={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray '>
                {item.label}
              </a>
              </li>
              ))}
        </ul>
        <div className='hidden max-lg:block'>
          {/* Todo: add the list for the dropdown */}
          <img src={hamburger} alt="Hamburger" height={25} width={25}/>
        </div>
      </nav>
    </header>

  )
}

export default Nav