import { useState, useEffect } from 'react';

import './disease.css'

const Disease =() =>{

    const [message, setMessage] = useState('');
    const[data,setData]=useState([]);
    const [num,setNum] = useState(1)
      
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=()=>{
        fetch("http://localhost:8080/logos").then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })
    
    } 
    const clicking=()=>{
        fetch("http://localhost:5003/doctors/")
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })

    }
    
    const button=()=>{
        fetch(`http://localhost:8080/searchdisease/${message}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
            console.log(res);
        })

    }
     const handleChange = (event) => {
        setMessage(event.target.value);
    };
   
        return(<div>
        <div className='main-section'>
            <div className='navbar'>
               <img  className="logo"src="./resources/bird.jpeg"></img>
                <p className='home'>Home</p>
                <p className='Doctor'>PHC</p>
                <p className='lab'>Specilaist</p>
                <p className='medicine'>Labs</p>
                <p className='signup'>Signup</p>
            </div>
            <div className='partone'>
                <img id='parttwo' src="https://www.felixhospital.com/sites/default/files/2022-09/Tips%20For%20First%20Time%20Parents.jpg"></img>
                <div className='search-input'>
                    <input type="text" placeholder='Search Doctors' onChange={handleChange}
                        value={message}/>
                    <button className='search-button'onClick={button}>
                        <img className='search1' src="/resources/search.avif" alt=""></img>
                    </button>
                </div>
            </div>
            <div className='display'>
        <div>
    </div>
    <div className='small'>
        {
            data?.map(({image,Name})=>
            
            <div className='doctor'>
                <div className='prime'>
                    <p className='image'>
                        <img  className="img"src={image} alt=""/>
                    </p>
                    <p className="text1">
                        <h3 className='Name'>{Name}</h3>
                    </p>
                    <button class="clickbutton">Click Here</button>
                </div> 
            </div>
                        
         )
                        
    }
    <div className='Main'>
        <div className='line'>
            <div className='cart' onClick={()=>setNum(1)}>
                <p>Cardiac surgery</p>
            </div>
            <div className='cart' onClick={()=>setNum(2)}>
                <p>Oncology</p>
            </div>
            <div className='cart' onClick={()=>setNum(3)}>
                <p>Gastroenterology</p>
            </div>
            <div className='cart' onClick={()=>setNum(4)}>
                <p>Orthopaedics</p>
            </div>
            <div className='cart' onClick={()=>setNum(5)}>
                <p>Transplants</p>
            </div>  
        </div>
        {num === 1 && <div className='card'>
            <img src="	https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Cardiac.jpg"></img>
            <div className='Text1'>
                <h1 className='cardio'>Cardiology & Cardiac Surgery</h1>
                    <p className='siri'>At siri Health, we have a team of highly qualified and experienced 
                    cardiologists, interventional cardiologists, and cardiac surgeons who provide comprehensive
                    care for a wide range of cardiac conditions in adults & children.
                    Treatment for Cardiac conditions offered at Narayana Health ranges from medication, treatment 
                    of underlying conditions, interventional procedures to both minimally invasive and open heart surgery.
                    To provide comprehensive care to patients, the team works closely with allied departments at Narayana Health
                    to ensure accurate diagnosis are reached and appropriate pre and post treatment care is provided.</p>
                </div>
    </div>}  
    { num === 2 && <div className='card'>
        <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Gastro.jpg"></img>
            <div className='Text1'>
                <h1 className='cardio'>Gastroenterology</h1>
                    <p className='siri'>The Department of Gastroenterology at siri Health is at the forefront of diagnosis and treatment of 
                    gastro-intestinal diseases, which consists of a highly trained gastroenterologists team. We treat diseases
                    concerning the upper digestive tract, stomach, liver, colon, intestinal problems and pancreas. At Narayana 
                    Health, we follow a multidisciplinary approach for the care of patients and the department is supported by
                    Surgical Gastroenterology, Medical Oncology, Radiology, Radiotherapy, Anaesthesiology and Intensive Care Specialists.</p>
            </div>
        </div>  }
        {num === 3 && <div className='card'>
            <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/turp.jpg"></img>
                <div className='Text1'>
                    <h1 className='cardio'>Transplants</h1>
                        <p className='siri'>SIRI Health offers one of the most comprehensive organ transplantation programs in India. The experience and 
                        expertise of our consultants along with integrated multidisciplinary team approach and excellent infrastructure tries to ensure superior outcomes
                        Our hospitals are well known for several multi-organ transplant procedures such as:
                        Heart Transplant - Adult | Paediatric
                        Kidney Transplant - Living Donor | Deceased Donor
                        Liver Transplant - Adult | Paediatric
                        Bone Marrow Transplant: Autologous | Allogenic | Hematopoietic</p>
                </div>
            </div>}  
            {num === 4 && <div className='card'>
                <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Onco.jpg"></img>
                    <div className='Text1'>
                        <h1 className='cardio'>Oncology</h1>
                            <p className='siri'>Our Department of Oncology follows a trans-disciplinary and multi-modality 
                            approach in the field of adult and paediatric Oncology. The department has an extensive medical
                            programme, with super-sub-specialists in the field of Medical Oncology, Haematology – Adult &
                            Paediatric, Radiation Oncology, Specialised Onco surgery. There are various specialised clinics
                            and a range of Support services for prevention, diagnosis and treatment of cancer. With cutting-edge
                            technology and a team of dedicated superspecialists, we offer care for all stages of cancer.</p>
                    </div>
                </div>}  
                {num === 5 && <div className='card'>
                    <img src="https://hospital.narayanahealth.org/northsouth_assets/img/specialities/Ortho.jpg"></img>
                        <div className='Text1'>
                            <h1 className='cardio'>Orthopaedics</h1>
                                <p className='siri'>Our Department of Orthopaedics provides comprehensive and world-class orthopaedics services.
                                The expert team of consultants offer specialised care in the fields of complex trauma, poly-trauma and other 
                                sub-specialties of orthopaedics. It provides management for all disorders of bone, joint, and a variety of musculoskeletal disorders.
                                The department has extensive experience in diagnosing and treating upper & lower limb surgery, trauma, bone diseases and congenital 
                                conditions. In addition to an excellent orthopaedic staff, we also work with efficient occupational therapists, physiotherapists and pain management experts.</p>
                        </div>
                    </div>}  
                </div>
            </div>
        </div>
    </div>
</div>
 )
}

export default Disease;