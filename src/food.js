import React from "react";

function Food(){
    return(
      <div className="food">
        <h1 className="text-center red my-4">FOOD RELATED</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="column-image">
                <div className="hover">
                    <h3 className="white">FRUIT TART</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="column-image">
              <div className="hover">
                    <h3 className="white">FRUIT TART</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="column-image">
              <div className="hover">
                    <h3 className="white">FRUIT TART</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Food;
  