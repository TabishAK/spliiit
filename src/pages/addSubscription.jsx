import React from "react";
import "../css/addSubscription.css";
import Navbar2 from "./../components/navbar2";

const AddSubscription = () => {
  return (
    <React.Fragment>
      <Navbar2 />
      <div className="register-steps text-center-2">
        <section
          id="registration-card9"
          className="etape-1-subscribe container-2 view"
        >
          <h1>Which subscription do you want to share?</h1>
          <form className="btn-subscription">
            <div className="line-suscribe">
              <input
                type="text"
                name="oName"
                placeholder="Service name"
                required="required"
              />
            </div>
            <div className="line-btn-suscribe mt-4">
              <button
                type="submit"
                data-action="confirm-service-name"
                className="btn-subscription-etape-1"
              >
                Next
              </button>
            </div>
          </form>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AddSubscription;
