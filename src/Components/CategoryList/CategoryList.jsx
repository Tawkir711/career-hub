import React from 'react';
import { BiArchiveIn } from "react-icons/bi";

const CategoryList = () => {
  return (
    <div className="text-center">
      <h2 className="text-5xl mb-3">Job Category List</h2>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex gap-5 ">
        <div className="w-[300px] h-[150px] bg-[#e2e4f3] my-5 ">
          <BiArchiveIn className='text-2xl flex '></BiArchiveIn>
          <h2>Account & Finance</h2>
          <p>300 Jobs Available</p>
        </div>
        <div className="w-[300px] h-[150px] bg-[#e2e4f3] my-5">
          <h2> Creative Design</h2>
          <p>100+ Jobs Available</p>
        </div>
        <div className="w-[300px] h-[150px] bg-[#e2e4f3] my-5">
          <h2>Marketing & Sales</h2>
          <p>150 Jobs Available</p>
        </div>
        <div className="w-[300px] h-[150px] bg-[#e2e4f3] my-5">
          <h2>Engineering Job</h2>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;