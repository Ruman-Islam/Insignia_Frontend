const Spinner = () => {
  return (
    <div
      className="h-6 w-6 inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent border-white align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
};

export default Spinner;
