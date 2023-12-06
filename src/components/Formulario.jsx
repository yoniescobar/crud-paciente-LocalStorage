import { useState, useEffect } from 'react'
import Error from './Error'

export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = e => {
        e.preventDefault()
        // Validar Formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Hay campos vacios')
            setError(true)
            return
        }
        setError(false)
        // Crear objeto
        const ObjetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }
        // Enviar objeto al componente principal
        // setPacientes([...pacientes, ObjetoPaciente])

        //validando si es un paciente nuevo o uno existente

        if (paciente.id) {
            //Editando el registro
            ObjetoPaciente.id = paciente.id // Agregando el id al objeto paciente para que no se pierda al actualizar
            const pacientesActualizados = pacientes.map(paciente => paciente.id === ObjetoPaciente.id ? ObjetoPaciente : paciente) // Recorriendo el arreglo de pacientes y si el id del paciente es igual al id del paciente que se esta editando entonces se actualiza el paciente, de lo contrario se deja el paciente como esta 
            //objetoPaciente es el paciente que se esta editando y paciente es el paciente que se esta recorriendo en el map
            setPacientes(pacientesActualizados) // Actualizando el estado de pacientes con el arreglo de pacientes actualizados
            setPaciente({}) // Reiniciando el estado de paciente para que no se quede el paciente que se esta editando

        } else {
            // Agregando el registro por es la primera vez que se agrega un paciente 
            ObjetoPaciente.id = generarId()
            setPacientes([...pacientes, ObjetoPaciente])
        }

        // Reiniciar Formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    }

    // ----------- useEffect  para actualizar el formulario -------------

    useEffect(() => {
        if (Object.keys(paciente).length > 0) { // Object.keys(paciente).length > 0 significa que el objeto paciente tiene elementos
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Paciente</h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade Pacientes y {''}
                <span className='font-bold text-indigo-600'>
                    Administrarlo</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-lg py-10 px-5'
            >
                {/* {error && <Error mensaje='Todos los campos son obligatorios' en children puede pasar varias etiquetas html />} */}
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase text-sm font-bold mt-5 my-1'>
                        Nombre Mascota
                    </label>
                    <input
                        id='mascota'
                        type='text'
                        placeholder='Nombre Mascota'
                        className='mt-2 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase text-sm font-bold mt-5 my-1'>
                        Nombre Propietario
                    </label>
                    <input
                        id='mascota'
                        type='text'
                        placeholder='Nombre del Propietario'
                        className='mt-2 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase text-sm font-bold mt-5 my-1'>
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        placeholder='Email Propietario'
                        className='mt-2 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase text-sm font-bold mt-5 my-1'>
                        Alta
                    </label>
                    <input
                        id='alta'
                        type='date'
                        className='mt-2 border-2 border-gray-300 bg-white h-10 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase text-sm font-bold mt-5 my-1'>
                        Alta
                    </label>
                    <textarea
                        id='sintomas'
                        className='mt-2 border-2 border-gray-300 bg-white h-20 px-2 rounded-lg text-sm focus:outline-none focus:border-primary w-full'
                        placeholder='Describa los síntomas del paciente'
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className='bg-indigo-800 w-full mt-5 p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition duration rounded-lg focus:outline-none focus:shadow-outline hover:shadow-md hover:text-gray mb-10'
                >{paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}</button>
            </form>
        </div>
    )
}
