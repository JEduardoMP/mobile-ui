import Head from 'next/head'
import Link from 'next/link'
import HandlerPage from '../components/pageIndex';

export default function Documentos () {
  const docCargado = [
    {cargado: true},
    {cargado: false}
  ]
  return (
    <div className="w-screen font-poppins">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <header className="shadow-lg py-4 flex justify-center items-center">
        <Link href={HandlerPage()}>
        <svg className="absolute left-5" xmlns="http://www.w3.org/2000/svg" width="18.846" height="18.766" viewBox="0 0 18.846 18.766">
          <path id="arrow-left" d="M9.74,51.568l.3-.3a.5.5,0,0,0,0-.714L2.529,43.048H18.341a.5.5,0,0,0,.5-.5v-.421c0-.279-.226-.5-16.317-.5l7.509-7.509a.5.5,0,0,0,0-.714l-.3-.3a.5.5,0,0,0-.714,0L.148,41.976a.5.5,0,0,0,0,.714l8.878,8.878A.5.5,0,0,0,9.74,51.568Z" transform="translate(0 -32.95)"/>
        </svg>
        </Link>
        <h2>
          Proceso de compra
        </h2>
      </header>

      <main className="my-8 mb-24 divide-y divide-lightGray">

        <div className="w-container items-center content-center my-0 mx-auto">
          <div className="flex items-center mb-3">
            <h3><b>1. INE o pasaporte</b></h3>
            <button>
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path id="Trazado_362" data-name="Trazado 362" d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Zm0-2a8,8,0,1,0-5.657-2.343A8,8,0,0,0,10,18ZM9,5h2V7H9ZM9,9h2v6H9Z" fill="#3988f6"/>
            </svg>
            </button>
          </div>
          <button className="py-3 rounded-md bg-gray text-white font-light w-full">
            Subir archivo
          </button>
          {docCargado[0].cargado === true ? 
          (<p className="text-blue">Deposito_Royer.pdf</p>) :
          (<span></span>)}
        </div>

        <div className="w-container py-2 pt-4 mx-auto my-4">
          <div className="flex items-center mb-3">
            <h3><b>2. Comprobante de domicilio.</b></h3>
            <button>
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path id="Trazado_362" data-name="Trazado 362" d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Zm0-2a8,8,0,1,0-5.657-2.343A8,8,0,0,0,10,18ZM9,5h2V7H9ZM9,9h2v6H9Z" fill="#3988f6"/>
              </svg>
            </button>
          </div>
          <button className="py-3 rounded-md bg-gray text-white font-light w-full">
            Subir archivo
          </button>
          {docCargado[1].cargado === true ? 
          (<p className="text-blue">Deposito_Royer.pdf</p>) :
          (<span></span>)}
        </div>

        <div className="w-container py-2 pt-4 mx-auto mb-4">
          <div className="flex items-center mb-3">
            <h3><b>3. Acta de matrimonio si aplica</b></h3>
            <button>
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path id="Trazado_362" data-name="Trazado 362" d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Zm0-2a8,8,0,1,0-5.657-2.343A8,8,0,0,0,10,18ZM9,5h2V7H9ZM9,9h2v6H9Z" fill="#3988f6"/>
              </svg>
            </button>
          </div>
            <button className="py-3 rounded-md bg-gray text-white font-light w-full">
              Subir archivo
            </button>
            {docCargado[1].cargado === true ? 
            (<p className="text-blue">Deposito_Royer.pdf</p>) :
            (<span></span>)}
        </div>

          <div className="w-container py-2 pt-4 mx-auto">
            <div className="flex items-center mb-3">
              <h3><b>4. CURP</b></h3>
              <button>
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path id="Trazado_362" data-name="Trazado 362" d="M10,20A10,10,0,1,1,20,10,10,10,0,0,1,10,20Zm0-2a8,8,0,1,0-5.657-2.343A8,8,0,0,0,10,18ZM9,5h2V7H9ZM9,9h2v6H9Z" fill="#3988f6"/>
                </svg>
              </button>
            </div>
            <button className="py-3 rounded-md bg-gray text-white font-light w-full">
              Subir archivo
            </button>
            {docCargado[1].cargado === true ? 
            (<p className="text-blue">Deposito_Royer.pdf</p>) :
            (<span></span>)}
          </div>
      </main>
      <div className="w-container mx-auto flex justify-between">
        <Link href={HandlerPage()}>
        <button className="uppercase text-purple py-2 w-medium rounded-md border-2 border-purple">
          Cancelar
        </button>
        </Link>

        <button className="uppercase bg-purple text-white py-2.5 w-medium rounded-md">
          Guardar
        </button>
      </div>
      <br/>
    </div>
  )
}