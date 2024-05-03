export const Nav = () => {
  const getInputValue = (e) => {
    const getInputValue = document.querySelector(".search-inp");

    console.log(e.currentTarget.value);
  };

  return (
    <div className="navhead">
      <input
        type="search"
        className="search-inp"
        placeholder="Search"
        onInput={getInputValue()}
      />
    </div>
  );
};

// export default Nav;
