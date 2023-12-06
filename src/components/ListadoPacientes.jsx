import Paciente from './Paciente'

export default function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
            {pacientes && pacientes.length > 0 ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Administra tus {''}
                        <span className='font-bold text-indigo-600'>
                            Pacientes
                        </span>
                    </p>

                    {
                        pacientes.map(paciente => (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))
                    }
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Comienza agregando tus pacientes {''}
                        <span className='font-bold text-indigo-600'>
                            y aperecerán en este lugar
                        </span>
                    </p>
                </>
            )}

        </div>
    )
}
