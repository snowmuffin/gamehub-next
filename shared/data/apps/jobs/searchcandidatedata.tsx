export const Data = [
  { value: 'All Categories', label: 'All Categories' },
  { value: 'Software Dveloper', label: 'Software Dveloper' },
  { value: 'Web Developer', label: 'Web Developer' },
  { value: 'Software Architect', label: 'Software Architect' },
  { value: 'IT Hardware', label: 'IT Hardware' },
  { value: 'Network Engineer', label: 'Network Engineer' },
  { value: 'React Developer', label: 'React Developer' },
];
export const Data2 = [
  { value: 'Fresher', label: 'Fresher' },
  { value: '1 Year Exp', label: '1 Year Exp' },
  { value: '2 Year Exp', label: '2 Year Exp' },
  { value: '3 Year Exp', label: '3 Year Exp' },
  { value: '4 Year Exp', label: '4 Year Exp' },
  { value: '5+ Year Exp', label: '5+ Year Exp' },
];

import { Fragment, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const LabeledTwoThumbs1 = ({ rtl }:any) => {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;

  const [values, setValues] = useState([20, 40]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              className="rangeslider-thumb"
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', '#00f6b8', '#ccc'],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <Fragment key={Math.random()}>
          <div
            {...props}

            key={index}
            
            style={{
              ...props.style,
              top:"14px",
              height: '20px',
              width: '24px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
           
          >
            <Fragment key={Math.random()}>
            <div
              style={{
                position: 'absolute',
                top: '-28px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
                padding: '4px',
                borderRadius: '4px',
                backgroundColor: '#00f6b8',
              }}
            >
              {values[index].toFixed(1)}
            </div>
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC',
              }}
            />
            </Fragment>
          </div>
          </Fragment>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs1;
