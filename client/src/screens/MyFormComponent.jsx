import React, { useEffect, useState } from "react";
import "./MyFormComponent.css"; // Import your CSS file
import { useDispatch, useSelector } from "react-redux";
import {
  userAddress,
  userAddressData,
  upDateuserAddress,
} from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { getUserOrders } from "../actions/OrderAction";
const MyFormComponent = () => {
  const CurrentUser = useSelector((state) => state.loginUserReducer);
  const CurrentAddress = useSelector((state) => state.addressUserReducer);
  const userOrders = useSelector((state) => state.getUserOrderReducer);
  const { loading, error, orders } = userOrders;
  try{
    if (orders){
       
    }
  }catch(error){
         console.log("something went wrong")
         return;
  }
  const dispatch = useDispatch();
  const { currentUser } = CurrentUser;
  const { currentAddress } = CurrentAddress;

  const [demo, setDemo] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [pincode, setPincode] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  function SaveChanges() {
    if (
      name === "" ||
      location === "" ||
      pincode === "" ||
      surname === "" ||
      mobile === "" ||
      email === ""
    ) {
      alert("Please enter all details");
    } else {
      const userAdd = {
        userid: currentUser._id,
        name: name,
        surname: surname,
        email: email,
        mobile: mobile,
        location: location,
        shippingAddress: shippingAddress,
        
      };
      // dispatch(userAddress(userAdd));
      dispatch(upDateuserAddress(userAdd));
    }
  }
  try {
    useEffect(() => {
      dispatch(userAddressData(currentUser._id));
      dispatch(getUserOrders());
    }, []);
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      {loading ? (
        <>
          <div className="user-profile-container">
            {/* section 01 */}
            <div className="section1">
              <div>
                <p style={{color:"red"}}>No Internet Connection</p>
                <h2>Add Details</h2>
              </div>
            </div>

            {demo ? (
              <>
                {/* section 02 */}
                <div className="section02">
                  <div className="box1">
                    <p id="name">NAME</p>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Please enter your name here"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="box2">
                    <p id="sername">SURNAME</p>
                    <input
                      type="text"
                      id="sname"
                      placeholder="Please enter your surname here"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </div>
                </div>

                {/* section 03 */}
                <div className="section02">
                  <div className="box1">
                    <p id="name">Email Address</p>
                    <input
                      type="email"
                      id="fname"
                      placeholder="demo123@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="box2">
                    <p id="sername">Phone Number</p>
                    <input
                      type="tel"
                      id="sname"
                      placeholder="930910XXXX"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>

                {/* section 04 */}
                <div className="section02">
                  <div className="box1">
                    <p id="name">Location</p>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Please enter your address here"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="box2">
                    <p id="name">shippingAddress</p>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Please enter your shipping address here"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : null}

            {/* section 05 */}
            <div className="button">
              {demo ? (
                <>
                  {" "}
                  <button className="btn" onClick={() => SaveChanges()}>
                    Save
                  </button>
                  <button className="btn" onClick={() => setDemo(!demo)}>
                    Cancel
                  </button>
                </>
              ) : (
                <button className="btn" onClick={() => setDemo(!demo)}>
                  Add
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {currentAddress ? (
            <>
              <div className="user-profile-container">
                {/* section 01 */}
                <div className="section1">
{/*                   <div className="image"></div> */}
                  <div className="content">
                    <p id="address">
                      Name: {currentAddress?.name} {currentAddress?.surName}
                    </p>
                    <h2 id="user">Email: {currentAddress?.email}</h2>
                    <h2 id="user">Mobile: {currentAddress?.mobNumber}</h2>
                    <h2 id="user">Location: {currentAddress?.location}</h2>
                    <h2 id="user">
                      ShippingAddress: {currentAddress?.shippingAddress}
                    </h2>
                  </div>
                </div>

                {demo ? (
                  <>
                    {/* section 02 */}
                    <div className="section02">
                      <div className="box1">
                        <p id="name">NAME</p>
                        <input
                          type="text"
                          id="fname"
                          placeholder="Please enter your name here"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="box2">
                        <p id="sername">SURNAME</p>
                        <input
                          type="text"
                          id="sname"
                          placeholder="Please enter your surname here"
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* section 03 */}
                    <div className="section02">
                      <div className="box1">
                        <p id="name">Email Address</p>
                        <input
                          type="email"
                          id="fname"
                          placeholder="demo123@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="box2">
                        <p id="sername">Phone Number</p>
                        <input
                          type="tel"
                          id="sname"
                          placeholder="930910XXXX"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* section 04 */}
                    <div className="section02">
                      <div className="box1">
                        <p id="name">Location</p>
                        <input
                          type="text"
                          id="fname"
                          placeholder="Please enter your address here"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>

                      <div className="box2">
                        <p id="name">shippingAddress</p>
                        <input
                          type="text"
                          id="fname"
                          placeholder="Please enter your shipping address here"
                          value={shippingAddress}
                          onChange={(e) => setShippingAddress(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                ) : null}

                {/* section 05 */}
                <div className="button">
                  {demo ? (
                    <>
                      {" "}
                      <button className="btn" onClick={() => SaveChanges()}>
                        Save
                      </button>
                      <button className="btn" onClick={() => setDemo(!demo)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button className="btn" onClick={() => setDemo(!demo)}>
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="user-profile-container">
                {/* section 01 */}
                <div className="section1">
                  <div>
                    <h2>Add Details</h2>
                  </div>
                </div>

                {demo ? (
                  <>
                    {/* section 02 */}
                    <div className="section02">
                      <div className="box1">
                        <p id="name">NAME</p>
                        <input
                          type="text"
                          id="fname"
                          placeholder="Please enter your name here"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="box2">
                        <p id="sername">SURNAME</p>
                        <input
                          type="text"
                          id="sname"
                          placeholder="Please enter your surname here"
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* section 03 */}
                    <div className="section02">
                      <div className="box1">
                        <p id="name">Email Address</p>
                        <input
                          type="email"
                          id="fname"
                          placeholder="demo123@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="box2">
                        <p id="sername">Phone Number</p>
                        <input
                          type="tel"
                          id="sname"
                          placeholder="930910XXXX"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* section 04 */}
                    <div className="section02">
                      <div className="box1">
                        <p id="name">Location</p>
                        <input
                          type="text"
                          id="fname"
                          placeholder="Please enter your address here"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>

                      <div className="box2">
                        <p id="sername">Pin code</p>
                        <input
                          type="text"
                          id="sname"
                          placeholder="Please enter your pin code"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                        />
                      </div>
                      <div className="section02">
                        <div className="box1">
                          <p id="name">shippingAddress</p>
                          <input
                            type="text"
                            id="fname"
                            placeholder="Please enter your shipping address here"
                            value={shippingAddress}
                            onChange={(e) => setShippingAddress(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                {/* section 05 */}
                <div className="button">
                  {demo ? (
                    <>
                      {" "}
                      <button className="btn" onClick={() => SaveChanges()}>
                        Save
                      </button>
                      <button className="btn" onClick={() => setDemo(!demo)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button className="btn" onClick={() => setDemo(!demo)}>
                      Add
                    </button>
                  )}
                </div>
              </div>{" "}
            </>
          )}
        </>
      )}

      
    </>
  );
};

export default MyFormComponent;
