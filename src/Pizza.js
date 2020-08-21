import React from "react";

function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your Pizza&apos;s details...</h3>;
  }

  return (
    <div className="friend container">
        <p>Name of Order: {details.name}</p>
       <p>Size:{details.size}</p>
      <p>Sauce: {details.sauce}</p>
      

      {!!details.toppings && !!details.toppings.length && (
        <div>
          toppings:
          <ul>
            {details.toppings.map((like, idx) => (
              <li key={idx}>{like}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Pizza;
