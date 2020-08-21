import React from "react";

export default function PizzaForm(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange
    // disabled,
    // errors,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    checkboxChange(name, checked);
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <div className="pizza">
      <h1>Build Your Own Pizza</h1>
      
      <form onSubmit={onSubmit}>
      <button>submit</button>
          <label>Name for Order:
              <input
              type="text"
              name="name"
              value={values.name}
              onChange={onInputChange}
              />

          </label>
        <label>
          Choice of Size
          <select onChange={onInputChange} value={values.size} name="size">
            <option selected value="select">
              Select
            </option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-tra">X-tra Large</option>
          </select>
        </label>

        <input
          type="radio"
          name="sauce"
          value="red"
          checked={values.sauce === "red"}
          onChange={onInputChange}
        />
        <label for="male">Original Red</label>
        <input
          type="radio"
          name="sauce"
          value="ranch"
          checked={values.sauce === "ranch"}
          onChange={onInputChange}
        />
        <label for="female">Garlic Ranch</label>
        <input
          type="radio"
          name="sauce"
          value="bbq"
          checked={values.sauce === "bbq"}
          onChange={onInputChange}
        />
        <label for="other">BBQ Sauce</label>
        <input
          type="radio"
          name="sauce"
          value="spinach"
          checked={values.sauce === "spinach"}
          onChange={onInputChange}
        />
        <label for="other">Spinach Alfredo</label>

        <label>
          pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.toppings.pineapple}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          ham
          <input
            type="checkbox"
            name="ham"
            checked={values.toppings.ham}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          olives
          <input
            type="checkbox"
            name="olives"
            checked={values.toppings.olives}
          />
        </label>

        <label>
          bacon
          <input
            type="checkbox"
            name="bacon"
            checked={values.toppings.bacon}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          cheddar
          <input
            type="checkbox"
            name="cheddar"
            checked={values.toppings.cheddar}
            onChange={onCheckboxChange}
          />
        </label>
      </form>
    </div>
  );
}
