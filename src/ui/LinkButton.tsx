/* eslint-disable react/prop-types */
import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * A button that navigates to a specified route or goes back in history.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {string} props.to - The route to navigate to, or "-1" to go back.
 * @returns {JSX.Element} The rendered button or link.
 */

type LinkButtonProps = {
  children: ReactNode;
  to: string | "-1";
};

function LinkButton({ children, to }: LinkButtonProps) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
