import {useState,useEffect} from 'react';
import './login.css';

 const  Login=()=>{
	const [email_Id,setEmail_Id]=useState("");
	const [password,setPassword]=useState("");
    
    
      
    return(<div>
        <div>
            <div className='back-ground1'>
              <div className='mainCard1'>
					<div className='subCard1'>
						<img src="https://i.pinimg.com/originals/fd/93/8f/fd938f85645c5fad55df48a7e30b1161.png"></img>
					</div>
					<div className='subCard2'>
						<h1>Login Page</h1>
							<form>
								<div className="Input4">
									<input type="text" placeholder="Username" className="Details" />
								</div>
								<div className="Input4">
									<input type="password" placeholder="password" className="Details" />
								</div>
								<div className="Input4 center">
									<input type="button" value="Login" className="login" />
								</div>
								<p className="Login-text">Not a member? <a href="" className="White">Signup</a></p>
							</form>
						</div>
                </div>  
            </div>
        </div>
 
    </div>
)
}
export default  Login;
