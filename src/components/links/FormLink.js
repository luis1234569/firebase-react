import React, { useEffect, useState } from "react";
import { saveWebsite, getWebsite, updateWebsite } from "../../firebase/api";
import { toast } from "react-toastify";

function FormLink(props) {
  const initialValues = {
    name: "",
    link: "",
  };

  const [values, setValues] = useState(initialValues);
  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.currentId === "") {
      await saveWebsite(values);
      setValues({ ...initialValues });
      props.newLink();
      toast("New Link Added", {
        type: "success",
      });
    } else {
      await updateWebsite(props.currentId, values);
      setValues({ ...initialValues });
      props.newLink();
    }
  };

  const getLink = async (id) => {
    try {
      const doc = await getWebsite(id);
      setValues({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialValues });
    } else {
      getLink(props.currentId);
    }
  }, [props.currentId]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form card p-3 bg-cyan-800">
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-4"
          placeholder="name"
          name="name"
          onChange={handleInputChange}
          value={values.name}
        />
        <input
          type="text"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-4"
          placeholder="link"
          name="link"
          onChange={handleInputChange}
          value={values.link}
        />
        <button className="card w-full bg-blue-400 text-white hover:bg-blue-300 shadow-md rounded text-center py-2">
          {props.currentId === "" ? "Guardar" : "Editar"}
        </button>
      </form>
    </div>
  );
}

export default FormLink;
