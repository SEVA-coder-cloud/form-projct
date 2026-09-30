import { useReducer } from "react";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return {
        ...state,
        name: action.payload,
      };
  }
}



const Form = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

   

function FormComponent({ state, dispatch }) {
  // Універсальний обробник для всіх інпутів
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Динамічно створюємо тип екшену: changeName, changeEmail або changePassword
    const actionType = `change${name.charAt(0).toUpperCase() + name.slice(1)}`;
    
    dispatch({ 
      type: actionType, 
      payload: value 
    });
  };

  return (
    <form>
      <input
        name="name"
        placeholder="name"
        value={state.name}
        onChange={handleChange}
      />
      
      <input
        name="email"
        placeholder="email"
        value={state.email}
        onChange={handleChange}
      />
      
      <input
        name="password"
        type="password"
        placeholder="password"
        value={state.password}
        onChange={handleChange}
      />
    </form>
  );
}

};




