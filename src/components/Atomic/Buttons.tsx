// out line  icon left or right
// rounded

interface ButtonIconProps {
  leftIcon?: string;
  rightIcon?: string;
  title: string;
  onClick?: () => void;
}

const ButtonIcon = ({
  leftIcon,
  rightIcon,
  title,
  onClick,
}: ButtonIconProps) => {
    return <button type="button" className="" onClick={onClick}>
        {leftIcon && leftIcon}
        <p className="" >{title}</p>
        {rightIcon && rightIcon}
    </button>;
};

export { ButtonIcon };
