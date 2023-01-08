export const Register = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-6 mt-5">
        <h1 className="">Job application form</h1>
        <h2>Section 1</h2>
        <span title="close">X</span>
        <img
          src="https://via.placeholder.com/150"
          alt="a person with a laptop"
        />
      </div>

      <div className="col-12 col-md-6 mt-5">
        <h3 data-testid="custom-element mb-2">Application</h3>
        <p>All fields are mandatory</p>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Fullname"
              value="Vishwas"
              onChange={() => {}}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" className="form-control" />
          </div>
          <div className="mt-3">
            <label htmlFor="job-location mb-1">Job location</label>
            <select id="job-location" className="form-control mt-1">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div className="mt-3">
            <label>
              <input type="checkbox" id="terms" /> I agree to the terms and
              conditions
            </label>
          </div>
          <button disabled className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
