import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <label>
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

interface RegisterForm {}

export default RegisterForm;
