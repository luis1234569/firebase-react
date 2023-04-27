import React, { useEffect } from "react";
import FormLink from "./FormLink";
import { getWebsites, deleteWebsite } from "../../firebase/api";
import { useState } from "react";
import { toast } from "react-toastify";

function ListLinks() {
  const [websites, setWebsites] = useState([]);
  const [currentId, setCurrentId] = useState("");

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
    toast("Link deleted", {
      type: "info",
    });
    getLinks();
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <div className=" 2xl:w-4/5 mx-auto md:flex gap-8 md:w-full p-3 ">
        <div className="w-5/6 md:w-1/2 mx-auto">
          <FormLink {...{ newLink, currentId }}></FormLink>
        </div>

        <div className="w-5/6 md:w-1/2  mx-auto">
          <div className="dash overflow-y-auto scroll">
            {websites.map((link) => (
              <div
                className="  mb-4 h-24 bg-cyan-800 border-cyan-950 shadow-md text-white rounded-md"
                key={link.id}
              >
                <h3 className="text-center bg-cyan-400 text-black">
                  {link.name}
                </h3>
                <div className="px-2 py-1">
                  <div className="flex flex-row justify-between">
                    <div className="img">
                      <img
                        className="h-14 object-cover"
                        src={link.linkImage}
                        alt=""
                        onError={(e) => {
                          e.target.src =
                            "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
                          e.target.onError = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
                        }}
                      />
                    </div>
                    <div className="flex-col">
                      <div className="flex flex-row justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteLink(link.id);
                          }}
                        >
                          <i className="material-icons">close</i>
                        </button>
                        <button onClick={() => setCurrentId(link.id)}>
                          <i className="material-icons">edit</i>
                        </button>
                      </div>
                      <a
                        className="hover:text-blue-400"
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Go to Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListLinks;
