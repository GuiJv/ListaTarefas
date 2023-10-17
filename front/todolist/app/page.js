import AddTasks from './components/AddTasks'
import ToDos from './components/ToDos'
import ApiRequests from './api'

export default async function Home() {
  const apiRequest = new ApiRequests
  const body = await apiRequest.getAllToDos()

  return (
    <main>
      <div>
        <h1>To do List</h1>
        <AddTasks />
        <ToDos body={ body } />
      </div>
    </main>
  )
}
