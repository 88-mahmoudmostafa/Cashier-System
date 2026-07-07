
import '../App.css'
import {useCard} from './Context'

function Header() {

  const {time}=useCard()

  return (
  
    <div className='header'>
      <div className='time'>
             <span>{new Date().toLocaleDateString('en-us')}</span>&&
         <span>{time.toLocaleTimeString('en-us')}</span>
      </div>
      
        <header>
        <h2>products  </h2>
        <div className='bi'>
          <h3>Bill</h3>
      

        </div>
       </header>
    </div>
  
  )
}

export default Header