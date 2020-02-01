import React, { Component } from "react";


class Header extends Component {

    state = {
        keywords: "",
      
    }

    inputChange(e) {
        this.setState({
            keywords: e.target.value
        })
    }


    render() {
        return (
            <header>
                <div className="logo"
                >Logo</div>
                <input onChange={(event) => this.inputChange(event)} />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
               

            </header>
        )
    }

}


export default Header;