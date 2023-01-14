import React from "react";

const Person: React.FC<PersonProps> = ({ firstName, lastName, email }) => {
  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </div>
  );
};

export interface PersonProps {
  firstName: string;
  lastName: string;
  email: string;
}

export default Person;
