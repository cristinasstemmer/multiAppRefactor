import  { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QRCodeGenerator, IPAddressFinder, MovieSearchEngine, TodoApp, QuizApp, LanguageTranslator, Login } from './components'
import "./App.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/qrcode-generator" element={<QRCodeGenerator />} />
          <Route path="/ipaddress-finder" element={<IPAddressFinder />} />
          <Route path="/movie-search-engine" element={<MovieSearchEngine />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/quiz-app" element={<QuizApp />} />
          <Route path="/language-translator" element={<LanguageTranslator />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App