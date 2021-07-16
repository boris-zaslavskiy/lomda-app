import React from "react";
import styles from "./Signin.module.css";
import V from "./Images/V.png";

window.onload = function () {
  document.getElementById("loginMenuStudent").click();
};

const Signin = () => {
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
    document.getElementById("selector").style.display = "none";
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
    document.getElementById("selector").style.display = "inline";
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
                type="text"
                className={styles.formControl}
                id="inputName"
                placeholder="Name"
              />
              <input
                type="text"
                className={styles.formControl}
                id="inputSurename"
                placeholder="Surename"
              />
              <input
                type="email"
                className={styles.formControl}
                id="inputEmail"
                placeholder="E-mail"
              />
              <select id="selector">
                <option selected>Select your class</option>
                <option>5B - teacher John Smith</option>
                <option>5B - teacher Name</option>
                <option>5B - teacher Name</option>
              </select>
              <div className={styles.passwordForms}>
                <input
                  type="password"
                  className={styles.formControl}
                  id="inputPassword"
                  placeholder="Enter password"
                />
                <input
                  type="password"
                  className={styles.formControl}
                  id="inputPassword1"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <p className={styles.loginMenuCheckBoxLine}>
              <input
                className={styles.formCheckInput}
                type="checkbox"
                id="check1"
              />
              <label for="check1">
                I accept the <a href="#">Terms and conditions</a>
              </label>
              <button className={styles.loginButton}>Login</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
