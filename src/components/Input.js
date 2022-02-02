import React ,{useState} from 'react';



export default function Input()
{
    const [text,setText]=useState('');
    const handleOnchange=(event)=>
    {
        console.log("on");
        setText(event.target.value);
    }
     const handleUpper=()=>
     {   let x=text.toUpperCase();
        
         setText(x);
     }
     const handleLower=()=>
     {   let x=text.toLowerCase();
         setText(x);
     }
     const handleClear=()=>
     {   
         setText("");
     }

     const handleCopy=()=>
     {
         navigator.clipboard.writeText(text);
     }

    return(
       <> <div className='my-3'>
            <h1>Text-Converter</h1>
        <div className="container mb-3">
           
           
  <textarea className="form-control" placeholder="Enter your text here" value={text} onChange={handleOnchange} id="Box" rows="8" width="50%" aria-label="With textarea"></textarea>
</div>
<button type="button" class="btn btn-info mx-2 my-2" onClick={handleCopy}>Copy</button>
<button type="button" class="btn btn-info mx-2 my-2" onClick={handleUpper}>To Upper</button>
<button type="button" class="btn btn-info mx-2 my-2" onClick={handleLower}>To Lower</button>
<button type="button" class="btn btn-info mx-2 my-2"onClick={handleClear}>Clear</button>
</div>
<div className='container my-3'>
<h2>Your Text Details</h2>
<p>{text.split(" ").filter((element)=>{return element.length!==0;}).length} Words and {text.length} Characters</p>

</div>
</>
    );
}
