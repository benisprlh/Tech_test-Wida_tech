import { RouterProvider } from "react-router-dom"
import router from "./router/route"

function App() {

  return (
    <main className="">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
