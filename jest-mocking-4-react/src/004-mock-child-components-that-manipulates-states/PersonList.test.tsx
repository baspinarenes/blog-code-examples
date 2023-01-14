import { fireEvent, render, screen } from "@testing-library/react";
import * as FetchButtonModule from "./FetchButton";
import { PersonProps } from "./Person";
import PersonList from "./PersonList";

// div içeriğinin gerçekte nasıl olduğu hiç önemli değil.
// doğru kişiyi render ettiğimizi teyit edebiliyorsak kafi.
jest.mock("./Person", () => {
  return {
    default: jest.fn(({ firstName, lastName, email }: PersonProps) => (
      <div data-testid="person">
        {firstName} - {lastName} - {email}
      </div>
    )),
  };
});

describe("<PersonList /> tests", () => {
  test("should get persons when click fetch button", () => {
    const mockPersons = [
      {
        firstName: "Terry",
        lastName: "Medhurst",
        email: "atuny0@sohu.com",
      },
      {
        firstName: "Sheldon",
        lastName: "Quigley",
        email: "hbingley1@plala.or.jp",
      },
    ];

    jest
      .spyOn(FetchButtonModule, "default")
      .mockImplementation(({ setPersons }: FetchButtonModule.FetchButtonProps) => (
        <button
          data-testid="fetch-button"
          onClick={() => setPersons(mockPersons)}
        />
      ));

    render(<PersonList />);

    expect(screen.queryAllByTestId("person")).toHaveLength(0);

    const fetchButton = screen.getByTestId("fetch-button");
    fireEvent.click(fetchButton);

    expect(screen.getAllByTestId("person")).toHaveLength(2);

    screen.getAllByTestId("person").forEach((personEl, index) => {
      const { firstName, lastName, email } = mockPersons[index];

      expect(personEl).toHaveTextContent(`${firstName} - ${lastName} - ${email}`);
    });
  });
});
