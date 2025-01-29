import React, { useEffect } from "react";

const Setting = ({ data, setdata }) => {
  const { theme } = data;

  const handleSubmit = (e) => {
    setdata((prev) => ({
      ...prev,
      theme: e.target.value, 
    }));
  };

  useEffect(() => {
    console.log("Theme updated:", theme);
  }, [theme]);

  return (
    <div className="w-full h-full flex flex-col">
      <label>
        <input
          type="radio"
          name="theme" 
          value="dark"  
          className="mr-1"
          checked={theme === "dark"} 
          onChange={handleSubmit}
        />
        Dark
      </label>
      <label>
        <input
          type="radio"
          name="theme" 
          value="light" 
          className="mr-1"
          checked={theme === "light"} 
          onChange={handleSubmit}
        />
        Light
      </label>
    </div>
  );
};

export default Setting;
