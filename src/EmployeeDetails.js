import React,{Component} from 'react';

class EmployeeDetails extends React.Component{

    state={
        firstname:"",
        lastname:"",
        country:"",
        branch:"",
        employeeDetails:[]
    }

    handleInputChange = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            {
                [name]: value
            }
        )
    }


    getEmployeeDetails = () =>
    {
        const firstName = this.state.firstname;
        const lastName = this.state.lastname;
        const country = this.state.country;
        const branch = this.state.branch;
        const url = `https://localhost:44350/EmployeeDetailsApi/Employee/GetEmployeeDetails?FirstName=${firstName}&LastName=${lastName}&Country=${country}&Branch=${branch}`;
        fetch(url,
        {
            method: 'GET',
        })
        //.then(res => this.setState({ employeeDetails: res.data}))
        .then(res => console.log(res))
        .catch(console.log);
        console.log(this.state.employeeDetails);
    }

    renderTable = () =>
    {
        const empDetails = this.state.employeeDetails;
        console.log(empDetails);
        return empDetails.map((employee, index) => {
            const { EmployeeId, FullName, Gender, DateOfBirth, JoinedDate, Salary, Branch, Country } = employee //destructuring
            return (
               <tr key={EmployeeId}>
                  <td>{EmployeeId}</td>
                  <td>{FullName}</td>
                  <td>{Gender}</td>
                  <td>{DateOfBirth}</td>
                  <td>{JoinedDate}</td>
                  <td>{Salary}</td>
                  <td>{Branch}</td>
                  <td>{Country}</td>
               </tr>
            )
         })
    }

    render()
    {
        return(
            <div>
                <h3>Employee Details</h3>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstname" onChange={this.handleInputChange} ></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" onChange={this.handleInputChange} ></input>
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" name="country" onChange={this.handleInputChange} ></input>
                </div>
                <div>
                    <label>Branch</label>
                    <input type="text" name="branch" onChange={this.handleInputChange} ></input>
                </div>
                <div>
                    <button onClick={this.getEmployeeDetails}>Serach</button>
                </div>
                <div>
                    <table name="employee">
                    <tbody>
                        <tr>
                            <th>Employee Id</th>
                            <th>Full Name </th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Joined Date</th>
                            <th>Salary</th>
                            <th>Branch</th>
                            <th>Country</th>
                            </tr>
                     </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default EmployeeDetails;