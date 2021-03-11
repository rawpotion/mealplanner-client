import React, { FC } from 'react'
import Link from 'next/link'

interface NavBarLinkProps {
  title: string
  onClick?: () => void
}

export const NavBarLink: FC<NavBarLinkProps> = ({ title, onClick }) => (
  <Link href="/">
    <a
      className="uppercase text-md cursor-pointer hover:underline"
      onClick={onClick}
    >
      {title}
    </a>
  </Link>
)
