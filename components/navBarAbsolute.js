import Link from 'next/link'

export default function NavBarAbsolute () {
  return (
    <div className="absolute flex justify-between items-center z-40 top-4 min-w-full px-6 py-2 text-white">
      <h4 className="text-sm font-medium">LOGO</h4>
      <div className="w-16 flex justify-between text-white">
        <svg className="mr-6 h-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="22.365" height="22.365" viewBox="0 0 22.365 22.365">
          <path id="search" d="M15.83,15.83a9.273,9.273,0,1,1,2.716-6.558A9.244,9.244,0,0,1,15.83,15.83l5.036,5.035Z" transform="translate(0.75 0.75)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </svg>
        <Link href="./favoritos">
        <svg className="mr-6 h-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="23.225" height="20.449" viewBox="0 0 23.225 20.449">
          <path id="Favoritos" d="M22.373,6.172a5.716,5.716,0,0,0-8.086,0l-1.1,1.1-1.1-1.1A5.718,5.718,0,1,0,4,14.259l1.1,1.1,8.086,8.086,8.086-8.086,1.1-1.1a5.716,5.716,0,0,0,0-8.086Z" transform="translate(-1.573 -3.747)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </svg>
        </Link>
        <Link href="./documentos">
        <img src="/IMG/avatar.jpg" className="h-8 rounded-circle border-2 border-white" />
        </Link>
      </div>
    </div>
  )
}