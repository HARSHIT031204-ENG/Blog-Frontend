import Allpages from "../Pages/AllPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GithubcallBack from "./Githubcallback";
import FinanceDashboard from "../Pages/trialPage";
import Sharecomponent from "../Pages/Sharecomponent"

function App() {
  const {
    HomePage,
    LoginPage,
    SignupPage,
    VerifyOtpPage,
    ExplorePage,
    CreateBlogPage,
    ShowBlogPage,
  } = Allpages;

  

  return (
    <Router>
      <Routes>
        
        <Route path="/Trial" element={<FinanceDashboard />} />
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
        <Route path="/Explore" element={<ExplorePage />} />
        <Route path="/CreateBlog" element={<CreateBlogPage />} />
        <Route path="/ShowBlog" element={<ShowBlogPage />} />
        <Route path="/signup/google" element={"Hello"} />
        <Route path="/github/callback" element={<GithubcallBack />} />
        <Route path="/share" element={<Sharecomponent />} />
      </Routes>
    </Router>
  );
}

export default App;
