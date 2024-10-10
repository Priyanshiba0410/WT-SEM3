import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <section id="home" style={{marginTop:"124px",marginLeft:"110px"}}>
            <h1 className="primary" style={{color:"white",display:"flex",alignItems:"center",objectFit:"contain"}}>A Best Place To Stay</h1>
            <p style={{color:"white"}}> W E L C O M E T O 5 ★ 2B50 H O T E L </p>
            <p style={{color:"white",fontSize:"18px"}}><b>We are an 81-room hotel in the heart of India country Jaypur.</b></p>
            <div className="btn"><b>About our Hotel!</b></div>
            <div className="section2">
                <div className="box">
                    <div className="box1">
                        <h2>Your Fairytale Hotel</h2>
                        <div className="content">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est obcaecatlaboriosam maxime reprehenderit blanditiis laudantium quo odit mos fuga architecto assumenda. Voluptatum provident corporis tenetur adipisci a suscipit, iure numquam doloribus repudiandae? Rem, ad. 
                            <button>Contact Us</button>
                        </div>
                    </div>
                    <div className="box2">
                        <img src="https://assets.cntraveller.in/photos/60ba23dd0f3a5367ec9fe87a/master/w_1600%2Cc_limit/RAJ-Rambagh-Palace-Jaipur-1.jpg" alt="error" className="img1" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
