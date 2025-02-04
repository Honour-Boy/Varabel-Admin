import { useState, useEffect } from "react";
import { noDisplay } from "../../assets";
import { TableObject } from "./Tableinfo";
import { useNavigate } from "react-router-dom";
import { useSetData, useSetIndex } from "../../context/DataContext";

const Table = ({
  page,
  setBool,
  deleteIndexes,
  setDeleteIndexes,
  searchText,
}) => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [pageStart, setPageStart] = useState();
  const [tempData, setTempData] = useState([]);
  const setData = useSetData();
  const setIndex = useSetIndex();

  useEffect(() => {
    async function fetchData() {
      const result = await TableObject.readPage(page);
      setTableData(result);
      setPageStart(page * 10 - 10);
    }

    fetchData();
  }, [page]);

  useEffect(() => {
    function showSearchedData() {
      setSearchedData(
        tableData.filter((item) =>
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchText.toLowerCase())
          )
        )
      );
    }

    if (searchText !== "") {
      showSearchedData();
    }
  }, [searchText]);

  function handleEdit(event) {
    if (event.target.value === "Edit") {
      navigate("/Products/Edit");
      setData(tempData);
      const row = event.target.closest("tr");
      setIndex(row.id);
    }
  }

  function handleCheckBox(event) {
    const row = event.target.closest("tr");
    if (event.target.checked === true) {
      deleteIndexes.push(row.id);
      setBool(true);
    } else if (event.target.checked === false) {
      setDeleteIndexes(deleteIndexes.filter((index) => index !== row.id));
    }
  }

  useEffect(() => {
    if (deleteIndexes.length === 0) {
      setBool(false);
    }
  }, [handleCheckBox]);

  let index = pageStart;

  const dataDisplay = searchText === "" ? tableData : searchedData;

  const tableElement = dataDisplay.map((data) => {
    const CreatedAt = data.created_at.slice(0, 10);
    index = index + 1;
    tempData.push(data);
    return (
      <tr className="border-b border-gray-200" key={data._id} id={data._id}>
        <td className="p-4">
          <input type="checkbox" onChange={handleCheckBox} />
        </td>
        <td className="p-4">{index}</td>
        <td className="p-4">{data.title}</td>
        <td className="p-4">{data.price}</td>
        <td className="p-4">{data.ratings}</td>
        <td className="p-4">{data.stock}</td>
        <td className="p-4">{data.brand}</td>
        <td className="p-4">{data.status}</td>
        <td className="p-4">{data.category === "" ? "-" : data.category}</td>
        <td className="p-4">{CreatedAt}</td>
        <td className="p-4">
          <select onChange={handleEdit} className="border rounded-lg px-3 py-2">
            <option>--Select--</option>
            <option value="Edit">Edit</option>
          </select>
        </td>
      </tr>
    );
  });

  const ErrorElement = (
    <tr className="text-center">
      <td colSpan="9" className="py-4">
        <img
          src={noDisplay}
          alt="error image"
          className="inline-block w-20 h-20 mr-2"
        />
        <label className="text-xl">No Product to Display</label>
      </td>
    </tr>
  );

  return (
    <table className="ml-20 w-[86rem] h-full table-auto bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-4 text-left">S/N</th>
          <th className="p-4 text-left">Title</th>
          <th className="p-4 text-left">Price</th>
          <th className="p-4 text-left">Ratings</th>
          <th className="p-4 text-left">Stock</th>
          <th className="p-4 text-left">Brand</th>
          <th className="p-4 text-left">Status</th>
          <th className="p-4 text-left">Category</th>
          <th className="p-4 text-left">Date</th>
        </tr>
      </thead>
      <tbody>{tableData.length === 0 ? ErrorElement : tableElement}</tbody>
    </table>
  );
};

export default Table;
