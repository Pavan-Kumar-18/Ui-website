import React from 'react'
import styled from 'styled-components'
import { AiOutlineMore } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import 'bootstrap-icons/font/bootstrap-icons.css';


function Analytic() {
    return (
        <Section>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                    <i class="bi bi-bag-fill"></i>
                    </div>
                    <div className="action">
                    </div>
                </div>
                <div className="transfer">
                    <h6>Total</h6>
                    <h6>Orders</h6>
                </div>
                <div className="money">
                    <h5>$1200</h5>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                    </div>
                    <div className="action">
                    <i class="bi bi-rocket-takeoff-fill"></i>
                    </div>
                </div>
                <div className="transfer">
                    <h6>Order's </h6>
                    <h6>Delivered</h6>
                </div>
                <div className="money">
                    <h5>$1200</h5>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                    <i class="bi bi-file-excel"></i>
                    </div>
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Order </h6>
                    <h6>Canceled</h6>
                </div>
                <div className="money">
                    <h5>$1500</h5>
                </div>
            </div>
            <div className="analytic ">
                <div className="design">
                    <div className="logo">
                        <GiTakeMyMoney />
                    </div>
                    <div className="action">
                    <AiOutlineMore />
                    </div>
                </div>
                <div className="transfer">
                    <h6>Total </h6>
                    <h6>Revenue</h6>
                </div>
                <div className="money">
                    <h5>$1500</h5>
                </div>
            </div>
         
          
         
           
        </Section>
    )
}

export default Analytic
const Section = styled.section `
    display: flex;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    margin: 0 60px;
    .analytic {
        justify-content: space-between;
        padding: 1rem 2rem 1rem 2rem;
        border-radius: 1rem;
        color: black;
        background-color: white;
        justify-content: space-evenly;
        align-items: center;
        transition: 0.5s ease-in-out;
        width: 170px;
       
        .design{
            display: flex;
            align-items: center;
            
            .logo {
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
               
                svg {
                    font-size: 2rem;
                }
            }
            .action {
                margin-left: 80px;
               svg{
                font-size: 1.5rem;
               }
            }

        }
        .transfer {
            margin-top: 20px;
            color: grey
        }
        .money {
            margin-top: 20px;  
        }
    }
`;