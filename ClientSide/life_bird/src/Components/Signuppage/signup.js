import { useState } from 'react';
import './signup.css';
import { useNavigate } from 'react-router';


 const  Signup=()=>{
	const [patientname,setpatientname]=useState("");
	const [patientmobile,setpatientmobile]=useState("");
	const[username,setUsername]=useState("");
	const [patientemailid,setpatientemailid]=useState("");
	const [patientpassword,setpatientpassword]=useState("");
	const navigation=useNavigate();
	function click(){
		if(patientname!=""||patientmobile!=""||patientemailid!=""||patientpassword!=""){
			let signupDetails=JSON.parse(localStorage.getItem("signup"))||[];
			for(let i=0;i<signupDetails.length;i++)
			{
				if(signupDetails[i].username==username||signupDetails[i].patientpassword==patientpassword){
					alert("user already exist");
					setpatientname("");
					setUsername("");
					setpatientmobile("");
					setpatientemailid("");
					setpatientpassword("");
					return;
				}
			}
			localStorage.setItem("signup",JSON.stringify([...signupDetails,{patientname,username,patientmobile,patientemailid,patientpassword}]));
			alert("signup successfull")
			navigation("/home")
		}
		else{
			alert("enter your details")
		}
	}
	return(
    	 <div>
             <div className='background'>
              <div className='main-card'>
 					<div className='sub-card1'>
 						<img src="https://i.pinimg.com/originals/fd/93/8f/fd938f85645c5fad55df48a7e30b1161.png"></img>
 					</div>
 					<div className='sub-card2'>
 						<h1>Signup Page</h1>
 							<form>
 								<div className="input3">
 									<input type="text" placeholder="PatientName" onChange={(e) => setpatientname(e.target.value)} value={patientname}className="details"/>
 								</div>
								
 								<div className="input3">
 									<input type="number" placeholder="patientMobile" onChange={(e)=> setpatientmobile(e.target.value)} vlaue={patientmobile} className="details"/>
 								</div>
 								<div className="input3">
 									<input type="text" placeholder="UserName" onChange={(e)=> setUsername(e.target.value)} value={username} className="details"/>
 								</div>
 								<div className="input3">
 									<input type="text" placeholder="Email-Id" onChange={(e)=> setpatientemailid(e.target.value)} value={patientemailid} className="details"/>
 								</div>
 								<div className="input3">
 									<input type="text" placeholder="Password" onChange={(e)=> setpatientpassword(e.target.value)} value={patientpassword} className="details"/>
 								</div>
 								<div className="input3 center">
 									<button className="login" onClick={click}>signup</button>
 									<p className="login-text">Alreadyamember? <a href="login.js" className="white"> Login</a></p>
 								</div>
								
 							</form>
 						</div>
                 </div>  
             </div>
         </div>
 

 )


}

 export default Signup;
