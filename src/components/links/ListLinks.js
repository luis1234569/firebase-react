import React, { useEffect } from "react";
import FormLink from "./FormLink";
import { getWebsites, deleteWebsite } from "../../firebase/api";
import { useState } from "react";
import { toast } from "react-toastify";
 

function ListLinks() {
  const [websites, setWebsites] = useState([]);
  const [currentId, setCurrentId ] = useState("");

  const getLinks = async () => {
    const querySnapshot = await getWebsites();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setWebsites(docs);
  };

  const newLink = () => {
    getLinks();
  };

  const onDeleteLink = async (id) => {
    await deleteWebsite(id);
    console.log("delete");
    getLinks();
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="p-3">
      <div className="card">
        <FormLink  {...{newLink, currentId}}></FormLink>
      </div>
      <div className="card block mt-4">
        {websites.map((link) => (
          <div
            className="col-md-4 p-3 mt-2 bg-cyan-600 hover:bg-cyan-500"
            key={link.id}
          >
            <div className="card mb-3 card-website">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{link.name}</h4>
                  <button
                    className="btn btn-danger btn-sm d-flex align-items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteLink(link.id);
                    }}
                  >
                    <i className="material-icons">close</i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm d-flex align-items-center"
                    onClick={() => setCurrentId(link.id)}
                  >
                    <i className="material-icons">edit</i>
                  </button>
                </div>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  Go to Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListLinks;
