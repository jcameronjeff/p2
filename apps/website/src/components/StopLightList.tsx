import React from "react";
import {
  CrossIcon,
  CheckmarkIcon,
  ErrorTriangleIcon,
} from "@prism2/icons-react";

export const ErrorTriangle = () => (
  <ErrorTriangleIcon className="self-center flex-none inline h-6 mr-2 text-gold-500" />
);
export const SuccessCheck = () => <CheckmarkIcon className="self-center flex-none inline h-6 mr-2 text-green-500" />;

export const DangerCross = () => <CrossIcon className="self-center flex-none inline float-left w-6 mr-2 text-red-500" />;
 

const Section = ({ title, children }) => (
  <>
    <h3>{title}</h3>
    {children}
  </>
);

const StopLightList = ({
  green = [],
  red = [],
  yellow = [],
  greenTitle,
  yellowTitle,
  redTitle,
}) => {
  const greenItems = green.length > 0
    ? green.map((item) => <p className='flex space-x-2'><SuccessCheck/>{item}</p>)
    : null;

  const yellowItems = yellow.length > 0
    ? yellow.map((item) =><p className='flex space-x-2'><ErrorTriangle/>{item}</p>)
    : null;

  const redItems = red.length > 0
    ? red.map((item) => <p className='flex space-x-2'><DangerCross/>{item}</p>)
    : null;

  return (
    <>
      {greenItems && <Section title={greenTitle}>{greenItems}</Section>}
      {yellowItems && <Section title={yellowTitle}>{yellowItems}</Section>}
      {redItems && <Section title={redTitle}>{redItems}</Section>}
    </>
  );
};

export default StopLightList;
