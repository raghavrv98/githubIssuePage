import React from "react";
import { navTabs } from "./constants"

const Header = () => {

  return <>
    <div className="headerContainer">
      <div className="firstLine">
        <div className="repoNameContainer">
          <img className="repoIcon" alt="repo_icon" src={require('../icons/repo_icon.png')} />
          <span className="repoName">facebook</span>
          <span> / </span>
          <span className="projectName">react</span>
          <span className="repoType">public</span>
        </div>
        <ul>
          <li>
            <img alt="repo_icon" src={require('../icons/notif.png')} />
            <span>Notifications</span>
          </li>
          <li>
            <span>
              <img alt="repo_icon" src={require('../icons/star.png')} />
              <span>Star</span>
            </span>
            <span> | </span>
            <span>
              175k
            </span>
          </li>
          <li>
            <span>
              <img alt="repo_icon" src={require('../icons/fork.png')} />
              <span>Fork</span>
            </span>
            <span> | </span>
            <span>
              35.3k
            </span>
          </li>
        </ul>
      </div>
      <ul className="secondLine">
        {navTabs.map((val, index) => <li
          key={index}>
          <img alt={val.name} src={require(`../icons/${val.icon}`)} />
          <span>{val.name}</span>
          {val.count > 0 && <span>{val.count}</span>}
          {index === 1 && <hr />}
        </li>)}
      </ul>
    </div>
  </>

}

export default Header;