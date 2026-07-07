import  {createContext,useContext,useEffect,useState} from 'react'

    const  Contact=createContext()
function Context({children}) {
    const [card,setCard]=useState([]);
    const[products,setProducts]=useState([])
   
    const [search,setSearch]=useState("")
    const [time,setTime]=useState(new Date())
    
  useEffect(()=>{
          // fetch('https://fakestoreapi.com/products//90')
          fetch("https://dummyjson.com/products?limit=100")
          .then(res=>res.json())
          .then(data=>setProducts(data.products))
  },[])

    // add
      const toadd=(prodect)=>{
        const front =card.find(item=> item.id===prodect.id);
        if(front){
            setCard(card.map(item=>(
                item.id===prodect.id ?{...item,qty:item.qty+1}:item
                
            )))
        }else{
            setCard([...card,{...prodect,qty:1}])
        }
      }
      // print
      const  perint=()=>{
        window.print()
      }
        // delete
      const  remove=(id)=>{
        setCard(card.filter(item=>item.id !==id))
      }
      // totalnp
      const total= card.reduce((sum,item)=>sum+item.price,0)
      // add+1
      const mone=(id)=>{
        setCard(card.map(item=>(
            item.id==id?{...item,qty:item.qty+1}:item
        )))
      }
      //  add-1
       const pround=(id)=>{
        setCard(card.map(item=>(
            item.id==id &&item.qty>1 ?{...item,qty:item.qty-1}:item
        )))
       }

      //  time
      useEffect(()=>{
        const interval=setInterval(()=>{
        setTime(new Date())
      },1000)
      return()=>clearInterval(interval)
      },[])
      // filter
     const filtered=
      products.filter(p=>(
        p.title.toLowerCase().includes(search.toLowerCase())
      ))
    //  
     

    

  return (
    <Contact.Provider value={{filtered,products,time,setSearch,search,toadd,remove,total,mone,pround,card,setCard,perint}}>
         {children}
    </Contact.Provider>
  )
}
 export const useCard=()=>useContext(Contact)

export default Context