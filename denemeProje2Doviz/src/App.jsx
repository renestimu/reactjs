
import './App.css'
import Currency from './companents/Currency'

function App() {
 // const [count, setCount] = useState(0)

  return (    
      <div   style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Currency></Currency>
      </div>     
  )
}

export default App
