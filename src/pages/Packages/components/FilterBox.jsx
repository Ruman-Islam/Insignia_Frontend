/* eslint-disable react/prop-types */
import RangeSlider from "react-range-slider-input";

const FilterBox = ({ value, handleSlider }) => {
  return (
    <div className="text-brand__navy__blue h-full">
      <div className="text-brand__font__size__base font-brand__font__semibold p-4">
        Destination: 2 places found
      </div>

      <div className="text-brand__font__size__md  font-brand__font__semibold py-2 border-b p-4">
        <h6>Filter By</h6>
      </div>

      <div>
        <div className="p-4">
          <h6 className="font-brand__font__semibold">Price Range</h6>
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
          <div className="w-full flex justify-between pt-2 text-brand__font__size__sm">
            <span>BDT {value[0]}</span>
            <span>BDT {value[1]}</span>
          </div>
        </div>

        <div className="py-2 px-4 border-t">
          <h2 className="font-brand__font__semibold">Options</h2>
          <ul className="font-brand__font__light">
            <li className="flex items-center gap-x-2 w-fit py-1">
              <input
                type="checkbox"
                id="checkbox1"
                className="peer relative h-4 w-4 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-checkbox__filter__bg after:bg-[length:26px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-brand__navy__blue focus:outline-none"
              />
              <label htmlFor="checkbox1" className="w-full cursor-pointer">
                Regular
              </label>
            </li>
            <li className="flex items-center gap-x-2 w-fit py-1">
              <input
                type="checkbox"
                id="checkbox2"
                className="peer relative left-0 h-4 w-4 shrink-0 appearance-none rounded-sm border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-checkbox__filter__bg after:bg-[length:26px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-brand__navy__blue"
              />
              <label
                htmlFor="checkbox2"
                className="inline-block w-full cursor-pointer"
              >
                Premium
              </label>
            </li>
            <li className="flex items-center gap-x-2 w-fit py-1">
              <input
                type="checkbox"
                id="checkbox3"
                className="peer relative left-0 h-4 w-4 shrink-0 appearance-none rounded-sm border outline-none after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-checkbox__filter__bg after:bg-[length:26px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-brand__navy__blue"
              />
              <label
                htmlFor="checkbox3"
                className="inline-block w-full cursor-pointer"
              >
                Deluxe
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
