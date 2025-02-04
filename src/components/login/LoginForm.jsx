import { useState, useEffect } from "react";
import { styles } from "../../styles";
import { useNavigate } from "react-router-dom";
import { useSetUsername } from "../../context/DataContext";
import { useSetId } from "../../context/DataContext";
import axios from "axios";

const Form = ({ setMsg, msg, allow }) => {
  const navigate = useNavigate();
  const setUsername = useSetUsername();
  const setId = useSetId();
  const [pageName, setPageName] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [formData, setFormData] = useState({
    username: "",
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

  const signupSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.email &&
      formData.username &&
      formData.password &&
      formData.confirmPassword
    ) {
      if (formData.password === formData.confirmPassword) {
        setLoading(true); // Start loading
        try {
          const response = await axios.post(`${apiBase}/signup`, {
            Username: formData.username,
            Email: formData.email,
            Password: formData.password,
          });
          if (response.status === 200) {
            setMessage("Sign up completed successfully");
            setPageName("/Login");
            clearFields();
          }
        } catch (error) {
          const errorMsg = error.response?.data?.message || "An error occurred";
          setMessage(errorMsg);
        } finally {
          setLoading(false); // Stop loading
        }
      } else {
        setMessage("Passwords do not match.");
      }
    } else {
      setMessage("Please fill all the fields.");
    }
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
    if (formData.email && formData.password) {
      setLoading(true); // Start loading
      try {
        const response = await axios.post(`${apiBase}/login`, {
          Email: formData.email,
          Password: formData.password,
        });
        if (response.status === 200) {
          setUsername(response.data.username);
          setId(response.data.id);
          setMessage("Login successful");
          setPageName("/Home");
          clearFields();
        }
      } catch (error) {
        const errorMsg = error.response?.data?.message || "Login failed. Try again.";
        setMessage(errorMsg);
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      setMessage("Please fill all the fields.");
    }
  };

  useEffect(() => {
    if (!msg.show) {
      navigate(pageName, { replace: true });
    }
  }, [msg.show, navigate, pageName]);

  const headings = allow ? (
    <div>
      <h1 className={`${styles.heroHeadText}`}>Sign Up!</h1>
      <p className={`${styles.heroSubText}`}>Sign up to access the website</p>
    </div>
  ) : (
    <div>
      <h1 className={`${styles.heroHeadText}`}>Welcome Back!</h1>
      <p className={`${styles.heroSubText}`}>Login to access your Dashboard</p>
    </div>
  );

  return (
    <form
      onSubmit={allow ? signupSubmit : loginSubmit}
      className={`sm:w-[550px] w-full ss:mx-2 sm:mx-0 bg-white card ${styles.padding}`}
    >
      {allow && (
        <a
          href="/Login"
          className="mt-[20px] text-[#0b2a43] block hover:text-lg hover:font-semibold transition-all"
        >
          {"< Back"}
        </a>
      )}
      {headings}
      <div className="mt-[40px] w-full">
        {allow && (
          <>
            <label className="block">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input-text w-full xs:w-3/4"
              onChange={handleChange}
              name="username"
              value={formData.username}
            />
          </>
        )}
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
        {allow && (
          <>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm the above Password"
              className="input-text w-full xs:w-3/4"
              onChange={handleChange}
              name="confirmPassword"
              value={formData.confirmPassword}
            />
          </>
        )}
        {allow && formData.password !== formData.confirmPassword && formData.confirmPassword !== "" && (
          <span className="text-red-100 block">Passwords do not match</span>
        )}
        <button
          className="btn"
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Loading..." : allow ? "Sign Up" : "Login"}
        </button>
        {!allow && (
          <a
            href="/Sign up"
            className="my-[20px] text-[#0b2a43] block underline"
          >
            Don't have an account? Sign up.
          </a>
        )}
      </div>
    </form>
  );
};

export default Form;
