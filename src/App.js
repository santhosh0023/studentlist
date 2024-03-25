

import Favourite from './Components/Favourite';
import Student from './Components/Students';
import { BrowserRouter, Route,Link, Routes } from 'react-router-dom';
import ArrContextProvider from './ArrContextprovider';

function App() {
  return (
    <div>
     <BrowserRouter>
          <nav className="bg-[red] p-4 text-white ">
            <Link to={"/"} className="underline decoration-black mx-8">Student List</Link>
            {" "}
            <Link to={"/favourite"} className="underline decoration-black">Favourite List</Link>
          </nav>
          <ArrContextProvider>
            <Routes>
              <Route path="/" element={<Student />} />
              <Route path="/favourite" element={<Favourite />} />
            </Routes>
          </ArrContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
