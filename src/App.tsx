import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Topic } from "./pages/topic";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="topic/:topicId" element={<Topic />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
