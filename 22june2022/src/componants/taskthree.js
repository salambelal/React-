import { useState } from "react";
const arr=["Khozama","Mohammad","Lujain","Nada","Ayman"];


function Filter(){


    const [filteredList, setFilteredList] = new useState(arr);
    const filterBySearch = (event) => {
       
        const query = event.target.value;

        var updatedList = [...arr];
        
        updatedList = updatedList.filter((item) => {
          return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updatedList);
      };
      return (
        <div className="App">
          <div className="search-header">
            <div className="search-text">Search:</div>
            <input id="search-box" onChange={filterBySearch} />
          </div>
          <div id="item-list">
            <ol>
              {filteredList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      );
    }
    
      export default Filter;