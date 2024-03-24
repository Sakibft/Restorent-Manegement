import { useState } from 'react';
import './App.css'
import Banner from './components/Banner';
import Cards from './components/Cards';
import Nav from './components/Nav';
import Recipes from './components/Recipes';
import Table from './components/Table';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

 
function App() {
  const [lcard,setLcard] = useState([]);
  const handleWantTocok = (card) =>{
    const isExsiested = lcard.find((item)=>item.id == card.id);
    if(isExsiested){
      toast.success("It's all ready selected")
    }
    else{
      setLcard([...lcard,card])
    }
  }
  const [cook,setCurrentlyCoking] = useState([]);
   
  const handlePreparing = (id,item) =>{
    const delate = lcard.filter((item)=> item.id != id)
    setLcard(delate)
    setCurrentlyCoking([...cook,item])
    // console.log(item);
  }
  //  console.log(lcard);
  return (
    <>

    <div className='container mx-auto'>
      {/* nav */}
      <div>
    <Nav></Nav>
      </div>
      {/* banner */}
      <div>
        <Banner></Banner>
      </div>
      {/* main */}
      <div>
        <Recipes></Recipes>
      </div>
     
      <div className='lg:flex justify-between mt-10'>
        <Cards 
        handleWantTocok={handleWantTocok}
     
        ></Cards>
        <Table 
           lcard={lcard}
           cook={cook}
           handlePreparing={handlePreparing}
            
        ></Table>
      </div>
     
 
      <ToastContainer />
    </div>
     
    </>
  )
}

export default App
