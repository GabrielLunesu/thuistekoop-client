import React from "react";

const Form = () => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="text-white ff-heading fw600 mb10">
              First Name
            </label>
            <input
              type="text"
              className="form-control bg-white text-white border-0 h50 lh50 pl15 pr15 fw500"
              placeholder="Your Name"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-lg-12">
          <div className="mb20">
            <label className="text-white  ff-heading fw600 mb10">
              Last Name
            </label>
            <input
              type="text"
              className="form-control  bg-white text-white border-0 h50 lh50 pl15 pr15 fw500"
              placeholder="Your Name"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="text-white  ff-heading fw600 mb10">Email</label>
            <input
              type="email"
              className="form-control  bg-white text-white border-0 h50 lh50 pl15 pr15 fw500"
              placeholder="Your Name"
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="text-white  ff-heading fw600 mb10">
              Textarea
            </label>
            <textarea
              cols={30}
              rows={4}
              className="form-control  bg-white text-white border-0 h50 lh50 pl15 pr15 fw500"
              placeholder="There are many variations of passages."
              defaultValue={""}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12 items-center justify-center">
          <div className="d-grid">
            <button class="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-white px-6 py-2 text-black transition">
              <a href="#" class="group flex w-full items-center justify-center rounded py-1 text-center font-bold">Submit</a>
              <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
