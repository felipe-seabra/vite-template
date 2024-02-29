import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1 className="font-bold">Home</h1>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
