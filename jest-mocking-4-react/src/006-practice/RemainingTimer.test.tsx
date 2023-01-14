import { act, render, screen } from "@testing-library/react";
import RemainingTimer from "./RemainingTimer";
import TimeBox, { TimeBoxProps } from "./TimeBox";
import * as DateUtils from "./utils/date";

jest.useFakeTimers();
jest.mock("./TimeBox");

describe("<RemainingTimer> tests", () => {
  beforeEach(() => {
    jest.mocked(TimeBox).mockImplementation((props: TimeBoxProps) => (
      <div
        data-testid={`${props.type}-time-box`}
        {...props}
      />
    ));
  });

  test("should render time that returned convertDeltaToDaysHoursMinutes when delta greater than zero", async () => {
    let mockRemainingTime = 5530000;
    const mockParsedRemainingTime = {
      remainingDays: 0,
      remainingHours: 1,
      remainingMinutes: 32,
      remainingSeconds: 10,
    };

    jest
      .spyOn(DateUtils, "calculateDeltaBetweenDates")
      .mockReturnValueOnce(mockRemainingTime)
      .mockReturnValue(mockRemainingTime - 5000);

    jest.spyOn(DateUtils, "convertDeltaToDaysHoursMinutes").mockImplementation((remainingTime: number) => {
      if (remainingTime !== mockRemainingTime) {
        new Error("You didn't mock.");
      }

      if (remainingTime === mockRemainingTime - 5000) {
        return { ...mockParsedRemainingTime, remainingSeconds: mockParsedRemainingTime.remainingSeconds - 5 };
      }

      return mockParsedRemainingTime;
    });

    render(<RemainingTimer />);

    expect(screen.getByTestId("day-time-box")).toHaveAttribute("value", String(mockParsedRemainingTime.remainingDays));
    expect(screen.getByTestId("hour-time-box")).toHaveAttribute(
      "value",
      String(mockParsedRemainingTime.remainingHours)
    );
    expect(screen.getByTestId("min-time-box")).toHaveAttribute(
      "value",
      String(mockParsedRemainingTime.remainingMinutes)
    );
    expect(screen.getByTestId("sec-time-box")).toHaveAttribute(
      "value",
      String(mockParsedRemainingTime.remainingSeconds)
    );

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(screen.getByTestId("sec-time-box")).toHaveAttribute(
      "value",
      String(mockParsedRemainingTime.remainingSeconds - 5)
    );
  });

  test("should render timer ended text when delta equal zero", async () => {
    const mockRemainingTime = 1000;

    jest.spyOn(global, "clearInterval");
    jest
      .spyOn(DateUtils, "calculateDeltaBetweenDates")
      .mockReturnValueOnce(mockRemainingTime)
      .mockReturnValue(mockRemainingTime - 1000);

    render(<RemainingTimer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.queryAllByTestId("time-box")).toHaveLength(0);
    expect(screen.getByTestId("timer-ended-text")).toHaveTextContent("Başardık! Artık yeni bir problemimiz var...");
    expect(clearInterval).toBeCalled();
  });
});
