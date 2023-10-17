import Image from 'next/image'
import styles from './page.module.css'
import AddTasks from './components/AddTasks'
import ToDos from './components/ToDos'
import getAllToDos from './api'

export default async function Home() {

  return (
    <main>
      <div>
        <h1>To do List</h1>
        <AddTasks />
        <ToDos />
      </div>
    </main>
  )
}
