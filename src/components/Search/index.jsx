import { GrSearch } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
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
    backgroundColor: "#FAF7F5",
  },
  suggestionsContainerOpen: {
    position: "absolute",
    top: "48px",
    left: "0",
    right: "0",
    maxHeight: "300px",
    overflowY: "auto",
    backgroundColor: "#FAF7F5",
    borderRadius: "12px",
    padding: "20px 0",
  },
  suggestion: {
    cursor: "pointer",
    padding: "10px 20px",
    fontSize: "15px",
  },
  suggestionHighlighted: {
    backgroundColor: "#EEEEEE",
  },
};

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSuggestionValue = (suggestion) => {
    console.log("getSuggestionValue .... ", suggestion);
    navigate("https://tailwindcss.com/docs/border-radius");
    return suggestion.title;
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div>
        <div className="flex items-center gap-x-2">
          <div className="border flex justify-center items-center w-9 h-9 rounded-full shadow-sm">
            <GrLocation size={20} />
          </div>
          <div className="pl-1">
            <p>{suggestion.title}</p>
            <small className="block">Chittagong Division, Bangladesh</small>
          </div>
        </div>
      </div>
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    setLoading(true);
    if (inputLength === 0) {
      setLoading(false);
      setSuggestions([]);
    } else {
      const url = `https://boighor-server.vercel.app/api/v1/book/search?char=${value}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data.result);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
          setLoading(false);
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
    <div className="max-w-[650px] md:max-w-[755px] lg:max-w-[925px] mr-auto w-full relative mb-6 md:mb-0">
      <div className="relative w-full rounded-full border-2 border-brand__cyan bg-[#FAF7F5] flex items-center justify-center">
        <div className="p-3 border-r">
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" size={22} />
          ) : (
            <GrSearch size={22} />
          )}
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
          <Button className="bg-brand__cyan hover:bg-brand__light__cyan duration-300 rounded-full py-2 px-4 mr-0.5 text-brand__white">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
