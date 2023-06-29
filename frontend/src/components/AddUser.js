import React, { useEffect, useState } from "react";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [error, setError] = useState(false);

  const addUser = async () => {
    if (
      !firstName ||
      !lastName ||
      !emailId ||
      !mobileNo ||
      !addressOne ||
      !addressTwo ||
      !state ||
      !city ||
      !zipCode
    ) {
      setError(true);
      return false;
    }

    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        emailId,
        mobileNo,
        addressOne,
        addressTwo,
        state,
        city,
        zipCode,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  useEffect(() => {
    // addProduct();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">Add New User</h1>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error && !firstName && (
                  <span className="invalidInput text-danger text-left">
                    Please enter user first name
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error && !lastName && (
                  <span className="invalidInput text-danger text-left">
                    Please enter user Last name
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Email Id"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
                {error && !emailId && (
                  <span className="invalidInput text-danger text-left">
                    Please enter product category
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Mobile"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
                {error && !mobileNo && (
                  <span className="invalidInput text-danger text-left">
                    Please enter product company name
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Address 1"
                  value={addressOne}
                  onChange={(e) => setAddressOne(e.target.value)}
                />
                {error && !addressOne && (
                  <span className="invalidInput text-danger text-left">
                    Please enter product company name
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Address 2"
                  value={addressTwo}
                  onChange={(e) => setAddressTwo(e.target.value)}
                />
                {error && !addressTwo && (
                  <span className="invalidInput text-danger text-left">
                    Please enter product company name
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                {error && !state && (
                  <span className="invalidInput text-danger text-left">
                    Please enter product company name
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                {error && !city && (
                  <span className="invalidInput text-danger text-left">
                    Please enter product company name
                  </span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Country Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                {error && !zipCode && (
                  <span className="invalidInput text-danger text-left">
                    Please enter product company name
                  </span>
                )}
              </div>
              <div className="form-group">
                <button
                  className="btn btn-sm btn-primary appButton my-3"
                  onClick={addUser}
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
