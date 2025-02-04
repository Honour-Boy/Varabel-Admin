import { useState, useEffect } from "react";
import { styles } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useUsername, useSetUsername, useId } from "../../context/DataContext";
import axios from "axios";
import { arrow } from "../../assets";

const SettingsForm = ({ setMsg, msg }) => {
  const navigate = useNavigate();
  const username = useUsername();
  const id = useId();
  const setUsername = useSetUsername();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: username,
    email: "",
    password: "",
    confirmPassword: "",
  });

  const apiBase = "https://x8ki-letl-twmt.n7.xano.io/api:Hgo6lh9m";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const clearFields = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const setMessage = (value) => {
    setMsg((prevMsg) => ({ ...prevMsg, value, show: true }));
  };

  const updateAccount = async (event) => {
    event.preventDefault();
    if (
      formData.email &&
      formData.username &&
      formData.password &&
      formData.confirmPassword
    ) {
      if (formData.password === formData.confirmPassword) {
        setLoading(true);
        try {
          const response = await axios.put(`${apiBase}/update`, {
            login_id: id,
            Username: formData.username,
            Email: formData.email,
            Password: formData.password,
          });
          if (response.status === 200) {
            setMessage("Account updated successfully");
            setUsername(formData.username);
            clearFields();
          }
        } catch (error) {
          const errorMsg = error.response?.data?.message || "An error occurred";
          setMessage(errorMsg);
        } finally {
          setLoading(false);
        }
      } else {
        setMessage("Passwords do not match.");
      }
    } else {
      setMessage("Please fill all the fields.");
    }
  };

  useEffect(() => {
    if (msg.show) {
      const timer = setTimeout(() => {
        setMessage(""); // Clear the message
        navigate("/Home", { replace: true });
      }, 3000); // 3 seconds

      // Cleanup the timer if the component unmounts or msg.show changes
      return () => clearTimeout(timer);
    }
  }, [msg.show, navigate]);

  return (
    <form
      onSubmit={updateAccount}
      className={`sm:w-[550px] w-full ss:mx-2 sm:mx-0 bg-white card ${styles.padding}`}
    >
      <div
        className="flex items-center mb-4 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <img src={arrow} alt="Back" className="w-5 rotate-90" />
        <p>back</p>
      </div>
      <h1 className={`${styles.heroHeadText}`}>Account Settings</h1>
      <p className={`${styles.heroSubText}`}>Update your account details</p>
      <div className="mt-[40px] w-full">
        <label className="block">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          className="input-text w-full xs:w-3/4"
          onChange={handleChange}
          name="username"
          value={formData.username}
        />
        <label className="block">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          onChange={handleChange}
          className="input-text block w-full xs:w-3/4"
          name="email"
          value={formData.email}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={handleChange}
          className="input-text block w-full xs:w-3/4"
          name="password"
          value={formData.password}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm the above Password"
          className="input-text w-full xs:w-3/4"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.confirmPassword}
        />
        {formData.password !== formData.confirmPassword &&
          formData.confirmPassword !== "" && (
            <span className="text-red-100 block">Passwords do not match</span>
          )}
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Update"}
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;
