import { useState } from 'react';
import logo from './assets/images/logo.png';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const logos = [

  logo,
  logo,
  logo,
  logo

]

function App() {

  const [selection, setSelection] = useState(0);

  function nextPrev(reference){

    if(selection + reference < 0){
      setSelection( logos.length - 1 );
    }
    else if(selection + reference === logos.length){
      setSelection( 0 );
    }
    else{
      setSelection( selection +  reference);
    }

  }

  return (
    <div className="App">
      <main className="main">
        <button className="button" onClick={ ()=> nextPrev(-1) }>
          <BsArrowLeftCircleFill />
        </button>
        <div className="logos">
          {
            logos.map((item, id)=>{
              return(

                <div className="logos__container" key={id} style={{ opacity: selection !== id ? ".25" : "1" }}>
                  <img className="logos__img" src={item} />
                </div>

              )
            })
          }
        </div>
        <button className="button" onClick={ ()=> nextPrev(1) }>
          <BsArrowRightCircleFill />
        </button>
      </main>
    </div>
  );
}

export default App;
