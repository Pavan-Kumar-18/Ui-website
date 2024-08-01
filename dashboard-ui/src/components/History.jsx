import React from 'react'
import styled from 'styled-components'
import apple from "../assets/avatar.jpg"
import human1 from '../assets/Human1.jpg'
import human2 from '../assets/Human-2.jpg'
import human3 from '../assets/Human-3.jpg'
import human4 from '../assets/Human-4.jpg'

function History() {
    return (
        <Section>
        <div className="orders">
      <div className="orders__details">
          <div>
                <h4>Recent Orders</h4> 
              
          </div>
          <div> 
          <h6>Transection of last months</h6> 
            
          </div>
        </div>
        <div className="orders__table">
        <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Order No</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src={apple} alt="Apple" /></td>
          <td>1133475890</td>
          <td>$150.00</td>
          <td>Complete</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td><img src={human1} alt="Apple" /></td>
          <td>567499383</td>
          <td>$650.00</td>
          <td>Complete</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td><img src={human2} alt="Apple" /></td>
          <td>56486383</td>
          <td>$950.00</td>
          <td>Pending</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td><img src={human3} alt="Apple" /></td>
          <td>5473930</td>
          <td>$550.00</td>
          <td>Pending</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td><img src={human4} alt="Apple" /></td>
          <td>28464833</td>
          <td>$250.00</td>
          <td>Complete</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td><img src={human1} alt="Apple" /></td>
          <td>565736383</td>
          <td>$120.00</td>
          <td>Pending</td>
        </tr>
      </tbody>
    </table>
        </div>
        </div>
        </Section>
    )
}

export default History
const Section = styled.section`

.orders {
    margin-top: 4rem;
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 1rem ;

        div {
            display: flex;
            gap: 1rem;
           color: grey;
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        color: grey;
        table {
            border-collapse: collapse;
            width: 100%;
             td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
               
                img{
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 3rem;
            }
                
            }
            
        }
    }
}
`;