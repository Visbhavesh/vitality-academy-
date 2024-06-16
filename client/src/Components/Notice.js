import React, { useEffect, useState } from "react";
import { List, Skeleton, Button } from "antd";


const SimpleCard = () => {
  const [formData, setformData] = useState({
    tittle: "",
    paragraph: "",
  });
  const [listNotice, setListNotice] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModel = () => setIsModalOpen(false);

  const [imgData, setimgData] = useState({
    title1: "",
    image: "",
  });
  const [imgNotice, setimgNotice] = useState([]);
  const [ModalOpen, setModalOpen] = useState(false);
  const openModal1 = () => setModalOpen(true);
  const closeModel1 = () => setModalOpen(false);

  const fetchNotice = async () => {
    try {
      const response = await fetch("http://localhost:8000/getAllNotice");
      if (response.ok) {
        const data = await response.json();
        let rev=data.reverse();
        setListNotice(rev);
      } else {
        console.error("Failed to fetch notice:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching notice:", error);
    }
  };

  const fetchNoticeImg = async () => {
    try {
      const response = await fetch("http://localhost:8000/getAllNotice_img");
      if (response.ok) {
        const dataimg = await response.json();
    let rev=dataimg.reverse();
        setimgNotice(rev);
      } else {
        console.error("Failed to fetch notice:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching notice:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  //  const handelDeleteLecture = async (id) => {
  //   setListNotice(updateNotice);
  //   ((prevLecture) =>
  //     prevLecture.filter((list) => list._id !== id)
  //   );
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/postNotice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const updateNotice = await fetch(
          "http://localhost:8000/getAllNotice"
        ).then((res) => res.json());
        setListNotice(updateNotice);
        closeModel();
      }
    } catch (error) {
      console.error("error adding notice ", error);
    }
  };
  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setimgData({ ...imgData, [name]: value });
  };
  //  const onhandelDeleteLecture = async (id) => {
  //   setListNotice(updateNotice);
  //   ((prevLecture) =>
  //     prevLecture.filter((list) => list._id !== id)
  //   );
  // };
  const onhandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/postAllNotice_img", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(imgData),
      });
      if (response.ok) {
        const updateimgNotice = await fetch(
          "http://localhost:8000/getAllNotice_img"
        ).then((res) => res.json());
        setimgNotice(updateimgNotice);
      closeModel1();
      }
    } catch (error) {
      console.error("error adding notice ", error);
    }
  };

  useEffect((async) => {
    fetchNotice();
    fetchNoticeImg();
  }, []);

  const isAdmin = localStorage.getItem("username") === "yug";

  return (
    <div className="bg-gray-200 m-3 p-5">
      <div className="my-5 overflow-hidden text-center">
        <h1 className="text-3xl  font-bold text-gray-700">Notice & Events</h1>
        <p className="text-gray-600 text-xs">Important Notice For Month</p>
      </div>
      <div
        className="flex flex-row flex-wrap justify-between 
          ">
        <div
          className="w-full sm:w-1/2 border 
        border-gray-600 border-4 mb-4 px-3 overflow-y-auto h-[30rem]">
          <h2 className="text-3xl font-semi mb-2">Notice</h2>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={listNotice}
            renderItem={(item) => (
              <List.Item>
                <Skeleton title={true} loading={item.loading} active>
                  <List.Item.Meta
                    title={item.tittle}
                    description={<span>{item.paragraph}</span>}
                  />
                </Skeleton> 
              </List.Item>
            )}
          />
        </div>
        <div
          className="w-full sm:w-1/2 border border-gray-600 border-4 
   mb-4 px-3 overflow-y-auto  h-[30rem]">
          <h2 className="text-3xl  mb-2">Events</h2>
          <div className="flex flex-wrap justify-between">
            {imgNotice.map((item, index) => (
              <div key={index} className="w-1/4 gap-4 mb">
                <p className="">{item.tittle1} </p>
                <div className="p-2">
                  <img
                    src={item.image}
                    alt="User Thumbnail"
                    className="w-full mb-2 border-gray-500 border-2 "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isAdmin && (
        <Button className="text-white  bg-blue-700 " onClick={openModal}>
          {" "}
          Add Notice{" "}
        </Button>
      )}
      {isAdmin && (
        <Button className="text-white  bg-blue-700 " onClick={openModal1}>
          {" "}
          Add Image
        </Button>
      )}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModel}>
              &times;
            </span>
            <form className="modal-content px-10">
              <h4>Notice</h4>
              <input
                type="text"
                placeholder="Topic"
                name="tittle"
                value={formData.tittle}
                onChange={handleChange}
                required
                className="p-2 border-dashed"
              />
              <input
                type="text"
                placeholder="Details"
                name="paragraph"
                value={formData.paragraph}
                onChange={handleChange}
                required
                className="p-2 border-dashed"
              />
              <div className="flex gap-4 text-center justify-center item-center">
                {" "}
                <button className="submit-btn" onClick={handleSubmit}>
                  Add Notice
                </button>{" "}
                <button className="submit-btn bg-red-800" onClick={closeModel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


    {ModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModel1}>
              &times;
            </span>
            <form className="modal-content px-10">
              <h4>Events</h4>
              <input
                type="text"
                placeholder="Heading "
                name="title1"
                value={imgData.title1}
                onChange={onhandleChange}
                required
                className="p-2 border-dashed"
              />
              <input
                type="text"
                placeholder="Image"
                name="image"
                value={imgData.image}
                onChange={onhandleChange}
                required
                className="p-2 border-dashed"
              />
              <div className="flex gap-4 text-center justify-center item-center">
                {" "}
                <button className="submit-btn" onClick={onhandleSubmit}>
                  Add Img Notice
                </button>{" "}
                <button className="submit-btn bg-red-800" onClick={closeModel1}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleCard;
