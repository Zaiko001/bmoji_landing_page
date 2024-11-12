import React from 'react';
import { Snippet } from "@nextui-org/snippet";

interface FormattedSnippetProps {
  content: string;
}

const FormattedSnippet: React.FC<FormattedSnippetProps> = ({ content }) => {
  const displayText = (
    <>
      <span className="text-yellow-500">{content.slice(0, 3)}</span>
      <span>{content.slice(3, 6)}</span>
      <span>...</span>
      <span>{content.slice(-6, -3)}</span>
      <span className="text-yellow-500">{content.slice(-3)}</span>
    </>
  );

  return (
    <Snippet 
      hideSymbol 
      variant="bordered" 
      tooltipProps={{ delay: 0, closeDelay: 0, placement: 'bottom', offset: 15}}
      codeString={content} // Usamos codeString para copiar el texto completo
    >
      <span>{displayText}</span>
    </Snippet>
  );
};

export default FormattedSnippet;
