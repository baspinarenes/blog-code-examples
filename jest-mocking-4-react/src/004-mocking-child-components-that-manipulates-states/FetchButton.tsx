import React from "react";

const FetchButton: React.FC<FetchButtonProps> = ({ setPersons }) => {
  const fetchPersons = async () => {
    const response = await fetch("https://dummyjson.com/users?limit=5");
    const result = await response.json();
    setPersons(result.users);
  };

  return <button onClick={fetchPersons}>Kullanıcı Listesini Getir</button>;
};

export interface FetchButtonProps {
  setPersons: (persons: Array<any>) => void;
}

export default FetchButton;
