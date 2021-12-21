import React, { useEffect } from 'react';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const DifferentBg = () => {
    const [different,setDifferent]=useState([])
    useEffect(()=>{
        fetch('./different.json')
        .then(res=>res.json())
        .then(data=>setDifferent(data))
    },[])
    
    return (
        <div>
            <div className='container py-5'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                different.map(diff=> <div>
                    
                        <div className="col ">
                           <div>
                                <div data-aos="flip-right" data-aos-duration="1000" style={{backgroundColor:'#ea4335'}} className="card  border-0 h-100">
                                    <img style={{width:'80px',margin:'auto',padding:'10px'}} src={diff.img} alt="" />
                                    <div className="card-body text-white position-relative text-start">
                                        <h5 style={{fontSize:'36px',fontFamily:'Odibee Sans'}} className="diff-title">{diff.title}</h5>
                                        <p style={{fontSize: '15px'}} className="diff-text">{diff.desc}</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                   
                </div>)
            }
        </div>
        </div>
        </div>
    );
};

export default DifferentBg;