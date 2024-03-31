import { Route, Routes } from 'react-router'
import { MainPage, CartPage, NotFound, PayPage } from '../pages'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route index path={'/'} element={<MainPage />} />
        <Route path={'/cart'} element={<CartPage />} />
        <Route path={'/pay-order'} element={<PayPage />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
