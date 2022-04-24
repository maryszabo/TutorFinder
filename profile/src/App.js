//Original Code from 
//https://reactjsexample.com/an-example-of-a-schema-based-form-system-for-react/
//Must run the following command to run this
//    npm install --save formik yup
import { useState } from 'react'
import { AdvancedForm } from './components/forms/forms/AdvancedForm'

export default function App() {
  const [formValues, setFormValues] = useState([])

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)
    setFormValues(values)
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitting(false)
  }

  const formSchema = [
    { name: 'name', label: 'Name', componentType: 'text', required: true },
    { name: 'email', label: 'Email', componentType: 'text', required: true },
    //{ name: 'playable', label: 'Playable', componentType: 'checkbox' },
    {
      name: 'userType',
      label: 'User Type',
      componentType: 'radioGroup',
      options: [
        { label: 'Student', value: 'student' },
        { label: 'Tutor', value: 'tutor' },
        { label: 'Both', value: 'both' },
      ],
    },
    {
      name: 'preferedMeetingMethod',
      label: 'Prefered Meeting Method',
      componentType: 'select',
      options: [
        { label: 'Zoom', value: 'zoom' },
        { label: 'Phone Call', value: 'phoneCall' },
        { label: 'On Campus', value: 'onCampus' },
      ],
    },
    {
      name: 'preferedLearningStyle',
      label: 'Prefered Learning Style',
      componentType: 'select',
      options: [
        { label: 'Visual', value: 'visual' },
        { label: 'Aural', value: 'aural' },
        { label: 'Reading/Writing', value: 'readOrWrite' },
        { label: 'Kinesthetic', value: 'kinesthetic' },
      ],
    },
    /*{
    {
      name: 'spell',
      label: 'Spell',
      componentType: 'select',
      options: [
        { label: 'Fire', value: 'fire' },
        { label: 'Ice', value: 'ice' },
      ],
      condition: { key: 'class', value: 'wizard', operator: '=' },
    },
    
      name: 'description',
      label: 'Description',
      componentType: 'textarea',
    },
    */
  ]

  return (
    <>
      <h1>User Profile</h1>

      <div className="flex">
        <div className="form section">
          <AdvancedForm schema={formSchema} onSubmit={handleSubmit} />
        </div>
        <div className="results section">
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div>
      </div>
    </>
  )
}