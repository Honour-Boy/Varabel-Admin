import { useState } from "react";
import SettingsForm from "../components/settings/SettingsForm";
import { Alert } from "../components/common";

const Settings = () => {
  const [message, setMessage] = useState({
    value: "",
    show: false,
  });

  return (
    <div className="relative w-full h-full">
      <div className={`${message.show && "brightness-50 pointer-events-none"} w-full h-full bg-primary flex items-center justify-center`}>
        <SettingsForm setMsg={setMessage} msg={message} />
      </div>
      <Alert msg={message} setMsg={setMessage} />
    </div>
  );
};

export default Settings;
