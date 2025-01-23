import React, { useRef } from 'react';

const UseRefExample = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: formRef.current[0].value,
      age: formRef.current[1].value,
      address: formRef.current[2].value,
      phoneNumber: formRef.current[3].value,
      email: formRef.current[4].value
    };
    console.log(formData);
  };

  return (
    <div className="hook-container">
      <h2>useRef Example</h2>
      <form onSubmit={handleSubmit} ref={formRef} className="form-container">
        <input type="text" placeholder="Enter your Name" />
        <input type="text" placeholder="Enter your Age" />
        <input type="text" placeholder="Enter your Address" />
        <input type="text" placeholder="Enter your Phone Number" />
        <input type="text" placeholder="Enter your Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
