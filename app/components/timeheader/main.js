import React from 'react';

class TimeHeader extends React.Component {
    getTime(){
        var f=new Date()
        return f.getHours().toString()+":"+f.getMinutes().toString()+":"+f.getSeconds().toString();
    }
    render() {
        return (
            <div className="timeheader">
                <div className= "time">
                    <span className="icon-clock-white"></span>
                    <span className="txtTime">{this.getTime()}</span>
                </div>
            </div>
        );
    }
}

export default TimeHeader;