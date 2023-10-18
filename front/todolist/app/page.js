import AddTasks from './components/AddTasks'
import ToDos from './components/ToDos'
import ApiRequests from './api'
import styles from './styles/page.module.css'

export default async function Home() {
  const apiRequest = new ApiRequests
  const body = await apiRequest.getAllToDos()

  return (
    <main>
      <div className= {styles.mainDiv}>
        <h1 className={styles.title}>To do List</h1>
        <AddTasks />
        <ToDos body={ body } />
      </div>
    </main>
  )
}
