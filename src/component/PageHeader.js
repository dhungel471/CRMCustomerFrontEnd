import React from 'react';

function PageHeader(props) {
    return (
        <div className="d-flex mb-4 justify-content-center">
            <h1>{props.title}</h1>
        </div>
    );
}

export default PageHeader;