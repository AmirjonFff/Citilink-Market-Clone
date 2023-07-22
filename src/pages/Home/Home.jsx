import React from "react";
import "./style.css";

import OpenCard from "./HomeComponents/OpenCard";
import TopKategor from "./HomeComponents/TopKategor";
import Sobrat from "./HomeComponents/Sobrat";
import Xitu from "./HomeComponents/Xitu";
import Uspet from "./HomeComponents/Uspet";
import Info from "./HomeComponents/Info";
import Brend from "./HomeComponents/Brend";
import AutoSwiap from "./HomeComponents/AutoSwiap";
import { useGetProductsQuery } from "../../api/product";
import { useGetCategoriesQuery } from "../../api/categories";

function Home() {
  const { data = [] } = useGetProductsQuery();
  const { data: categorData } = useGetCategoriesQuery();
  console.log(categorData);

  return (
    <>
      <div className="wrapper py-16">
        <div className="container">
          <div className="flex gap-3 items-center">
            <AutoSwiap />
            <OpenCard />
          </div>
          <TopKategor data={categorData} />
          <Sobrat />
          <Xitu data={data} />
          <Uspet />
          <Info />
          <Brend />
        </div>
      </div>
    </>
  );
}

export default Home;
