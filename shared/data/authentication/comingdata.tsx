import Countdown from "react-countdown";

const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <div className="d-flex gap-3 flex-wrap mt-4 mb-5 gy-xxl-0 gy-3 justify-content-center">
        <div className="">
          <h4 className="avatar d-block timer-bg avatar-xxl avatar-rounded mt-2">{days}</h4>
          <p className="mb-0 fs-12">DAYS</p>
        </div>
        <div className="">
          <h4 className="avatar d-block timer-bg avatar-xxl avatar-rounded mt-2">{hours}</h4>
          <p className="mb-0 fs-12">Hours</p>
        </div>
        <div className="">
          <h4 className="avatar d-block timer-bg avatar-xxl avatar-rounded mt-2">{minutes}</h4>
          <p className="mb-0 fs-12">Minutes</p>
        </div>
        <div className="">
          <h4 className="avatar d-block timer-bg avatar-xxl avatar-rounded mt-2">{seconds}</h4>
          <p className="mb-0 fs-12">Seconds</p>
        </div>
      </div>
    );
  }
};

export function DayCounter() {
  return <Countdown date={Date.now() + 9999989980} renderer={rendering} />;
}
