import { useEffect, useState } from 'react'
import User from '../components/User'
import api from '../services/api'

interface IUSer {
  name: string
  age: string
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<IUSer[]>([])

  useEffect(() => {
    api.get<IUSer[]>('/users').then(response => {
      setUsers(response.data)
    })
  }, [])

  return (
    <div>
      {users.map(user => (
        <User key={user.age} user={user} />
      ))}
    </div>
  )
}

export default Home
