/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { RxCrossCircled } from "react-icons/rx";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import useContextData from "../../../hooks/useContextData";
import { useState } from "react";
import Spinner from "../../../components/common/Spinner";
import { HashLink } from "react-router-hash-link";
import useScrollWithOffset from "../../../hooks/useScrollWithOffset";

const EditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { auth, setAuth } = useContextData();
  const axiosPrivate = useAxiosPrivate();
  const scrollWithOffset = useScrollWithOffset();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    setIsLoading(true);
    const {
      userName,
      emergencyContact,
      gender,
      martialStatus,
      nationalID,
      passportExpiryDate,
      passportNumber,
      presentAddress,
      permanentAddress,
      religion,
      dateOfBirth,
    } = formData;

    const updatedData = {
      userName: userName ? userName : auth?.user?.userName,
      gender: gender ? gender : auth?.user?.gender,
      martialStatus: martialStatus ? martialStatus : auth?.user?.martialStatus,
      presentAddress: presentAddress
        ? presentAddress
        : auth?.user?.presentAddress,
      permanentAddress: permanentAddress
        ? permanentAddress
        : auth?.user?.permanentAddress,
      dateOfBirth: dateOfBirth ? dateOfBirth : auth?.user?.dateOfBirth,
      passportNumber: passportNumber
        ? passportNumber
        : auth?.user?.passportNumber,
      passportExpiryDate: passportExpiryDate
        ? passportExpiryDate
        : auth?.user?.passportExpiryDate,
      nationalID: nationalID ? nationalID : auth?.user?.nationalID,
      emergencyContact: emergencyContact
        ? emergencyContact
        : auth?.user?.emergencyContact,
      religion: religion ? religion : auth?.user?.religion,
    };
    try {
      const { data } = await axiosPrivate.patch(
        "/user/profile/update",
        JSON.stringify(updatedData)
      );

      setIsLoading(false);
      setAuth({ ...auth, user: data.data });
      reset();
      toast(data.message, {
        icon: <TiTick className="text-brand__success" size={25} />,
      });

      navigate("/profile/personal-info#info");
    } catch ({ response }) {
      setIsLoading(false);
      if (response?.status === 403) {
        setAuth({});
      } else {
        const {
          data: { errorMessages },
        } = response;
        toast(errorMessages[0]?.message, {
          icon: <RxCrossCircled className="text-brand__dangerous" size={20} />,
        });
      }
    }
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-brand__font__size__lg font-brand__font__semibold text-primary">
          Edit Profile
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-2">
            <h2 className="text-brand__font__size__md text-brand__detail__text">
              Basic Info
            </h2>
          </div>
          <div>
            <label
              htmlFor="name"
              className="w-32 text-right text-brand__font__size__sm"
            >
              Name
            </label>
            <div className="flex-1">
              <input
                defaultValue={auth?.user?.userName}
                type="text"
                id="name"
                name="userName"
                className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                {...register("userName")}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-3 my-3">
            <div className="w-full">
              <label
                htmlFor="date"
                className="w-32 text-right text-brand__font__size__sm"
              >
                Date of Birth
              </label>
              <div className="flex-1">
                <input
                  defaultValue={auth?.user?.dateOfBirth}
                  type="date"
                  id="date"
                  name="dateOfBirth"
                  className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...register("dateOfBirth")}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="nid"
                className="w-32 text-right text-brand__font__size__sm"
              >
                National ID
              </label>
              <div className="flex-1">
                <input
                  defaultValue={auth?.user?.nationalID}
                  type="text"
                  id="nid"
                  name="nationalID"
                  className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...register("nationalID")}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-3 my-3">
            <div className="w-full">
              <label
                htmlFor="gender"
                className="w-32 text-right text-brand__font__size__sm"
              >
                Gender
              </label>
              <div className="flex-1">
                <select
                  defaultValue={auth?.user?.gender}
                  id="gender"
                  name="gender"
                  autoComplete="true"
                  className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent capitalize"
                  {...register("gender")}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="martial-status"
                className="w-32 text-right text-brand__font__size__sm"
              >
                Marital Status
              </label>
              <div className="flex-1">
                <select
                  defaultValue={auth?.user?.martialStatus}
                  id="martial-status"
                  name="martialStatus"
                  autoComplete="true"
                  className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent capitalize"
                  {...register("martialStatus")}
                >
                  <option value="">Select</option>
                  <option value="married">Married</option>
                  <option value="unmarried">Unmarried</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div>
          <div className="mb-2">
            <h2 className="text-brand__font__size__md text-brand__detail__text">
              Address
            </h2>
          </div>

          <div>
            <div className="flex flex-col lg:flex-row justify-between gap-3 my-3">
              <div className="w-full">
                <div className="flex-1">
                  <label
                    htmlFor="present-address"
                    className="w-32 text-right text-brand__font__size__sm"
                  >
                    Present Address
                  </label>
                  <textarea
                    defaultValue={auth?.user?.presentAddress}
                    rows={2}
                    type="text"
                    id="present-address"
                    name="presentAddress"
                    className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    {...register("presentAddress")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex flex-col lg:flex-row justify-between gap-3 my-3">
              <div className="w-full">
                <div className="flex-1">
                  <label
                    htmlFor="permanent-address"
                    className="w-32 text-right text-brand__font__size__sm"
                  >
                    Permanent Address
                  </label>
                  <textarea
                    defaultValue={auth?.user?.permanentAddress}
                    rows={2}
                    type="text"
                    id="permanent-address"
                    name="permanentAddress"
                    className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    {...register("permanentAddress")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div>
          <div className="mb-2">
            <h2 className="text-brand__font__size__md text-brand__detail__text">
              Passport & Others
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-3 my-3">
            <div className="w-full">
              <label
                htmlFor="password-number"
                className="w-32 text-right text-brand__font__size__sm"
              >
                Passport Number
              </label>
              <div className="flex-1">
                <input
                  defaultValue={auth?.user?.passportNumber}
                  type="text"
                  id="password-number"
                  name="passportNumber"
                  className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...register("passportNumber")}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="passport-expiry-date"
                className="w-32 text-right text-brand__font__size__sm"
              >
                Passport Expiry Date
              </label>
              <div className="flex-1">
                <input
                  defaultValue={auth?.user?.passportExpiryDate}
                  type="date"
                  id="passport-expiry-date"
                  name="passportExpiryDate"
                  className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...register("passportExpiryDate")}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-3 my-3">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="w-32 text-right text-brand__font__size__sm"
              >
                Phone
              </label>
              <div className="flex-1">
                <input
                  defaultValue={auth?.user?.emergencyContact}
                  type="text"
                  id="phone"
                  name="emergencyContact"
                  className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...register("emergencyContact")}
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="religion"
                className="w-32 text-right text-brand__font__size__sm"
              >
                Religion
              </label>
              <div className="flex-1">
                <input
                  defaultValue={auth?.user?.religion}
                  type="text"
                  id="religion"
                  name="religion"
                  className="w-full rounded-md appearance-none border border-gray-300 py-2 px-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...register("religion")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t h-[80px] p-2 w-full mt-8 flex justify-end">
          {isLoading ? (
            <Spinner styles="w-6 h-6 border-primary mt-2" />
          ) : (
            <div className="flex items-center justify-end gap-x-2">
              <HashLink
                to="/profile/personal-info#info"
                className="border border-primary w-fit h-fit px-4 py-1 rounded-md text-primary"
                scroll={(el) => scrollWithOffset(el, 135)}
              >
                Close
              </HashLink>

              <input
                type="submit"
                value="Save"
                className="px-4 py-1.5 rounded-md text-white bg-primary hover:bg-secondary duration-200 cursor-pointer"
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
