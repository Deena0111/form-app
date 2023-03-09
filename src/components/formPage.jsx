import { useState } from "react";

import axios from "axios";

function FormPage() {

    const [fullName, setusername] = useState("");
    const [age, setAge] = useState("");
    const [mobileNo, setMobileNo] = useState("");


    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/save", {
                fullName: fullName,
                age: age,
                mobileNo: mobileNo,
            });
            alert("Form Submitted Successfully");

        } catch (err) {
            alert(err);
        }
    }
    return (
        <div>
            <div class="container mt-4" >
                <div class="card">
                    <h1>Form</h1>

                    <form>
                        <div class="form-group">
                            <label>Full name</label>
                            <input type="text" class="form-control" id="fullName" placeholder="Enter Name"

                                value={fullName}
                                onChange={(event) => {
                                    setusername(event.target.value);
                                }}
                            />

                        </div>

                        <div class="form-group">
                            <label>Age</label>
                            <input type="number" class="form-control" id="age" placeholder="Enter Age"

                                value={age}
                                onChange={(event) => {
                                    setAge(event.target.value);
                                }}

                            />
                        </div>

                        <div class="form-group">
                            <label>Mobile No</label>
                            <input type="number" class="form-control" id="mobileNo" placeholder="Enter MobileNo"

                                value={mobileNo}
                                onChange={(event) => {
                                    setMobileNo(event.target.value);
                                }}

                            />
                        </div>

                        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormPage;
