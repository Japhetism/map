import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Quotes from "./pages/quotes";
import QuoteDetails from "./pages/quotes/details";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/procurement/quotes" element={<Quotes />} />
          <Route path="/procurement/quotes/:id" element={<QuoteDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
