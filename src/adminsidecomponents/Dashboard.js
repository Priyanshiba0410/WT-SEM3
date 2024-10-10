import React from 'react';
import './Dashboard.css'; // Import CSS file for styling

const Dashboard = () => {
  return (
    <>
       <div class="container" style={{marginTop:"160px",marginLeft:"287px",marginTop:"240px"}}>
        <h3>Overview</h3>
        <div class="box1">

            <div class="item">
                <div class="items">Today's</div> 
                <span class="items1">Check-in</span> 
                <span class="tett">23</span> 
                

            </div>
            <div class="item">
                <div class="items">Today's</div> 
                <span class="items1">Check-out</span> 
                <span class="tett">13</span> 
            </div>
            <div class="item">
                <div class="items">Total</div> 
                <span class="items1">in-hotel</span>
                <span class="tett">60</span>  
            </div>
            <div class="item">
                <div class="items">Total</div>
                <span class="items1">avalible room</span>
                <span class="tett">10</span>  
            </div>
            <div class="item">
                <div class="items">Total</div>
                <span class="items1">Occupied room</span> 
                <span class="tett">70</span> 
            </div>
        </div>
    </div> 
       <div class="container1" style={{marginLeft:"290px"}}>
        <h3>Rooms</h3>
        <div class="box2">

            <div class="item1">
                <div class="items1 margintop">2 Deals</div> 
                <div class="items2 margintop">single sharing</div> 
                <span class="edit2">2</span>
                <span>/30</span>
                <div class="col margintop">
                    <span class="edit3">$568</span>
                    <span>/day</span>
                </div>

            </div>
            <div class="item1">
                <div class="items1 margintop">2 Deals</div> 
                <div class="items2 margintop">duoble sharing</div> 
                <span class="edit2">2</span>
                <span>/35</span>
                <div class="col margintop">
                    <span class="edit3">$1068</span>
                    <span>/day</span>
                </div>
            </div>
            <div class="item1">
                <div class="items1 margintop">Total</div> 
                <div class="items2 margintop">tripal sharing</div>
                <span class="edit2 ">2</span>
                <span>/25</span>
                <div class="col margintop">
                    <span class="edit3">$1568</span>
                    <span>/day</span>
                </div>
            </div>
            {/* <div class="item1">
                <div class="items1 margintop">Total</div>
                <div class="items2 margintop">vip Suit</div>
                <span class="edit2">2</span>
                <span >/10</span>
            
            </div> */}
        </div>     
    </div>
    <div class="container2" style={{marginLeft:"230px"}}>
        <div class="box3">

            <div class="item2">
                <div class="items2 margintop"><span>Room status</span></div> 
                
                <div class="cont">
                    <div class="itm" id="item1">Occupied room</div>
                    <div class="itm" id="item2">104</div>
                    <div class="itm" id="item3">Avaliable room</div>
                    <div class="itm" id="item4">20</div>
                    
                </div> 
                <div class="cont">
                    <div class="itm" id="item1">clean</div>
                    <div class="itm" id="item2">19</div>
                    <div class="itm" id="item3">clean</div>
                    <div class="itm" id="item4">30</div>
                    
                </div> 
                <div class="cont">
                    <div class="itm" id="item1">Dirty</div>
                    <div class="itm" id="item2">4</div>
                    <div class="itm" id="item3">Dirty</div>
                    <div class="itm" id="item4">9</div>
                    
                </div> 
                <div class="cont">
                    <div class="itm" id="item1">inspected</div>
                    <div class="itm" id="item2">60</div>
                    <div class="itm" id="item3">inspected</div>
                    <div class="itm" id="item4">30</div>
                    
                </div> 
            </div>
            
        </div>     
    </div>

    </>
  );
};

export default Dashboard;
