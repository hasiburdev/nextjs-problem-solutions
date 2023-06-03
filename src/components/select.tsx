import { useState } from "react";

const getStatename = (state) => {
  return Object.values(state).flat();
};

const mountingType = {
  Stem: ["S75", "S50"],
  Cord: ["C", "CH", "CH1AC", "CG", "CO-1AC", "CO-3AC"],
  Gooseneck: ["G", "W"],
  Pole: ["P"],
  OutletBox: ["OB"],
};
export const Select = () => {
  const [selected, setSelected] = useState({
    ...mountingType,
  });

  const handleClick = (event) => {
    console.log("clicked");
    if (event.target.checked) {
      setSelected((prevState) => ({
        ...prevState,
        [event.target.name]: mountingType[event.target.name],
      }));
    } else {
      setSelected((prevState) => {
        const obj = { ...prevState };
        delete obj[event.target.name];
        return obj;
      });
    }
  };

  const handleChecked = (value) => {
    return !!Object.keys(selected).find((key) => key === value);
  };

  console.log(getStatename(selected));

  return (
    <div className="flex flex-col gap-4">
      <label className="border-2 border-solid border-black">
        Stem
        <input
          type="checkbox"
          name="Stem"
          onChange={handleClick}
          checked={handleChecked("Stem")}
        />
      </label>
      <label>
        Cord
        <input
          type="checkbox"
          name="Cord"
          onChange={handleClick}
          checked={handleChecked("Cord")}
        />
      </label>
      <label>
        Gooseneck
        <input
          type="checkbox"
          name="Gooseneck"
          onChange={handleClick}
          checked={handleChecked("Gooseneck")}
        />
      </label>
      <label>
        Pole
        <input
          type="checkbox"
          name="Pole"
          onChange={handleClick}
          checked={handleChecked("Pole")}
        />
      </label>
      <label>
        OutletBox
        <input
          type="checkbox"
          name="OutletBox"
          onChange={handleClick}
          checked={handleChecked("OutletBox")}
        />
      </label>
    </div>
  );
};
