import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Users from "./users.json";

const currentCompany = Users[0];

export default class App extends React.Component {
    state = {
        users: currentCompany.users,
        nameOrder: 1,
        departOrder: 1,
        roleOrder: 1,
        searchValue: ""
    }

    sortByColumn = (property, order) => {

        const sortedUsers = currentCompany.users.sort((a, b) => {
            if(a[property] < b[property]) {
                return -1 * order;
            } else if (a[property] > b[property]) {
                return 1 * order;
            } else {
                return 0 * order;
            }

        });

        this.setState({ users: sortedUsers});

        let newOrder = 1;

        if (order === 1) {
            newOrder = -1;
        }

        switch(property) {
            case "lastName":
                this.setState({nameOrder: newOrder});
                break;
            case "department":
                this.setState({departOrder: newOrder});
                break;
            case "role":
                this.setState({roleOrder: newOrder});
                break;
        }
    }

    filterBySearch = (event) => {
        this.setState({searchValue: event.target.value});

        console.log(this.state.searchValue);
        const filteredUsers = currentCompany.users.filter(user => {
            return user.firstName.includes(this.state.searchValue) || user.lastName.includes(this.state.searchValue) || user.department.includes(this.state.searchValue) || user.role.includes(this.state.searchValue);
        });

        console.log(filteredUsers);
        this.setState({ users: filteredUsers });
    }

    clearSearch = () => {
        this.setState({users: currentCompany.users, searchValue: "" });
    }

    render() {
        return (
            <>
                <Header companyName={currentCompany.company} companyLogo={currentCompany.logo} brandColor={currentCompany.brandColor} search={this.filterBySearch} searchValue={this.state.searchValue} clear={this.clearSearch} />
                <Table users={this.state.users} columnSort={this.sortByColumn} nameOrder={this.state.nameOrder} departOrder={this.state.departOrder} roleOrder={this.state.roleOrder} />
            </>
        )
    }
}
