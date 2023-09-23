import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDollar } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from '../../utility/localstorage';



const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt)
  console.log(job);


  const handleApplyJob = () => {
    saveJobApplication(id);
    toast('You have applied successfully');
}

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4 my-5">
        <div className="border md:col-span-3">
          <h2 className="my-5">
            <span className="text-2xl font-semibold">Job Description:</span> A
            UI/UX (User Interface/User Experience) designer is responsible for
            designing and creating engaging and effective interfaces for
            software and web applications. This includes designing the layout,
            visual design, and interactivity of the user interface.
          </h2>
          <h2 className="my-5">
            <span className="text-2xl font-semibold">Job Responsibility:</span>
            Collaborating with cross-functional teams: UI/UX designers often
            work closely with other teams, including product management,
            engineering, and marketing, to ensure that the user interface is
            aligned with business and technical requirements. You will need to
            be able to effectively communicate your design ideas and gather
            feedback from other team members.
          </h2>
          <h2 className="my-4">
            <span className="text-2xl font-semibold">
              Educational Requirements:
            </span>
          </h2>
          <p className="">
            Bachelor degree to complete any reputational university.
          </p>
          <h2 className="my-4">
            <span className="text-2xl font-semibold">Experiences:</span>
          </h2>
          <p className="mb-3">2-3 Years in this field.</p>
        </div>
        <div className="border">
          <div>
            <h2 className="text-2xl my-3 font-semibold"> Job Details</h2>
          </div>
          <hr />

          <div className="flex ">
            <AiOutlineDollar className="text-xl mt-1 mr-2"></AiOutlineDollar>
            <h2>
              <span className="text-xl font-normal">Salary :</span> 100K - 150K
              (Per Month)
            </h2>
          </div>
          <div className="flex">
            <BiBriefcase className="mt-1 mr-2 text-xl"></BiBriefcase>
            <h2>
              <span className="text-xl font-normal">Job Title :</span> Product
              Designer
            </h2>
          </div>

          <h2 className="text-2xl font-semibold my-2">Contact Information</h2>
          <hr />
          <div className="mt-2">
            <h2>
              <span className="text-xl font-normal">Phone :</span> 01750-00 00
              00
            </h2>
            <h2>
              <span className="text-xl font-normal">Email : </span>
              info@gmail.com
            </h2>
            <h2>
              <span className="text-xl font-normal">Address : </span>
              Dhanmondi 32, Sukrabad Dhaka, Bangladesh
            </h2>
          </div>

          <button onClick={handleApplyJob} className="btn btn-grad w-full">Apply Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;