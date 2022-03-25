import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
  
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '¿Quienes Somos?',
    paragraph: 'Somos  un equipo de profesionales especializados en la atención de la salud mental. Ofrecemos una amplia gama de servicios personalizados para ayudar a nuestros pacientes a lidiar con su salud mental. Trabajamos en estrecha colaboración con nuestros pacientes y sus familias para asegurar que reciban el mejor tratamiento posible.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Psicologia
                  </div>
                <h3 className="mt-0 mb-12">
                ¿Cómo la psicología puede ayudarlo a mejorar su vida?
                  </h3>
                <p className="m-0">
                La psicología es una ciencia que estudia el comportamiento humano y la mente. Se puede utilizar para ayudar a las personas a mejorar su calidad de vida. La psicología puede ayudar a las personas a comprender sus propios pensamientos, sentimientos y comportamientos.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/foto2.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Neurociencia
                  </div>
                <h3 className="mt-0 mb-12">
                Neurociencia: la importancia de la investigación.
                  </h3>
                <p className="m-0">
                La neurociencia está ayudando a los científicos a comprender mejor el funcionamiento del cerebro y el sistema nervioso. Estos conocimientos pueden tener un impacto significativo en el tratamiento de enfermedades mentales y neurológicas. También pueden ayudar a los científicos a desarrollar nuevas terapias y tratamientos para estas condiciones.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/foto1.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Bienestar
                  </div>
                <h3 className="mt-0 mb-12">
                La familia y el bienestar de los niños.
                  </h3>
                <p className="m-0">
                Los padres tienen una responsabilidad vital en el cuidado y el desarrollo de los hijos. La familia es el principal agente de socialización de los niños y juega un papel crucial en el apoyo a la salud y el bienestar de los niños. La familia también es el principal proveedor de cuidados y atención a los niños.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/foto3.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;