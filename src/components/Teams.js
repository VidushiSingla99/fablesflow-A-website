import React from "react";

const Teams = ({darkMode }) => {
  return (
    <div className={darkMode ? 'teams col-9' :"teams col-9"}>
      <div className="row">
        <div className="col-9">
          <div className="pt-4 d-flex justify-content-between">
            <span
              type="button"
              class=" modal-button p-2"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <a
              href="#exampleModal"
                data-toggle="tooltip"
                data-placement="top"
                title="All information regarding you becoming part of our family"
              >
                Do you want to be our patent? (Click here!)
              </a>
            </span>

            <span
              type="button"
              class=" p-2 modal-button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <a
              href="/#"
                data-toggle="tooltip"
                data-placement="top"
                title="When your event and our is not clashing!"
              >
                Rent our Studio!(Click here!)
              </a>
            </span>
          </div>
          <div className="blog-header mt-4">This week's top blog</div>
          <div className="read-material pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            tortor consequat id porta nibh venenatis cras sed. Neque volutpat ac
            tincidunt vitae semper. Dictum fusce ut placerat orci nulla
            pellentesque. Orci eu lobortis elementum nibh tellus molestie nunc.
            Et odio pellentesque diam volutpat commodo. Dignissim cras tincidunt
            lobortis feugiat vivamus at. Quis auctor elit sed vulputate. Orci
            phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
            tortor. Velit euismod in pellentesque massa placerat. Dapibus
            ultrices in iaculis nunc sed augue lacus viverra vitae. Cursus
            euismod quis viverra nibh cras. Pellentesque massa placerat duis
            ultricies lacus. Sed faucibus turpis in eu mi bibendum neque egestas
            congue. Et sollicitudin ac orci phasellus egestas. Quis hendrerit
            dolor magna eget. Molestie nunc non blandit massa enim nec dui nunc.
            Ac tincidunt vitae semper quis lectus nulla at. Aliquam ut porttitor
            leo a diam sollicitudin tempor id eu. Blandit libero volutpat sed
            cras ornare arcu dui vivamus. Feugiat nibh sed pulvinar proin
            gravida hendrerit. Pellentesque habitant morbi tristique senectus et
            netus. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum.
            Ut aliquam purus sit amet. Vel orci porta non pulvinar. Scelerisque
            mauris pellentesque pulvinar pellentesque habitant morbi. Vitae
            aliquet nec ullamcorper sit amet risus nullam eget. Viverra ipsum
            nunc aliquet bibendum. Non blandit massa enim nec dui. Vitae
            elementum curabitur vitae nunc. Senectus et netus et malesuada fames
            ac turpis egestas sed. Urna condimentum mattis pellentesque id nibh
            tortor id aliquet lectus.
          </div>

          <div className="blog-header mt-4">
            Our Top Writers for this week (Tap!)
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item p-3 pt-4">
              <h3 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed modal-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Writer #1
                </button>
              </h3>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Vulputate enim nulla aliquet porttitor lacus luctus accumsan
                  tortor. Purus in mollis nunc sed id semper risus. Vulputate
                  enim nulla aliquet porttitor lacus luctus accumsan tortor.
                  Purus in mollis nunc sed id semper risus.
                </div>
              </div>
            </div>
            <div class="accordion-item p-3">
              <h3 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed modal-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Writer #2
                </button>
              </h3>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Vulputate enim nulla aliquet porttitor lacus luctus accumsan
                  tortor. Purus in mollis nunc sed id semper risus.
                </div>
              </div>
            </div>
            <div class="accordion-item p-3">
              <h3 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed modal-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Writer #3
                </button>
              </h3>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Vulputate enim nulla aliquet porttitor lacus luctus accumsan
                  tortor. Purus in mollis nunc sed id semper risus. Vulputate
                  enim nulla aliquet porttitor lacus luctus accumsan tortor.
                  Purus in mollis nunc sed id semper risus. Vulputate enim nulla
                  aliquet porttitor lacus luctus accumsan tortor. Purus in
                  mollis nunc sed id semper risus.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 pt-3">
          <div className="blog-header offset-lg-3 pb-1">Schedules</div>
          <i>
            For all the courses, in weekdays students can enroll for 3 classes,
            and for weekends 2 classes
          </i>
          <div>
            <div className="d-flex align-items-baseline">
              <div className="modal-button weekday mt-5 w-fit p-1 m-1 mb-3">
                Weekday-1
              </div>
              <div className="click-to-edit">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>

            <div className="d-flex align-items-baseline">
              <div className="modal-button weekday w-fit p-2 m-1 mb-3">
                Weekday-2
              </div>
              <div className="click-to-edit">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>
            <div className="d-flex align-items-baseline">
              <div className="modal-button weekday w-fit p-2 m-1 mb-3">
                Weekday-3
              </div>
              <div className="click-to-edit">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>
            <div className="d-flex align-items-baseline">
              <div className="modal-button weekday w-fit p-2 m-1 mb-3">
                Weekday-4
              </div>
              <div className="click-to-edit">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>
            <div className="d-flex align-items-baseline">
              <div className="modal-button weekday w-fit p-2 m-1 mb-3">
                Weekday-5
              </div>
              <div className="click-to-edit">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>
            <div className="d-flex align-items-baseline">
              <div className="modal-button weekday w-fit p-2 m-1 mb-3">
              Weekend-1
              </div>
              <div className="click-to-edit">
                Excepteur sint occaecat cupidatat non proident
              </div>
            </div>


          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header remove-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Do you want to be our patent?
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;
