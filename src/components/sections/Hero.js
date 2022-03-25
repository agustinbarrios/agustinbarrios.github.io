import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >           
      <div className="container-sm">    
          <div class="opacity">
          </div>
                <div class="slider">
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
          </div>
        <div className={innerClasses}>
          <div className="hero-content">
          <div className="hero-logo">
                <Image
                      className="logo1"
                      src={require('./../../assets/images/logo0.png')}
                      alt="texto1"
                       />
                <Image
                      className="logo2"
                      src={require('./../../assets/images/logo1.png')}
                      alt="texto1"
                       />
                <Image
                      className="logo3"
                      src={require('./../../assets/images/logo2.png')}
                      alt="texto1"
                       />
               </div> 

            <div className="hero-text">
                <Image
                      className="texto1"
                      src={require('./../../assets/images/texto1.png')}
                      alt="texto1"
                       />
                <Image
                      className="texto2"
                      src={require('./../../assets/images/texto2.png')}
                      alt="texto1"
                       />
                <Image
                      className="texto3"
                      src={require('./../../assets/images/texto3.png')}
                      alt="texto1"
                       />
               </div> 

            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Mantente saludable para disfrutar de la vida al máximo.
            </h1>
            <div className="container-xs">

              <div class="scroll-downs">
                <div class="mousey">
                  <div class="scroller"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;