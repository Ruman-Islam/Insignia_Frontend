import { GrSearch } from "react-icons/gr";
import Button from "../UI/Button";
import Autosuggest from "react-autosuggest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = {
  input: {
    width: "100%",
    border: "0",
    outline: "0",
    padding: "0 6px",
    fontSize: "15px",
  },
  suggestionsContainerOpen: {
    position: "absolute",
    top: "48px",
    left: "0",
    right: "0",
    maxHeight: "400px",
    overflowX: "hidden",
    overflowY: "auto",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: '5px 0'
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px 25px",
    margin: "5px 0",
    fontSize: "15px",
  },
  suggestionHighlighted: {
    backgroundColor: "rgb(229 231 235)",
  },
};

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestionValue = (suggestion) => {
    console.log("getSuggestionValue .... ", suggestion);
    navigate("https://tailwindcss.com/docs/border-radius");
    return suggestion.title;
  };

  const renderSuggestion = (suggestion) => {
    return <span>{suggestion.title}</span>;
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    if (inputLength === 0) {
      setSuggestions([]);
    } else {
      const url = `https://boighor-server.vercel.app/api/v1/book/search?char=${value}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data.result);
        });
    }
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onFocusGetSuggestions = () => {
    console.log("test .... ");
  };

  const inputProps = {
    placeholder: "Places to go...",
    value,
    onChange: onChange,
    onFocus: onFocusGetSuggestions,
  };

  return (
    <div className="max-w-[850px] mr-auto w-full relative mb-6 md:mb-0">
      <div className="relative w-full rounded-full border-2 border-brand__cyan bg-white flex items-center justify-center">
        <div className="p-3 border-r">
          <GrSearch size={20} />
        </div>
        <div className="w-full">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={theme}
          />
        </div>
        <div>
          <Button className="bg-brand__cyan hover:bg-brand__light__cyan duration-300 rounded-full py-2 px-4 mr-0.5 text-white">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
