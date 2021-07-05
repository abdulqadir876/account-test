import React from 'react'
import './tem.css'

const Templete = () => {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <h2>My Accounts</h2>
                </div>
                <div className="buttons-nav">
                    <button className="btn">Switch testnet</button>
                    <i class="fa fa-cog text-white" style={{fontSize:'30px', marginLeft:'10px'}} aria-hidden="true" ></i>
                </div>
            </header>

            {/*body test  */}
            <section className=" d-flex">
                <div className="cols shadow-lg">
                    <i class="fa fa-plus"/>
                    <h3>Add Account</h3>
                </div>
                <div className="cols">
                    <h3>My Business Account</h3>
                    <div className="text">
                        <p>0 <span>EUROF</span></p>
                        <p>4.9998 <span>XLM</span></p>
                    </div>
                </div>
                <div className="cols">
                <h3>Personal Safe</h3>
                    <div className="text">
                        
                        <p>5.9999 <span>XLM</span></p>
                    </div>
                </div>
                <div className="cols">
                <h3>Discretionary Funds</h3>
                    <div className="text">
                        <p>0.5755 <span>EUROF</span></p>
                        <p>0.2299 <span>USD</span></p>
                        <p>673.1150 <span>XLM</span></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Templete
