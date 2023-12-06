import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'


export default function App() {

  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(INITIAL);
  const [paciente, setPaciente] = useState({});



  const eliminarPaciente = id => {
    if (window.confirm('¿Estas seguro que deseas eliminar este paciente?')) {
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id) // traer un listado sin el id  eliminado..
      setPacientes(pacientesActualizados)
      alert('Paciente eliminado')
    }
  }

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}
