// export const Header = () => {
//   return <header className="">Header</header>
// }

// components/Header.tsx

import Image from 'next/image'
import Link from 'next/link'

const logoSrc = '@/app/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <Link href="/" passHref>
        <Image
          src={logoSrc}
          alt="Logo"
          width={50}
          height={50}
          className="mr-2"
        />
        <span className="text-lg font-bold">Minha Empresa</span>
      </Link>

      <Link href="/" passHref>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="ml-1">Carrinho</span>
      </Link>
    </header>
  )
}

export default Header
