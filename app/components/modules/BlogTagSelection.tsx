import { blogAPI } from "app/api/modules/blogAPI";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function BlogTagSelection({ tags, setTags }) {
  const customStyles = {
    // option: (provided, state) => ({
    //   ...provided,
    // }),
    control: (styles) => ({
      ...styles,
      height: "42px",
      width: "100%",
      borderRadius: "0.5rem",
      border: "1px solid #E5E7EB",
    }),
  };

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await blogAPI.getAllTags();

      setOptions(
        result.data.map((tag) => ({ value: tag._id, label: tag.name }))
      );
    };
    fetchData();
  }, []);

  // const handleChange = (selectedOption) => {
  //   // console.log(selectedOption);
  //   setTags(selectedOption._id);
  // };

  return (
    <div>
      <p className="blog-title">Category</p>
      <Select styles={customStyles} options={options} onChange={setTags} />
    </div>
  );
}
