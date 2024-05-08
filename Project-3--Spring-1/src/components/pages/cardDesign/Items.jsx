import { Card } from "./Card";
import Pagination from "./Pagination";

export const Items = ({apiData, pageInfo, page, setPage}) => {


  return (
    <>
      <div className="item-box">
        {apiData.map((data) => {
          return <Card data={data} key={data.id} />;
        })}
      </div>
      <Pagination pageInfo={pageInfo} page={page} setPage={setPage} />
    </>
  );
};
