import React, { useEffect } from 'react'

const Interest = ({ data, setdata }) => {
  const { interest } = data;

  
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setdata((prev) => ({
      ...prev,
      interest: checked
        ? [...prev.interest, name]
        : prev.interest.filter((i) => i !== name),
    }));
  };

 
//   useEffect(() => {
//     console.log(interest);
//   }, [interest]); 

  return (
    <div className="w-full h-full flex flex-col">
      <label>
        <input
          type="checkbox"
          name="Music"
          checked={interest.includes("Music")}
          className="mr-1"
          onChange={handleChange}
        />
        Music
      </label>
      <label>
        <input
          type="checkbox"
          name="Chess"
          checked={interest.includes("Chess")}
          className="mr-1"
          onChange={handleChange}
        />
        Chess
      </label>
      <label>
        <input
          type="checkbox"
          name="Learn New Tech"
          checked={interest.includes("Learn New Tech")}
          className="mr-1"
          onChange={handleChange}
        />
        Learn New Tech
      </label>
    </div>
  );
};

export default Interest;
