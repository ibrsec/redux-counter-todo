 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo"; 
import Navbar from "./components/navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <div className="app"> 
    <Provider store={store}>
      
    <BrowserRouter>
<Navbar />
    <Routes>
      <Route path="/" element={<Counter />} />

      <Route path="/todo" element={<Todo />} />
        
         
    </Routes>
      
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
