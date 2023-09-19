/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectedCourse = (course) => {
    const isExist = selectedCourse.find((item) => item.id == course.id);

    let credit = course.credit;
    let price = course.price;

    if (isExist) {
      return toast.warning("The course is already selected.");
    } 
    else {
      selectedCourse.forEach((item) => {
        credit = credit + item.credit;
        price = price + item.price;
      });
      const remaining = 20 - credit;

      if (credit > 20 && remaining < 0) {
        return toast.warning("Exceeded credit hour and remaining credit hour limit.");
      }
      else{
        setTotalCredit(credit);
        setRemaining(remaining);
        setTotalPrice(price);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  }

  return (
    <div className="container mx-auto lg:flex mt-14 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 flex-1">
      {courses.map((course) => (
         <div key={course.id} className="bg-white p-5 rounded-lg">
         <img src={course.image} alt="course" className="mb-3 w-full"/>
         <h2 className="text-base font-semibold mb-2">{course.name}</h2>
         <p className="text-xs font-medium text-[#1C1B1B] opacity-60 mb-4 text-justify leading-5">{course.details}</p>
         <div className="flex items-center justify-between mb-5">
           <div className="flex items-center gap-2">
             <i className="text-xl"><FiDollarSign></FiDollarSign></i>
             <p className="text-sm font-semibold text-[#1C1B1B] opacity-60">Price: {course.price}</p>
           </div>
           <div className="flex items-center gap-2">
             <i className="text-xl"><HiOutlineBookOpen></HiOutlineBookOpen></i>
             <p className="text-sm font-semibold text-[#1C1B1B] opacity-60">Credit: {course.credit}hr</p>
           </div>
         </div>
         <button onClick={() => handleSelectedCourse(course)} className="bg-[#2F80ED] text-white font-semibold w-full p-2 rounded-lg">Select</button>
       </div>
      ))}
      </div>
      <div>
          <Cart             
          selectedCourse={selectedCourse}
          totalCredit={totalCredit}
          remaining={remaining}
          totalPrice={totalPrice}
          ></Cart>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
