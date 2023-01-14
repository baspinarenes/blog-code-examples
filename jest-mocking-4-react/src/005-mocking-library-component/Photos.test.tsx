import { render, screen } from "@testing-library/react";
import axios from "axios";
import * as ReactLazyLoadModule from "react-lazyload";
import Photos from "./Photos";

describe("<Photos /> tests", () => {
  let mockPhotos: Array<{
    id: number;
    title: string;
    url: string;
  }>;

  beforeAll(() => {
    mockPhotos = [
      {
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
      },
      {
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
      },
      {
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
      },
    ];

    jest.spyOn(axios, "get").mockImplementation((url: string): any => {
      if (url === "https://jsonplaceholder.typicode.com/photos") {
        return Promise.resolve(mockPhotos);
      }

      return Promise.reject();
    });
  });

  test("should render greeting text without name (wrong)", async () => {
    const { debug } = render(<Photos />);

    // rerender triggered after data is fetched, but during testing
    // we need to wait for it to render. therefore, we wait for
    // the element with 'photo' testid to be rendered.
    const photoElements = await screen.findAllByTestId("photo");
    debug();

    photoElements.forEach((photoEl, index) => {
      expect(photoEl).toHaveAttribute("alt", mockPhotos[index].title);
      expect(photoEl).toHaveAttribute("src", mockPhotos[index].url);
    });
  });

  test("should render greeting text without name (correct)", async () => {
    jest.spyOn(ReactLazyLoadModule, "default").mockImplementation(({ children }: any) => children);

    const { debug } = render(<Photos />);

    const photoElements = await screen.findAllByTestId("photo");
    debug();

    photoElements.forEach((photoEl, index) => {
      expect(photoEl).toHaveAttribute("alt", mockPhotos[index].title);
      expect(photoEl).toHaveAttribute("src", mockPhotos[index].url);
    });
  });
});
