
import {useCard} from './Context'
import '../App.css'

function Card() {
    const {remove,total,card,mone,pround,perint,time}=useCard()
  return (
    <div className='crrr'>
    <div className='card'>
       
     
        <div className='container'>
             
       
        {card.length===0?<p className='wite'> you card is empty</p>
        :
        

               <div className='play'>
            
                <div className='hold'> 
                   <span>{time.toLocaleDateString('en-us')}</span>
                   <span>{time.toLocaleTimeString('en-us')}</span>
                </div>

                <h3 className='total'>{card.length>0?<p>total:{total}</p>:''}</h3>
            
                
            {card.map(item=>(
                <div key={item.id} className='played'>
                  <div className='slice'>
                    <h2>{item.qty}::</h2>
                    <h2>{item.title.slice(0,5)}</h2>
                    &&
                    <h2> { item.price.toFixed(3)}</h2>
            </div>
            <div className='botns'>
              <div>
                    <button onClick={()=>pround(item.id)} className='btn'>-</button>
                    <button onClick={()=>mone(item.id) } className='btn'>+</button>
                    </div>
                    <div>
                    <button onClick={()=>remove(item.id)}>delete</button>
                      </div>
                       </div>
                      <hr/>
                   
                   
                </div>
            ))}
            <button onClick={perint}>print</button>
    </div>
    
        }
</div>
 </div>
 </div>
     
  )
}

export default Card