
import AcnecdoteForm from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />
      <AcnecdoteForm />
    </div>
  )
}

export default App