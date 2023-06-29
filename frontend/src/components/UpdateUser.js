import {useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const UpdateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getuserDetails();
  }, []);

  const getuserDetails = async () => {
    let result = await fetch(`http://localhost:5000/update/${params.id}`);
    result = result.json();
    setFirstName(result.firstName);
    setLastName(result.lastName);
    setEmailId(result.emailId);
    setMobileNo(result.mobileNo);
    setAddressOne(result.addressOne);
    setAddressTwo(result.addressTwo);
    setState(result.state);
    setCity(result.city);
    setZipCode(result.zipCode);
  };
  console.warn();
  const updateUser = async () => {
    // console.warn( firstName, lastName, emailId, mobileNo, addressOne, addressTwo, state, city, zipCode  );
    let result = await fetch(`http://localhost:5000/user/${params.id}`, {
      method: "put",
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
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    navigate("/");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center">update user details</h1>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Email Id"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Mobile"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Address 1"
                  value={addressOne}
                  onChange={(e) => setAddressOne(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Address 2"
                  value={addressTwo}
                  onChange={(e) => setAddressTwo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control inputBox my-3"
                  placeholder="User Country Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button
                  className="btn btn-sm btn-primary appButton my-3"
                  onClick={updateUser}
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
}

export default UpdateUser;