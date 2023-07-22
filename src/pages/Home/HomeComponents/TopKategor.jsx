import React, { useEffect } from "react";
// import dataTop from "../HomeData/DataTop";
import { Link } from "react-router-dom";
function TopKategor({data}) {
  return (
    <div className="mt-[63px]">
      <h2 className="title mb-[30px]">Популярные категории</h2>
      <div className="grid grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2 gap-2">
        {data?.length && data.map((el, i) => {
          return (
            <Link to={"/kategor"}>
              <div
                key={i}
                className="py-5 cursor-pointer shaw flex flex-col gap-2 items-center"
              >
                <img src={`http://localhost:3000/${el.img}`} className="h-[70px]" alt="" />
                <p>{el.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TopKategor;
