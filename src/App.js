import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Users from "./users.json";

const currentCompany = Users[0];

export default class App extends React.Component {
    state = {
        users: currentCompany.users,
        nameOrder: 1
    }

    sortByName = (order) => {

        const sortedUsers = currentCompany.users.sort((a, b) => {
            if(a.lastName < b.lastName) {
                return -1 * order;
            } else if (a.lastName > b.lastName) {
                return 1 * order;
            } else {
                return 0 * order;
            }

        });
        let newOrder = 1;
        
        if (order === 1) {
            newOrder = -1;
        }

        this.setState({ users: sortedUsers, nameOrder: newOrder});
    }

    render() {
        return (
            <>
                <Header companyName={currentCompany.company} companyLogo={currentCompany.logo} brandColor={currentCompany.brandColor} />
                <Table users={this.state.users} nameSort={this.sortByName} nameOrder={this.state.nameOrder}/>
            </>
        )
    }
}
