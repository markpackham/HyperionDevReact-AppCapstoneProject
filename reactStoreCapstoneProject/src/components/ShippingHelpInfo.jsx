const ShippingHelpInfo = () => {
  return (
    <>
      {/* Bootstrap modal */}
      <div
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        className="modal fade"
        id="exampleModalToggle"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Shipping Info
              </h5>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                We have some great shipping options available. Here are you
                choices.
              </p>
              <ul>
                <li>Economy: Delivery in 10 days and costs £1</li>
                <li>Business: Delivery in 5 days and costs £5</li>
                <li>Premium: Delivery in 3 days and costs £10</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-info"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                More Shipping Info{" "}
                <i className="fa-solid fa-arrow-right fa-sm"></i>
              </button>
              <button
                aria-label="Close"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                type="button"
              >
                Close <i className="fa-solid fa-x fa-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                More Info
              </h5>
              <button
                aria-label="Close"
                className="btn-close"
                data-bs-dismiss="modal"
                type="button"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                We have a 100% guarantee that none of your items will be damaged
                during shipping. We are so confident in our shipping services
                that we will compensate you double the items value if you can
                provide proof of damaged whilst shipping.
              </p>
              <p>
                Call us at +7712387659 if you are missing any items or wish to
                raise a complaint.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-info"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back To Main Info{" "}
                <i className="fa-solid fa-arrow-left fa-sm"></i>
              </button>
              <button
                aria-label="Close"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                type="button"
              >
                Close <i className="fa-solid fa-x fa-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="interests-btn-container mb-4">
        <a
          className="btn btn-info"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          Shipping Info <i className="fa-solid fa-question fa-sm"></i>
        </a>
      </div>
    </>
  );
};

export default ShippingHelpInfo;
