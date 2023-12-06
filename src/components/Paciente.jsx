import React from 'react'

export default function Paciente({ paciente, setPaciente, eliminarPaciente }) {
    //destructuring
    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    return (

        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>paciente:{' '}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:{' '}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>email:{' '}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:{' '}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:{' '}
                <span className='font-normal normal-case'>
                    {sintomas}
                </span>
            </p>

            {/* Agregar button actualizar y eliminar con iconos */}

            <div className='flex justify-between mt-5'>
                <button
                    type='button'
                    className='py-2 px-10 bg-indigo-600 rounded-lg text-white font-bold hover:bg-indigo-700 uppercase text-sm transition duration-300 ease-in-out mr-5'
                    onClick={() => setPaciente(paciente)}
                > Actualizar</button>

                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 rounded-lg text-white font-bold hover:bg-red-700 uppercase text-sm transition duration-300 ease-in-out'
                    onClick={() => eliminarPaciente(id)}
                > Eliminar</button>

            </div>

        </div>

    )
}
