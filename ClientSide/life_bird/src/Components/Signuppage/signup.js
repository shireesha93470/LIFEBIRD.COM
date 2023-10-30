import { useState, useEffect } from 'react';
import axios from 'axios';
import './signup.css';


 const  Signup=()=>{
	const [patientname,setpatientname]=useState("");
	const [patientmobile,setpatientmobile]=useState("");
	const [patientemailid,setpatientemailid]=useState("");
	const [patientpassword,setpatientpassword]=useState("");


	

	const handleClick = async() => {
		await axios.post('http://localhost:8080/api/v1/details', {
				"id": 0,
				"patientname":patientname,
				"patientMobile":patientmobile,
				"emailId":patientemailid,
				"password":patientpassword,
		}).then(function (response) {
				console.log(response);
		}).catch(function (error) {
				console.log(error);
		});
}


    return(<div>
        <div>
            <div className='background'>
              <div className='main-card'>
					<div className='sub-card1'>
						<img src="https://i.pinimg.com/originals/fd/93/8f/fd938f85645c5fad55df48a7e30b1161.png"></img>
					</div>
					<div className='sub-card2'>
						<h1>Signup Page</h1>
							<form>
								<div className="input">
									<input type="text" placeholder="PatientName" onChange={(e) => setpatientname(e.target.value)} className="details"/>
								</div>
								
								<div className="input">
									<input type="number" placeholder="patientMobile" onChange={(e)=> setpatientmobile(e.target.value)} className="details"/>
								</div>
								<div className="input">
									<input type="text" placeholder="Email-Id" onChange={(e)=> setpatientemailid(e.target.value)} className="details"/>
								</div>
								<div className="input">
									<input type="text" placeholder="Password" onChange={(e)=> setpatientpassword(e.target.value)} className="details"/>
								</div>
								<div className="input center">
									<button className="login" onClick={handleClick}>signup</button>
									<p className="login-text">Alreadyamember? <a href="" className="white"> Login</a></p>
								</div>
								
							</form>
						</div>
                </div>  
            </div>
        </div>
 
    </div>
)
}

 export default Signup;
