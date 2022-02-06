import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard = ({ id, name, food }: CustomerCardType) => {
  const [customerInputFood, setCustomerInputFood] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerInputFood}
            onChange={(e) => setCustomerInputFood(e.target.value)}
          />
          <button
            onClick={() => {
              if (!customerInputFood) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerInputFood,
                })
              );
              setCustomerInputFood("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
