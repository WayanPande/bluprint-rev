import _ from "lodash";
import React from "react";

interface IProps {
  text: string;
  highlight: string;
  hover: boolean;
}

const HighlightedText: React.FC<IProps> = ({
  text = "",
  highlight = "",
  hover = false,
}) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark
              className={` ${
                hover
                  ? "bg-blue-400 dark:bg-blue-600 text-white underline underline-offset-2"
                  : "bg-transparent text-blue-400"
              }`}
              key={i}
            >
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </span>
  );
};

export default HighlightedText;
