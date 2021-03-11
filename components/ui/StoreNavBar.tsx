import React, { FC } from 'react'
import { NavBarLink } from '@components/ui/NavBarLink'
import { useRouter } from 'next/router'

const NavBar: FC = () => {
  const router = useRouter()

  return (
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
        <li>
          <NavBarLink
            title={'Basket'}
            onClick={() => router.push('/products/basket')}
          />
        </li>
      </ul>
      <div className="px-4 py-1 display md:hidden flex justify-between">
        <div className="max-w-min flex flex-col space-y-1 content-between bg-white">
          <div className="h-0.5 w-4 bg-gray-600" />
          <div className="h-0.5 w-4 bg-gray-600" />
          <div className="h-0.5 w-4 bg-gray-600" />
        </div>
        <NavBarLink
          title={'Basket'}
          onClick={() => router.push('/products/basket')}
        />
      </div>
    </div>
  )
}

export default NavBar
