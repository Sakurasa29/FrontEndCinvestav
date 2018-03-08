import React from 'react';

class SubHeader extends React.Component {
    render() {
        return (
            <div className="subheader">
                <span>{this.props.titulo} </span>
            </div>
        );
    }
}

export default SubHeader;