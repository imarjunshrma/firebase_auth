
import Register from './auth/Register'
import Login from './auth/Login'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import ProtectedRoute from './auth/ProtectedRoute'
import About from './components/About'
function App() {
  const token=localStorage.getItem('token')
 
  return (
<BrowserRouter>
<Routes>
  <Route  element={<ProtectedRoute/>}>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  </Route>
  {
    token||(
      <>
      <Route path='/login' element={ <Login/>}/>
     <Route path='/register' element={  <Register/>}/>
      
      </>
    )
  }
<Route path='*' element={<Navigate to="/"/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
{/* <ProtectedRoute><Home/></ProtectedRoute> */}