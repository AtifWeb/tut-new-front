import logo from "./logo.svg";
import "./App.css";
// import Home from "./views/pages/Home.jsx";
import Home from "./views/pages/New/Home.jsx";
import LoginSelect from "./views/pages/LoginSelect.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./views/pages/Login";
import LoginNew from "./views/pages/New/LoginNew";
import ChildLogin from "./views/pages/ChildLogin";
import studentlogin from "./assets/img/student-login.png";
import parentlogin from "./assets/img/parent-login.png";
import tutorlogin from "./assets/img/tutor-login.png";
import RegisterSelect from "./views/pages/RegisterSelect.jsx";
import CommonRegister from "./views/pages/Register/CommonRegister.jsx";
import TutorRegister from "./views/pages/TutorRegister.jsx";
import Tutors from "./views/pages/Tutors";
import SpecificTutor from "./views/pages/SpecificTutor";
import FindTutor from "./views/pages/FindTutor";
import BookLesson from "./views/pages/BookLesson";
import Lesson from "./views/pages/Lesson";
import LessonDoc from "./views/components/LessonDoc/LessonDoc";
import RegisterNew from "./views/pages/New/RegisterNew";
import RegisterNewTutor from "./views/pages/New/RegisterNewTutor";
import LoginSelectNew from "./views/pages/LoginSelectNew";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/LoginNew/:type" exact>
            <LoginNew />
          </Route>
          <Route path="/RegisterNew/:type" exact>
            <RegisterNew />
          </Route>
          <Route path="/RegisterNew/auth/tutor" exact>
            <RegisterNewTutor />
          </Route>

          <Route path="/BookLesson/:id" exact>
            <BookLesson />
          </Route>

          <Route path="/tutor/:id" exact>
            <SpecificTutor />
          </Route>
          <Route path="/find-a-tutor" exact>
            <FindTutor />
          </Route>
          <Route path="/tutors" exact>
            <Tutors />
          </Route>
          <Route path="/Login" exact>
            <LoginSelect />
          </Route>
          <Route path="/register" exact>
            <RegisterSelect />
          </Route>

          <Route path="/LoginSelectNew" exact>
            <LoginSelectNew />
          </Route>

          <Route path="/register/:type" exact>
            <CommonRegister />
          </Route>

          <Route path="/register/auth/tutor" exact>
            <TutorRegister />
          </Route>

          <Route path="/Login/TutorAuth/:type" exact>
            <Login
              img={tutorlogin}
              title="I am a Tutor"
              desc="Give lessons or manage bookings with your customers"
              mainheading="Tutor log in"
            />
          </Route>
          <Route path="/Login/ParentAuth/:type" exact>
            <Login
              img={parentlogin}
              title="I am a Parent"
              desc="Manage payments or lessons for your child"
              mainheading="Parent log in"
            />
          </Route>
          <Route path="/Login/StudentAuth/:type" exact>
            <ChildLogin
              img={studentlogin}
              title="I am a Student"
              desc="Have lessons, message your tutor or watch your lessons back"
              mainheading="Student log in"
            />
          </Route>
          {/* <Route path="/lesson/:id" exact>
            <Lesson />
          </Route>
          <Route path="/lessonDoc/" exact>
            <LessonDoc docId="61b2ef9654102529b3f549f9" />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
