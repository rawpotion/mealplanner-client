import { Component, FC } from 'react'
import Link from 'next/link'

interface NavBarLinkProps {
  icon?: Component
  to: string
}
const NavBarLink: FC<NavBarLinkProps> = (props) => (
  <Link href={props.to}>
    <span className="hover:text-blue-700 cursor-pointer w-full block py-1 my-2">
      {props.icon && <span className="pr-3">{props.icon}</span>}
      <a className="uppercase text-sm font-medium ">{props.children}</a>
    </span>
  </Link>
)

const DashboardLayout: FC = ({ children }) => (
  <div className="grid grid-cols-12 min-h-screen box-border gap-4 bg-blue-500">
    <nav className="col-span-3 bg-gray-100 shadow-xl box-border">
      <div className="px-4 py-6">
        <Link href="/">
          <a className="text-l font-bold uppercase text-gray-600 cursor-pointer hover:text-gray-800">
            Butik KærligHilsen
          </a>
        </Link>
        <hr className="my-6" />
        <div>
          <h2 className="uppercase text-gray-500 text-sm pb-4 font-semibold select-none">
            Online
          </h2>
          <ul>
            <li>
              <NavBarLink to="/orders">Orders</NavBarLink>
            </li>
            <li>
              <NavBarLink to="/shipping">Shipping</NavBarLink>
            </li>
            <li>
              <NavBarLink to="/invoicing">Invoicing</NavBarLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main className="col-span-9 ">{children}</main>
  </div>
)

export default DashboardLayout
