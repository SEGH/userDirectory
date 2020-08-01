import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Users from "./users.json";

const currentCompany = Users[0];

export default function App() {
    return (
        <>
            <Header companyName={currentCompany.company} companyLogo={currentCompany.logo} />
            <Table users={currentCompany.users} />
        </>
    )
}
