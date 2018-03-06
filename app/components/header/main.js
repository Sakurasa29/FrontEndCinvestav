import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className= "back-ico">
                    <span className="ico icon-cinvestav"></span>
                </div>
                <span className="cinves">Cinvestav</span>
            </div>
        );
    }
}

export default Header;