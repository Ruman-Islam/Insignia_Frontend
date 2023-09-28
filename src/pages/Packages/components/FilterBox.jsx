/* eslint-disable react/prop-types */

import RangeSlider from "react-range-slider-input";

const FilterBox = ({ value, handleSlider }) => {
  return (
    <div>
      <div className="text-brand__font__size__base text-brand__navy__blue font-brand__font__semibold p-4">
        Destination: 2 places found
      </div>

      <div className="text-brand__font__size__md text-brand__navy__blue font-brand__font__semibold py-5 border-b p-4">
        <h6>Filter By</h6>
      </div>
      
      <div className="p-4">
        <h6 className="font-brand__font__semibold text-brand__navy__blue">
          Price Range
        </h6>
        <div className="mt-2">
          <RangeSlider
            min={10000}
            max={30000}
            step={10}
            defaultValue={value}
            onInput={handleSlider}
            className="h-1 range-slider-ab"
          />
        </div>
        <div className="w-full flex justify-between py-2 text-brand__font__size__sm text-brand__navy__blue">
          <span>BDT {value[0]}</span>
          <span>BDT {value[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
