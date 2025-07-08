import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter Name Here"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <input
          type="email"
          value={email}
          placeholder="Enter Email Here"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {submit && (
        <p>
          Thank you {name} , We Will Contact you at {email}
        </p>
      )}
    </div>
  );
};
export default Form;
