import axios from 'axios';
import { useEffect, useState } from 'react';
import dotenv from 'dotenv';

dotenv.config();

function App() {
  const [student, setStudent] = useState(null);

  console.log('student', student);

  useEffect(async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    console.log('API_URL', API_URL);
    try {
      const response = await axios.get(`${API_URL}/students/random`);
      const student = response.data;
      if (!student) {
        alert('Xablau! Não há estudantes cadastrados para o sorteio!');
      } else {
        setStudent(student);
      }
    } catch (error) {
      console.log('error', error);
      alert('Não foi possível realizar o sorteio!');
    }
  }, []);

  return student ? <h1>{student.name}</h1> : 'Carregando...';
}

export default App;
