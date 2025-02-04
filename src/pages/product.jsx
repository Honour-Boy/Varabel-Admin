import { useState } from "react";
import { Top, Navbar } from "../components/common";
import Status from "../components/product/Status";
import Table from "../components/product/tabledisplay";
import Pagination from "../components/product/Pagination";

const Product = () => {
  const [show, setShow] = useState(false);
  const [bool, setBool] = useState(false);
  const [page, setPage] = useState(1);
  const [deleteIndexes, setDeleteIndexes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const bodyBrightness = show ? "brightness-70" : "brightness-100";

  return (
    <div className="h-screen w-screen bg-primary">
      <Navbar show={show} setShow={setShow} word="Products" />
      <div
        className={`h-full transition-all ${bodyBrightness} bg-primary rounded-lg shadow-lg p-6`}
      >
        <Top
          Head="Products Page"
          details="Retail Products information for customers"
          bool={bool}
          deleteIndexes={deleteIndexes}
        />
        <Status searchText={searchText} setSearchText={setSearchText} />
        <div className="overflow-x-auto">
          <Table
            page={page}
            setBool={setBool}
            deleteIndexes={deleteIndexes}
            setDeleteIndexes={setDeleteIndexes}
            searchText={searchText}
          />
        </div>
        <div className="mt-6">
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Product;
