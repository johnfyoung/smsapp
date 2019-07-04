import React, { Component } from "react";

// Components
import Header from "./partials/Header";
import Debug from "./partials/Debug";

const menuItems = [
  {
    id: "link1",
    body: "Link 1",
    href: "/link-1"
  },
  {
    id: "link2",
    body: "Link 2",
    href: "/link-2"
  },
  {
    id: "dropdown1",
    body: "My Dropdown",
    isDropdown: true,
    subMenus: [
      {
        id: "submenu1",
        body: "Submenu 1",
        href: "/sub/submenu-1",
      },
      {
        id: "submenu2",
        body: "Submenu 2",
        href: "/sub/submenu-2",
      },
    ]
  },
]

class App extends Component {
  state = {
    displaySize: "",
    display: "",
    displayMenu: ""
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize.bind(this));
    this.onResize();
  }

  onResize() {
    const width = window.innerWidth;
    let display = this.state.display;
    let menu = "desktop";

    if (width < 576) {
      display = "xs";
      menu = "mobile";
    } else if (width >= 576 && width < 768) {
      display = "sm";
      menu = "mobile";
    } else if (width >= 768 && width < 992) {
      display = "md";
      menu = "mobile";
    } else if (width >= 992 && width < 1200) {
      display = "lg";
    } else {
      display = "xl";
    }

    this.setState({
      displaySize: width,
      display: display,
      displayMenu: menu
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="bg-light">
          <div className={`${this.state.displayMenu === "desktop" ? "container" : ""}`}><Header menuItems={menuItems} brandHref={"/"} bg={"light"}>Cool App</Header></div>
        </div>
        <Debug vals={this.state} />
      </div>
    );
  }
}

export default App;
