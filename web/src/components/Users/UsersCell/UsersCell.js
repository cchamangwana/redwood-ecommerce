import Users from '../Users'

export const QUERY = gql`
  query UsersQuery {
    users {
      id
      name
      email
      roles
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users }) => {
  return <Users users={users} />
}

