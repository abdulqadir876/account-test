import React from 'react'

const Task = ({taskName, time, usd, xml}) => {

    return (
        <div className="container ">
            <div class="card shadow-lg"  >
                <div class="card-body">
                    <h5 class="card-title">{taskName}</h5>

                    <div className="footer">
                        <div className="d-flex justify-content-between" >
                            <p href="#" class="card-link text-black">{time} EURT</p>
                            <p href="#" class="card-link text-black ">{usd} USD</p>
                            <p href="#" class="card-link text-black">{xml} XML</p>
                            

                        </div>
                    </div>
                </div>
            </div>
               
     </div>
        
    )
}

export default Task;
