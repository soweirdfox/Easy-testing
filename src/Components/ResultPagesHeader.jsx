import React from "react";
import Search from "./Search/Search"
import STSorting from "./STSorting/STSorting"
import Button from "./Button";

function ResultPagesHeader(){
    return(
       <div className="mainBtn">
         <Search />
         <STSorting />
         <div className="reload-btn-dev">
            <Button btnName="Reload tests" color="var(--light-color)"/>
            
          </div>
       </div>
    )
};

export default ResultPagesHeader;