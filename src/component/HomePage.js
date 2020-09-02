import React from 'react';
import PageHeader from "./PageHeader";

function HomePage(props) {
    return (
      <>
        <PageHeader title="Welcome to the Manage Customers System" />
        <div className="d-flex mb-4 justify-content-center"> 
          <img src="https://www.allstate.com/resources/Allstate/css/landingpages/MVT/beacon-blue.svg?v=47c6d3bd-9020-b908-c394-a90669c19841" alt="Allstate Insurance" data-di-res-id="733ba733-f2fd8d2b" data-di-width="130" data-di-height="19"></img>
        </div>
     </>
    )
}

export default HomePage;