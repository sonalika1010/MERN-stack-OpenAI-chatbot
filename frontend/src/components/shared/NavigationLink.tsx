import { Link } from "react-router-dom";

type Props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
};

const NavigationLink = (props: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      e.preventDefault(); // Prevent navigation when there's an onClick
      props.onClick();
    }
  };

  return (
    <Link
      onClick={handleClick}
      className="nav-link"
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
    >
      {props.text}
    </Link>
  );
};

export default NavigationLink;