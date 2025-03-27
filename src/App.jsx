import { Login } from "./components/login/Login";
import { useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Users } from "./Users/Users";

function App() {
  const [page, setPage] = useState("login");
  return (
    <>
     {page === "login" && <Login onShowTodo={() => setPage("expense")} />}
      {page === "expense" && <NewExpense onPageChange={setPage} />}
      {page === "users" && <Users onPageChange={setPage} />}
    </>
  );
}

export default App;
