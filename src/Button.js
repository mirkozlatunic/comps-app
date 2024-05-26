import PropTypes from "prop-types";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  checkVaritationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!danger) +
      Number(!!warning);

    if (count > 1) {
      return new Error(
        "Only one primary, secondary,success,danger and warning cna be true"
      );
    }
  },
};

export default Button;
