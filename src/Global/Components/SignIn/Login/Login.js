import React from "react";
import styles from "./Login.module.css";
import V from "./Images/V.png";

window.onload = function () {
  document.getElementById("loginMenuStudent").click();
};

const Login = () => {
  function teacherFormChoose(e) {
    e.target.style.border = "0.12vw solid #F77D48";
    e.target.style.borderBottom = "0";
    e.target.style.borderTopLeftRadius = "1vw";
    e.target.style.borderTopRightRadius = "0.12vw";
    e.target.style.color = "#39393B";
    e.target.style.backgroundImage = `url(${V})`;
    e.target.style.backgroundPosition = "18vw";
    e.target.style.backgroundSize = "1.5vw";
    e.target.style.backgroundRepeat = "no-repeat";
    e.target.style.fontWeight = "800";
    const button2 = document.getElementById("loginMenuStudent");
    button2.style.border = 0;
    button2.style.borderBottom = "0.12vw solid #F77D48";
    button2.style.borderRight = "0.12vw solid #F77D48";
    button2.style.borderTop = "0.12vw solid #babcbd";
    button2.style.borderRight = "0.12vw solid #babcbd";
    button2.style.borderTopRightRadius = "1vw";
    button2.style.color = "#868A8B";
    button2.style.backgroundImage = "none";
    button2.style.fontWeight = "400";
  }

  function studentFormChoose(e) {
    e.target.style.border = "0.12vw solid #F77D48";
    e.target.style.borderBottom = "0";
    e.target.style.borderTopRightRadius = "1vw";
    e.target.style.borderTopLeftRadius = "0.12vw";
    e.target.style.color = "#39393B";
    e.target.style.backgroundImage = `url(${V})`;
    e.target.style.backgroundPosition = "18vw";
    e.target.style.backgroundSize = "1.5vw";
    e.target.style.backgroundRepeat = "no-repeat";
    e.target.style.fontWeight = "800";
    const button2 = document.getElementById("loginMenuTeacher");
    button2.style.border = 0;
    button2.style.borderBottom = "0.12vw solid #F77D48";
    button2.style.borderLeft = "0.12vw solid #F77D48";
    button2.style.borderTop = "0.12vw solid #babcbd";
    button2.style.borderLeft = "0.12vw solid #babcbd";
    button2.style.borderTopLeftRadius = "1vw";
    button2.style.color = "#868A8B";
    button2.style.backgroundImage = "none";
    button2.style.fontWeight = "400";
  }

  return (
    <div className={styles.loginMenu}>
      <div className={styles.loginMenuTabs}>
        <button id="loginMenuTeacher" onClick={teacherFormChoose}>
          I'm a teacher
        </button>
        <button id="loginMenuStudent" onClick={studentFormChoose}>
          I'm a student
        </button>
      </div>

      <div className={styles.loginMenuContent}>
        <div className="tabPane" id="navLogin">
          <form>
            <div className={styles.loginMenuForms}>
              <input
                type="email"
                className={styles.formControl}
                id="inputEmail"
                placeholder="e-mail"
              />
              <input
                type="password"
                className={styles.formControl}
                id={styles.inputPassword}
                placeholder="password"
              />
            </div>
            <p className={styles.loginMenuCheckBoxLine}>
              <input
                className={styles.formCheckInput}
                type="checkbox"
                id="check1"
              />
              <label for="check1">Remember me</label>
              <a href="#">Forgot your password?</a>
            </p>
            <button className={styles.loginButton}>Login</button>
          </form>
        </div>

        <div className={styles.signIn}>
          <p>Don't have an account?</p>
          <a href="#">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
