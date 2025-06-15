/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  to?: string;
  type: "primary" | "small" | "secondary" | "round";
  className?: string;
  disabled?: boolean;
}

function Button({ children, to, type, onClick }: ButtonProps) {
  const base =
    "focus:ring-offset focus:ring-offset-5 inline-block bg-yellow-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed";

  const styles = {
    primary:
      base +
      "px-3 py-4 w-[8rem] text-center text-sm lg:px-6 lg:w-[12rem] lg:py-4 mt-5 rounded-lg",
    small: base + " py-2 px-3 lg:px-5 lg:py-2 text-sm rounded-lg",
    secondary:
      "inline-block text-sm rounded-lg border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + " py-2 px-3 lg:px-5 lg:py-3 text-sm rounded-full text-xl",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
