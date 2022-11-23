/**
 * @author Pramod Turakane
 * @company Sai Systems
 * Education Page
 *
 * This is the education page and gets loaded '/education' route
 *
 */

import React, {useEffect} from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { getNewsData } from "./actions";

const EducationPage = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNewsData('1234'));
  },[dispatch]);
  return <div>Education Page</div>;
};

export default EducationPage;
