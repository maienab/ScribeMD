import { useState } from 'react'
import axios from 'axios';
import PatientInput from './components/PatientInput';
import UserInfo from './components/UserInfo';

import './App.css'




function App() {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [phone, setPhone] = useState("")
  const [reason, setReason] = useState("")
  const [urgency, setUrgency] = useState("")



  const handleSubmit = async (text: string) => {
    if (text) {
      const result = await axios.post("http://localhost:3000/api/patient-info", {
        textMessage: text
      })
      setName(result.data.name)
      setDate(result.data.date_of_birth)
      setPhone(result.data.callback_phone_number)
      setReason(result.data.reason_for_call)
      setUrgency(result.data.urgency)
    }
  }

  return (

    <div>
      <PatientInput onSubmit={handleSubmit} />
      <UserInfo
        name={name}
        date={date}
        phone={phone}
        reason={reason}
        urgency={urgency}
      />
    </div>
  )
}

export default App
