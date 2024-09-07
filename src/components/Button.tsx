interface ButtonProps {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="px-7 py-1.5 text-white text-sm rounded-md bg-indigo-600 hover:bg-indigo-500 cursor-pointer"
      onClick={onClick}
      type="button"
    >
      {title}
    </button>
  );
}
