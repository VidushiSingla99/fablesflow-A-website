import React from "react";

// C:\Users\VIDUSHI\Desktop\new\my-app\src\components\theater.jpg

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <div>
      <div class="intro bg-1 p-5">Do you want to know about us? <i>Tap our pictures</i></div>
      <img alt="art"
        className="col-4 offset-lg-2 pt-4 h-320"
        src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU="
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      ></img>
      <img
      alt="art"
        className="col-4 pt-4 h-320"
        src="https://media.istockphoto.com/photos/man-working-online-at-home-on-a-laptop-picture-id1149033316?k=20&m=1149033316&s=612x612&w=0&h=0v6XVdSMXXzAWgnmx_YA2UkAzYkCMJFRM8NbFrgW-NE="
        data-toggle="collapse"
        href="#collapseExample2"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      />



      <div class="collapse col-4 offset-lg-6" id="collapseExample2">
        <div class="card card-body  position-absolute">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>

      <div class="collapse col-4 offset-lg-2" id="collapseExample">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>

      <div class="intro bg-4 p-5 mt-4">
        We have created a space for you to display your talents and love for
        film making. If you are a<strong>&nbsp; Beginner</strong>, &nbsp;
        <strong>An Intermideate Practitioner&nbsp;</strong>or&nbsp;&nbsp;
        <strong>An Expert, &nbsp;&nbsp;</strong>Come join us and FILL OUR FORM,
        BE PART OF OUR TEAM!
      </div>

      <div class="intro bg-5 p-5 d-flex justify-content-around">
        <div>
          <strong>CONTACT US:-</strong>
        </div>
        <div>Insta- @fablesflow</div>
        <div>FB- @fablesflowFILMS</div>
        <div>Email- fablesflow@gmail.com</div>
        <div>Phone- 9136078400</div>
      </div>
    </div>
  );
};
export default Navbar;
