import PropTypes from "prop-types";
import styles from "./Icons.module.css";
function Heart({
  active,
  colorBorder = "#000",
  bgcolor = "#fff",
  colorBorderActive = "red",
  bgcolorActive = "red",
  width = 15,
  height = 13,
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 13"
      fill={active ? bgcolorActive : bgcolor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 4.6617C14 8.21672 7.5 11.9998 7.5 11.9998C7.5 11.9998 1 8.21672 1 4.6617C1 -0.165119 7.5 -0.0999381 7.5 4.14814C7.5 -0.0999381 14 -0.0363918 14 4.6617Z"
        stroke={active ? colorBorderActive : colorBorder}
        strokeWidth="1.10308"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Heart.propTypes = {
  active: PropTypes.bool,
  colorBorder: PropTypes.string,
  bgcolor: PropTypes.string,
  colorBorderActive: PropTypes.string,
  bgcolorActive: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export { Heart };
