import { useState, useEffect, useCallback } from "react";

export default function Forma() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    if(email&&name){
        document.title=name
    }

  }, [email, name]);

  return (
    <>
      {" "}
      <form>
        <input type="text" value={name}  onChange={(event)=>setName(event.target.value)}/>
        <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
        <button type="button">change name</button>
      </form>
    </>
  );
}
