import {useCard} from './Context'
import '../App.css'
function Product() {
    const {setSearch,toadd,search,filtered}=useCard()

  return (
       <div className='prrr'>
        <div className='inpuut'>
       <input value={search} type='text'  placeholder='search'  className='search' 
        onChange={(e)=>{ setSearch(e.target.value) }}/>
        </div>
        
        <div className='proser'>
        {filtered.map(p=>
            <div key={p.id} className='mas'>
              <div className='ff'>
                    <h2>{p.title.slice(0,4)}</h2>
                    <h2>{p.price.toFixed(1)}</h2>
              </div>
                    
                    <div>
                      <button onClick={()=>toadd(p)}>Add</button>
                    </div>
                  
                
            </div>
        )}
      </div>

  
     </div>
  )
}

export default Product