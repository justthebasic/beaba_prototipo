import { Navbar } from '../../components/navbar/Navbar'
// import { TableArquivos } from '../components/table/Table'
import { TemplateList } from '../../components/table/TemplateList'

export const TemplatesDisponiveis = () => {
  return (
    <>
      <div className='flex h-screen font-sans '>
        <div className='fixed h-screen'>
          <Navbar />

        </div>

        <div className='flex-auto ml-64 p-4'>
          <div className='text-center text-2xl m-16'>
            <h1>Templates Disponiveis</h1>
          </div>


            <TemplateList />


        </div>
      </div>

    </>
  )
}
