import React, { FC } from 'react'
import Link from 'next/link'

interface NavBarLinkProps {
  title: string
}
const NavBarLink: FC<NavBarLinkProps> = ({ title }) => (
  <Link href="/">
    <a className="uppercase text-md cursor-pointer hover:underline">{title}</a>
  </Link>
)

const NavBar = () => (
  <div className="py-3 shadow-lg">
    <ul className="hidden md:flex px-4 md:px-40 flex-row justify-between box-border max-w-6xl mx-auto">
      <li>
        <NavBarLink title={'Om os'} />
      </li>
      <li>
        <NavBarLink title={'Blomster'} />
      </li>
      <li>
        <NavBarLink title={'Delikatesser'} />
      </li>
      <li>
        <NavBarLink title={'Kontakt'} />
      </li>
    </ul>
    <div className="px-4 py-1 display md:hidden">
      <div className="max-w-min flex flex-col space-y-1 content-between bg-white">
        <div className="h-0.5 w-4 bg-gray-600" />
        <div className="h-0.5 w-4 bg-gray-600" />
        <div className="h-0.5 w-4 bg-gray-600" />
      </div>
    </div>
  </div>
)

export default NavBar
