import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.jpg';



const navLinks = [
   { label: 'Home', to: '/' },
   { label: 'About', to: '/about' },
   { label: 'Sign in', to: '/signin' },
];

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);


   const navButtonClass = ({ isActive }: { isActive: boolean }) =>
      [
         'rounded-md border px-4 py-2 text-sm font-semibold transition',
         isActive
            ? 'border-slate-950 bg-slate-950 text-white'
            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-950 hover:bg-slate-950 hover:text-white',
      ].join(' ');

   return (
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-300 bg-slate-200/90 shadow- backdrop-blur-md">
         <nav className="relative mx-auto flex h-32 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <Link
               to="/"
               aria-label="EASY Logistics"
               className="flex shrink-0 items-center text-border-amber-400"
               onClick={() => setIsOpen(false)}
            >
               <img
                  src={logo}
                  alt="EASY Logistics logo"
                  className="h-25 w-25 rounded-full border border-amber-400 object-cover shadow-sm"
               />
            </Link>

            <Link
               to="/"
               className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-base font-bold uppercase tracking-wide text-slate-950 sm:static sm:translate-x-0 sm:text-xl"
               onClick={() => setIsOpen(false)}
            >
               EASY Logistics
            </Link>

            <div className="ml-auto flex items-center gap-2">
               <div className="hidden items-center gap-2 sm:flex">
                  {navLinks.map((link) => (
                     <NavLink
                        key={link.to}
                        to={link.to}
                        className={navButtonClass}
                     >
                        {link.label}
                     </NavLink>
                  ))}
               </div>

               
               <button
                  type="button"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen((current) => !current)}
                  className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 bg-slate-100 text-slate-950 shadow-sm sm:hidden"
               >
                  <span className="space-y-1.5">
                     <span className="block h-0.5 w-5 bg-current" />
                     <span className="block h-0.5 w-5 bg-current" />
                     <span className="block h-0.5 w-5 bg-current" />
                  </span>
               </button>
            </div>
         </nav>

         {isOpen && (
            <div className="border-t border-slate-300 bg-slate-100/95 px-4 py-3 shadow-lg sm:hidden">
               <div className="mx-auto grid max-w-7xl gap-2">
                  {navLinks.map((link) => (
                     <NavLink
                        key={link.to}
                        to={link.to}
                        className={navButtonClass}
                        onClick={() => setIsOpen(false)}
                     >
                        {link.label}
                     </NavLink>
                  ))}
               </div>
            </div>
         )}
      </header>
   );
};

export default NavBar;
