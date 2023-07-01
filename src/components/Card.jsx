import PropTypes from 'prop-types';
const Card = ({ type, title, body }) => {
  let src = '';
  switch (type) {
    case 'animation':
      src = '../assets/icon-animation.svg';
      break;
    case 'business':
      src = '../assets/icon-business.svg';
      break;
    case 'photography':
      src = '../assets/icon-photography.svg';
      break;
    case 'design':
      src = '../assets/icon-design.svg';
      break;
    case 'crypto':
      src = '../assets/icon-crypto.svg';
      break;
    default:
      src = '../assets/icon-animation.svg';
  }
  return (
    <div className=' relative flex flex-col min-h-[260px] max-h-[322px] px-8 pt-16 pb-10 bg-white shadow-2xl rounded-2xl'>
      <div className='absolute top-[-28px]'>
        <img
          src={src}
          alt=''
        />
      </div>
      {/* Content */}
      <div className='min-h-full flex flex-col gap-6'>
        <h4 className='heading-sm text-darkBlue'>{title}</h4>
        <p className='body-md text-gray'>{body}</p>
        <a
          href='#'
          className='body-md self-baseline text-pink font-bold hover:text-lightPink'
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

Card.defaultProps = {
  type: 'animation',
  title: 'Animation',
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
};

export default Card;
