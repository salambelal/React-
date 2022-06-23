
// let sortedAlphabet = alphabet.sort();
export default function sortalpha(){

    const alphabet = ["Z","A","Q", "B", "C", "Y","S","W"];
 
 
 
 
 
 
 
 
     const strAscending = alphabet.sort( );
   console.log(strAscending);
 
 
   return (
     <div>
       {strAscending.map(alphabet => {
         return (
        <div> 
         <h2> {alphabet}</h2>
         </div>
         );
       })}
     </div>
   );
  }
 