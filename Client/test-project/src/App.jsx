import { RouterProvider } from "react-router-dom"
import router from "./router/route"

function App() {

  return (
    <main className="container mt-5">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
