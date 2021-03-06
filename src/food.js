import React,{useState} from "react";

function Food(props){
    
    return(
        <div className="col-md-4 mb-4">
            <div className="column-image" style={{backgroundImage:"url('" + props.image + "')"}}>
                <div className="hover">
                    <h3 className="white">{props.name}</h3>
                    <p className="hide white"
                    dangerouslySetInnerHTML={{ __html: props.description}} >
                    </p>
                </div>
            </div>
        </div>
    );
  }
  export default Food;
  