import { handleClickBtn } from '../utils';
function Button({ text, className, scrollToRef }) {
  return (
    <button
      className={`${className ?? ''}`}
      onClick={() => handleClickBtn(scrollToRef, true)}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.png" alt="arrow" />
        </div>
      </div>
    </button>
  );
}

export default Button;
