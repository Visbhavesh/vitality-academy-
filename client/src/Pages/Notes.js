import React, { useEffect, useState } from "react";
import { Typography, Card } from "@material-tailwind/react";
import "../App.css";
export function NoteCard({ driveUrl, heading1, heading2 }) {
  return (
    <Card className=" h-30  overflow-hidden">
      <div className="p-2">
        <Typography as="h2" variant="h4" className="mb-2">
          {heading1}
        </Typography>
        <Typography as="p" variant="body2" className="mb-4">
          {heading2}
        </Typography>
        <div className="drive-preview">
          <iframe
            src={driveUrl}
            title="Drive Preview"
            className="drive-iframe content-center overflow-hidden"
            allow="autoplay"></iframe>
        </div>
        <a
          href={driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block cursor-pointer">
          View Link
        </a>
      </div>
    </Card>
  );
}
export default function NotesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    teacher: "",
    driveUrl: "",
  });
  const [notes, setNotes] = useState([]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:8000/getallnotes");
      if (response.ok) {
        const data = await response.json();
        setNotes(data);
        console.log(notes);
      } else {
        console.error("Failed to fetch notes:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/postNotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the note is successfully added, fetch all notes again to update the UI
        const updatedNotes = await fetch(
          "http://localhost:8000/getallnotes"
        ).then((res) => res.json());
        setNotes(updatedNotes);
        closeModal();
      } else {
        console.error("Failed to add note:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div className="flex flex-col mt-20 my-4 justify-center">
      <div className="text-3xl text-center p-5 bg-gray-300">
         Feature Notes
      </div>   <div className=" flex  my-5  justify-center item-center gap-4 flex-wrap">
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            driveUrl={note.driveUrl}
            heading1={note.teacher}
            heading2={note.subject}
          />
        ))}
      </div>
      <div className="flex items-center w-full p-5">
        <button className="add-note-btn w-fit" onClick={openModal}>
          Add Note
        </button>

        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <span className="close-btn" onClick={closeModal}>
                &times;
              </span>
              <form onSubmit={handleSubmit} className="modal-content px-10">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <input
                  type="text"
                  placeholder="Teacher"
                  name="teacher"
                  value={formData.teacher}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <input
                  type="text"
                  placeholder="Drive URL"
                  name="driveUrl"
                  value={formData.driveUrl}
                  onChange={handleChange}
                  required
                  className="p-2 border-dashed"
                />
                <div className="flex gap-4 text-center justify-center item-center">
                  {" "}
                  <button
                    className="submit-btn "
                    type="submit"
                    onClick={() => {
                      const isAdmin =
                        localStorage.getItem("username") === "yug" || "bhavesh";

                      if (isAdmin) {
                        console.log("hello admin");
                      } else {
                        console.log("hello normal user");
                      }
                    }}>
                    Add Note
                  </button>{" "}
                  <button
                    className="submit-btn bg-red-800"
                    onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
