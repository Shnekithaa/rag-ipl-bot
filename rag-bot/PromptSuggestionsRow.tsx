import PromptSuggestionButton from "./PromptSuggestionButton";

const PromptSuggestionsRow = ({onPromptClick}) => {
  const prompts = [
    "Where did the finals of IPL happen in 2024?",
    "Which team won the finals in 2023?",
    "When did the mega auction for Tata IPL 2025 happened?",
  ];
  return (
    <div className="prompt-suggestion-row">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton key={`suggestion-${index}`} text={prompt} onClick={() => onPromptClick(prompt)} />
      ))}
    </div>
  );
};
export default PromptSuggestionsRow;
