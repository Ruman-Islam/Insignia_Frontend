/* eslint-disable react/prop-types */
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
    fontSize: "16px",
    backgroundColor: "white",
  },
  suggestionsContainerOpen: {
    position: "absolute",
    top: "48px",
    left: "0",
    right: "0",
    maxHeight: "250px",
    overflowY: "auto",
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "20px 0",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
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

const Search = ({ firstDivStyles, secondDivStyles }) => {
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
    <div className={`${firstDivStyles} mr-auto w-full relative`}>
      <div
        className={`${secondDivStyles} relative rounded-full w-full border border-primary bg-white flex items-center justify-center`}
      >
        <div className="p-3 border-r">
          {loading ? (
            <AiOutlineLoading3Quarters
              size={22}
              className="animate-spin text-primary"
            />
          ) : (
            <GrSearch size={22} className="text-primary" />
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
          <Button className="bg-primary hover:bg-secondary duration-300 rounded-full py-2.5 px-5 mr-0.5 text-brand__white">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
