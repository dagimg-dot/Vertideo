import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GlobalContext } from "../store/store";

const AddProviderModal = ({ toggleModal, _formData }) => {
  const [formData, setFormData] = useState({
    hostname: _formData?.hostname || "",
    port: _formData?.port || "",
    foldername: _formData?.foldername || "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isDisabled, setDisabled] = useState(true);

  const { providers, AddProvider, EditProvider } = useContext(GlobalContext);

  const isEditMode = _formData?.id ? true : false;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.trim(),
    }));

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = "";

    if (!value) {
      errorMessage = name[0].toUpperCase() + name.slice(1) + " required";
    }

    if (name === "hostname" && !!value) {
      const pattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;

      const matches = value.match(pattern);
      if (!matches) errorMessage = "Invalid hostname";
    }

    if (name === "port" && !!value) {
      const pattern = /\b(?:[1-9]\d{0,4}|[1-5]\d{4}|6[0-5][0-5][0-3][0-5])\b/;

      const matches = value.match(pattern);
      if (!matches) errorMessage = "Invalid port number";
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  useEffect(() => {
    if (isEditMode) {
      if (
        Object.keys(formErrors).length > 0 &&
        Object.keys(formErrors).every((key) => formErrors[key] === "")
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    } else {
      if (
        Object.keys(formErrors).length === 3 &&
        Object.keys(formErrors).every((key) => formErrors[key] === "")
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [formErrors]);

  const checkDuplicate = (formData) => {
    return providers.some(
      (provider) =>
        provider.hostname === formData.hostname &&
        provider.port === formData.port &&
        provider.foldername === formData.foldername
    );
  };

  const showToast = () => {
    toast.error("The provider already exists", {
      duration: "200",
      position: "bottom-center",
      style: {
        backgroundColor: "#bcfb08",
        fontWeight: "bold",
        marginBottom: "140px",
      },
    });
  };

  const handleSaveClick = (event) => {
    event.preventDefault();

    if (isEditMode) {
      const id = _formData.id;
      EditProvider({ id, ...formData });
      toggleModal();
    } else {
      if (!checkDuplicate(formData)) {
        AddProvider(formData);
        toggleModal();
      } else {
        showToast();
      }
    }
  };

  const Error = ({ message }) => {
    return <span className="text-red-500 text-sm">{message}</span>;
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white dark:bg-[#181f21] rounded-lg text-lg text-[#181f21] dark:text-[#bbb] shadow-lg shadow-black">
      <form className="flex flex-col gap-4" onSubmit={handleSaveClick}>
        <div>
          <label>Hostname</label>
          <input
            type="text"
            name="hostname"
            value={formData.hostname}
            placeholder="192.168.1.5"
            className=" placeholder:opacity-40 border-2 border-[#181f21] dark:border-[#bbb] bg-white dark:bg-[#181f21]"
            onChange={handleChange}
          />
          {formErrors.hostname && <Error message={formErrors.hostname} />}
        </div>
        <div>
          <label>Port</label>
          <input
            type="text"
            name="port"
            value={formData.port}
            placeholder="8081"
            className=" placeholder:opacity-40 border-2 border-[#181f21] dark:border-[#bbb] bg-white dark:bg-[#181f21] "
            onChange={handleChange}
          />
          {formErrors.port && <Error message={formErrors.port} />}
        </div>
        <div>
          <label>Folder Name</label>
          <input
            type="text"
            name="foldername"
            value={formData.foldername}
            placeholder="Videos"
            className=" placeholder:opacity-40 border-2 border-[#181f21] dark:border-[#bbb] bg-white dark:bg-[#181f21]"
            onChange={handleChange}
          />
          {formErrors.foldername && <Error message={formErrors.foldername} />}
        </div>
        <div className="flex justify-between mt-6">
          <button
            className=" border-2 border-[#181f21] dark:border-[#bbb] px-4 py-2 rounded-lg"
            onClick={toggleModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#bcfb08] text-[#101115] px-4 py-2 rounded-lg font-bold shadow-md shadow-[#181f21] disabled:bg-gray-300"
            disabled={isDisabled}
          >
            {isEditMode ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProviderModal;
