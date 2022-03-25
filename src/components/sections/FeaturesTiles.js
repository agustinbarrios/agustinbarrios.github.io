import React, { useState, useRef, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Image from '../elements/Image';

export default function App() {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <>
    <div className="container2">

    <h2>FAQ</h2>

      <div className="App">
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style">
                ¿Qué es un centro de salud?
                </h4>
                <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}
              >
                <p>Un centro de salud es un establecimiento público o privado donde se prestan servicios de atención médica y/o de salud. En la mayoría de los países, los centros de salud están regulados y supervisados por el gobierno y/o una agencia estatal de salud.</p>
              </div>
            </div>

          </button>
        </div>
      </div>
      </div>
    </>
  );
}