import { useState } from "react";

type AccordionProps = {
    title: string;
    content:string;
    children?: React.ReactNode;
  };
const Accordion: React.FC<AccordionProps> = ({ title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-white border-t">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};


export default Accordion;
