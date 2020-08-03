import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Users from "./users.json";

const currentCompany = Users[0];

export default class App extends React.Component {
    state = {
        users: currentCompany.users
    }

    sortByName = () => {
        const sortedUsers = currentCompany.users.sort((a, b) => {
            if(a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            } else {
                return 0;
            }

        });
        
        console.log(sortedUsers);
        this.setState({ users: sortedUsers });
    }

    render() {
        return (
            <>
                <Header companyName={currentCompany.company} companyLogo={currentCompany.logo} brandColor={currentCompany.brandColor} />
                <Table users={this.state.users} nameSort={this.sortByName}/>
            </>
        )
    }
}
