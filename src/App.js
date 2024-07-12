import Table from "./component/tables/tables";
import Button from "./component/button/button";
import OrderedList from "./component/lists/ordered";
import UnorderedList from "./component/lists/unordered";
import Image from "./component/images/images";
import Iplmatch from "./component/ipl/iplmatch";
import "./App.css"



function App() {
  return (
    <>
     {/* <h1>hello world</h1> 
      <Button></Button>
     <OrderedList></OrderedList>
     <UnorderedList></UnorderedList>
     <Table></Table>
     <Image></Image> */}

       <div className='navebar'>
        
      <p>IPL</p>
      <p>TEAMSNAMES</p>
      <p>PLAYERS</p>
       


      </div>

     <div className='cards'>
     <Iplmatch></Iplmatch>
     </div> 

    
     </>

  )
    
};
 export default App;

