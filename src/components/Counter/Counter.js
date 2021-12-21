import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
const Counter = () => {
    const [counter,setCounter]=useState([])
    useEffect(()=>{
        fetch('./counter.json')
        .then(res=>res.json())
        .then(data=>setCounter(data))
    },[])
    return (
        <div className='bg-white'>
           
            <div className='container border-top'>
            <div class="row row-cols-1 row-cols-md-3 g-4 pt-5">
                {
                    counter.map(count=><div key={count.id} class="col">
                    <div class="card border-0 h-100">
                        <img src={count.img} style={{width:'20%',margin:'auto'}} class="img-fluid" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{count.title}</h5>
                            <CountUp style={{fontSize:'42px',fontFamily:'Odibee Sans,cursive',color:'#052046'}} end={count.count} duration={2} />
                        </div>
                    </div>
                </div>)
                }
            </div>
                
            </div>
        </div>
    );
};

export default Counter;