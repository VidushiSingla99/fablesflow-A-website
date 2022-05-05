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
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
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
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU="/>
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
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
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
              <img alt="art-web" className="col-4" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div>
      <div className="image">
        <img alt="art-web" className="head-im" src="https://media.istockphoto.com/photos/portrait-young-asian-businesswoman-holding-tabletsmartphone-in-formal-picture-id994751270?b=1&k=20&m=994751270&s=170667a&w=0&h=SGwZdYWzpyhbQpiAIBCMXmN7ZGid3G5RbdKG_qfarYU=" />
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
