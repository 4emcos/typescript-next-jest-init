interface IUSer {
  name: string
  age: string
}

interface Props {
  user: IUSer
}

const User: React.FC<Props> = ({ user, children }) => {
  return (
    <div>
      <strong>Name: </strong> {user.name} <br />
      <strong>Age: </strong> {user.age} <br />
    </div>
  )
}

export default User
