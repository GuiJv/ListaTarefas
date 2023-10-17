import Image from 'next/image'
import styles from './page.module.css'
import AddTasks from './components/AddTasks'
import ToDos from './components/ToDos'

export default function Home() {
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
