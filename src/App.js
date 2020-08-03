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
        roleOrder: 1
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

    render() {
        return (
            <>
                <Header companyName={currentCompany.company} companyLogo={currentCompany.logo} brandColor={currentCompany.brandColor} />
                <Table users={this.state.users} columnSort={this.sortByColumn} nameOrder={this.state.nameOrder} departOrder={this.state.departOrder} roleOrder={this.state.roleOrder}/>
            </>
        )
    }
}
