import React, { useState } from "react";

const Events = () => {
  const [selectedClient, setSelectedClient] = useState("one"); //default value

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
    console.log(selectedClient);
  }

  function getAnimalDiv() {
    switch (selectedClient) {
      case "0":
        return (
          <div>
            <div className="acting pt-5">ACTING</div>
            <div className="acting-sub p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              consectetur erat et nisi interdum, eget laoreet erat euismod.
              Proin eget varius nisi. Pellentesque eget dolor efficitur,
              volutpat est non, laoreet magna. Pellentesque sed metus felis.
              Pellentesque et placerat diam, ac efficitur mi. Suspendisse
              placerat ut ipsum vel luctus. Nulla laoreet, ligula eget
              consectetur imperdiet, tortor nunc molestie nunc, ut volutpat erat
              orci sit amet eros.
            </div>
            <div class="input-group rounded d-flex justify-content-center pt-3">
              <input
                type="search"
                class="form-control rounded col-4"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <div className="d-flex justify-content-around p-4">
              <img alt="art-web" className="col-4" src="https://www.allaboutcareers.com/wp-content/uploads/2020/11/acting-job-description.jpg" />
              <img alt="art-web" className="col-4" src="https://www.nycastings.com/wp-content/uploads/2015/09/movie.jpg" />
              <img alt="art-web" className="col-4" src="https://www.stagemilk.com/wp-content/uploads/2016/04/theatre.jpeg" />
            </div>
          </div>
        );
      case "1":
        return (
          <div>
            <div className="acting pt-5">DIRECTION</div>
            <div className="acting-sub p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              consectetur erat et nisi interdum, eget laoreet erat euismod.
              Proin eget varius nisi. Pellentesque eget dolor efficitur,
              volutpat est non, laoreet magna. Pellentesque sed metus felis.
              Pellentesque et placerat diam, ac efficitur mi. Suspendisse
              placerat ut ipsum vel luctus. Nulla laoreet, ligula eget
              consectetur imperdiet, tortor nunc molestie nunc, ut volutpat erat
              orci sit amet eros.
            </div>
            <div class="input-group rounded d-flex justify-content-center pt-3">
              <input
                type="search"
                class="form-control rounded col-4"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <div className="d-flex justify-content-around p-4">
            <img alt="art-web" className="col-4" src="https://www.allaboutcareers.com/wp-content/uploads/2020/11/acting-job-description.jpg" />
              <img alt="art-web" className="col-4" src="https://www.nycastings.com/wp-content/uploads/2015/09/movie.jpg" />
              <img alt="art-web" className="col-4" src="https://www.stagemilk.com/wp-content/uploads/2016/04/theatre.jpeg" />
              </div>
          </div>
        );
      case "2":
        return (
          <div>
            <div className="acting pt-5">CINEMATOGRAPHY</div>
            <div className="acting-sub p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              consectetur erat et nisi interdum, eget laoreet erat euismod.
              Proin eget varius nisi. Pellentesque eget dolor efficitur,
              volutpat est non, laoreet magna. Pellentesque sed metus felis.
              Pellentesque et placerat diam, ac efficitur mi. Suspendisse
              placerat ut ipsum vel luctus. Nulla laoreet, ligula eget
              consectetur imperdiet, tortor nunc molestie nunc, ut volutpat erat
              orci sit amet eros.
            </div>
            <div class="input-group rounded d-flex justify-content-center pt-3">
              <input
                type="search"
                class="form-control rounded col-4"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span class="input-group-text border-0" id="search-addon">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <div className="d-flex justify-content-around p-4">
            <img alt="art-web" className="col-4" src="https://www.allaboutcareers.com/wp-content/uploads/2020/11/acting-job-description.jpg" />
              <img alt="art-web" className="col-4" src="https://www.nycastings.com/wp-content/uploads/2015/09/movie.jpg" />
              <img alt="art-web" className="col-4" src="https://www.stagemilk.com/wp-content/uploads/2016/04/theatre.jpeg" />
                </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="col-10">
      <div className="image">
        <img alt="art-web" className="head-im" src="https://assets.visitmilwaukee.org/visitmke/media/global/Partner%20Images/Gallery%20Size/VM-MilwaukeeRepertoryTheater-Performance2.jpg?ext=.jpg&mode=crop&width=1920&height=1080&scale=both" />
        <h2 className="image-overlay offset-lg-3">
          <span>Art Helps Us: MOVE</span>
        </h2>
        <div className="below-text offset-lg-3">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet lectus tellus. Mauris id ante volutpat, porttitor odio
            porttitor, volutpat quam. Duis ac interdum ligula. Nulla feugiat
            neque erat. Donec dignissim nibh a massa condimentum congue. Morbi
            pellentesque vel ex nec blandit. Integer hendrerit mattis justo, eu
            sodales mi efficitur ac. Phasellus sed luctus risus, ut consectetur
            elit. Pellentesque a convallis turpis.
          </span>
        </div>
        <div className="dropdown below-dropdown offset-lg-3 mb-5">
          <select
            value={selectedClient}
            onChange={handleSelectChange}
            className="pt-1 pb-1 col-2 opacity-6"
          >
            <option value="0">ACTING</option>
            <option value="1">DIRECTION</option>
            <option value="2">CINEMATOGRAPHY</option>
          </select>
        </div>

        {getAnimalDiv()}
      </div>
    </div>
  );
};
export default Events;
