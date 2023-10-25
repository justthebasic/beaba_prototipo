import { Navbar } from '../../components/Navbar'
import { Input } from '../../components/input/Input'

export const Upload = () => {
    return (
        <>
            <div className='flex h-screen font-sans'>
                <div className=''>
                    <Navbar />
                </div>
                <div className=' w-1/2 mx-auto '>
                    <div className='text-2xl m-16 text-center'>
                        <h1>Upload</h1>
                    </div>
                    <div className='flex my-10'>
                        <h1 className='p-2'>Template:</h1>
                        <select id="template" className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 h-1/4 p-2.5 dark:bg-gray-200  dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Escolher templates disponiveis</option>
                            <option value="US">Template1</option>
                            <option value="CA">Template2</option>
                            <option value="FR">Template3</option>
                            <option value="DE">Template4</option>
                        </select>
                    </div>
                    <div className='flex my-10'>
                        <h1 className='p-2'>Nome:</h1>
                        <Input />
                    </div>
                    <div className='flex'>
                        <h1 className='p-2'>Adicionar arquivo:</h1>
                        <div className='rounded bg-green-600 px-4 py-2 text-white hover:bg-green-500'>

                            <button>Arquivo</button>
                        </div>
                    </div>
                <div className='m-auto text-center justify-center flex '>
                    <div className='rounded p-6 text-center mt-10 flex justify-center items-center bg-green-500 text-white font-bold text-lg hover:bg-green-600'>
                        <button>Enviar Arquivo</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}