import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import EditProject from '../EditProject'

const EditStepper = () => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const steps = [
    {
      id: 'edit_Project',
      title: 'Edit Project',
      subtitle: '',
      content: <EditProject stepper={stepper} type='wizard-horizontal' />
    }
  ]

  return (
    <div className='horizontal-wizard'>
      <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
    </div>
  )
}

export default EditStepper