import Link from 'next/link'
export default function NavBar () {
  return (
    <div className="flex justify-between items-center px-6 py-6 text-black">
      <h4 className="text-md font-bold">LOGO</h4>
      <div className="flex justify-between w-2/5">
        <svg className="mr-6 h-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="22.365" height="22.365" viewBox="0 0 22.365 22.365">
          <path id="search" d="M15.83,15.83a9.273,9.273,0,1,1,2.716-6.558A9.244,9.244,0,0,1,15.83,15.83l5.036,5.035Z" transform="translate(0.75 0.75)" fill="none" stroke="#848484" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        </svg>
        <Link href="./favoritos">
        <svg className="mr-6 h-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="25.946" height="22.886" viewBox="0 0 25.946 22.886">
          <path id="Favoritos" d="M24.422,6.344a6.3,6.3,0,0,0-8.912,0L14.3,7.558,13.081,6.344a6.3,6.3,0,1,0-8.912,8.912L5.383,16.47,14.3,25.383l8.912-8.912,1.214-1.214a6.3,6.3,0,0,0,0-8.912Z" transform="translate(-1.323 -3.497)" fill="none" stroke="#9482fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
        </Link>
        <Link href="./documentos">
        <img src="/IMG/avatar.jpg" className="h-8 rounded-circle w-auto h-6" />
        </Link>
      </div>
    </div>
  )
}