import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Users from "./users.json";

export default class App extends React.Component {
    
    state = {
        currentCompany: Users[0],
        users: Users[0].users,
        nameOrder: 1,
        departOrder: 1,
        roleOrder: 1,
        searchValue: ""
    }

    changeCompany = () => {
        if(this.state.currentCompany === Users[0]) {
            this.setState({ currentCompany: Users[1], users: Users[1].users, nameOrder: 1, departOrder: 1, roleOrder: 1, searchValue: "" });
        } else {
            this.setState({ currentCompany: Users[0], users: Users[0].users, nameOrder: 1, departOrder: 1, roleOrder: 1, searchValue: "" });
        }
    }

    sortByColumn = (property, order) => {

        const sortedUsers = this.state.users.sort((a, b) => {
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
            default:
                break;
        }
    }

    filterBySearch = (event) => {
        console.log(event.target.value);
        let searchTerm = event.target.value;

        let filteredUsers = this.state.currentCompany.users.filter(user => {
            return user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) || user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) || user.department.toLowerCase().includes(searchTerm.toLowerCase()) || user.role.toLowerCase().includes(searchTerm.toLowerCase());
        });

        this.setState({ users: filteredUsers, searchValue: searchTerm });
        console.log(this.state.users);
    }

    clearSearch = () => {
        this.setState({users: this.state.currentCompany.users, searchValue: "" });
    }

    render() {
        return (
            <>
                <Header companyName={this.state.currentCompany.company} companyLogo={this.state.currentCompany.logo} brandColor={this.state.currentCompany.brandColor} search={this.filterBySearch} searchValue={this.state.searchValue} clear={this.clearSearch} changeCompany={this.changeCompany} />
                <Table users={this.state.users} columnSort={this.sortByColumn} nameOrder={this.state.nameOrder} departOrder={this.state.departOrder} roleOrder={this.state.roleOrder} />
            </>
        )
    }
}
