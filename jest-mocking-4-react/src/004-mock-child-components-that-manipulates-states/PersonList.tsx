import React, { useState } from "react";
import FetchButton from "./FetchButton";
import Person from "./Person";

const PersonList: React.FC = () => {
  const [persons, setPersons] = useState<any>([]);

  return (
    <div>
      <FetchButton setPersons={setPersons} />
      {persons.map((person: any) => (
        <Person
          key={person.email}
          firstName={person.firstName}
          lastName={person.lastName}
          email={person.email}
        />
      ))}
    </div>
  );
};

export default PersonList;
