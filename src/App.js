import React from 'react'
import './App.css'
import Product from './Product/Product'


// export default function App() {
//   return (
//     <div className='container'>
//       <Product/>
//       <Product/>
//       <Product/>
//     </div>
    
//   )
// }


class App extends React.Component{
  render(){
    return(
      <div className='container'>
      <Product/>
      <Product/>
      <Product/>
    </div>
    )
  }
}
export default App