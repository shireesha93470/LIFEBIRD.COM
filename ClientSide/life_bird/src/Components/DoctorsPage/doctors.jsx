import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"; 
import { getAllDoctors } from '../../redux/authReducer/action'

const Doctor=()=>
{
const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state.doctor.doctorsData); 
  console.log("temp",data)

  useEffect(() => {
      dispatch(getAllDoctors());
  }, []);

    
    return(
        <div>
        </div>
    )
}
export default Doctor;