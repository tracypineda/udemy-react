import React, { Component } from "react";


class Header extends Component {

    state = {
        // keywords: "",
        active: "active"

    }

    // inputChange(event) {
    //     const value = event.target.value === "" ? "active" : "non-active";
    //     this.setState({
    //         keywords: event.target.value,
    //         active: value
    //     })
    // }


    render() {
        
        return (
            <header className={this.state.active} >
                <div className="logo"
                >Logo</div>
                <input onChange={this.props.keywords} />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>


            </header>
        )
    }

}


export default Header;