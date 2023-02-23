import React from "react";

const Footer = () => {
  const data = [
    {
      name: "Terms"
    },
    {
      name: "Privacy"
    },
    {
      name: "Security"
    },
    {
      name: "Status"
    },
    {
      name: "Docs"
    }
  ]
  const data2 = [
    {
      name: "contact GitHub"
    },
    {
      name: "Pricing"
    },
    {
      name: "API"
    },
    {
      name: "Training"
    },
    {
      name: "Blog"
    },
    {
      name: "About"
    },
  ]

  return <>
    <ul className="footerDataUl">
      {data.map((val, index) => <li
        key={index}>
        <span>{val.name}</span>
      </li>)}
      <li className="githubLogoLi"><img src={require('../images/githubLogo.png')} alt="" /></li>
      {data2.map((val, index) => <li
        key={index}>
        <span>{val.name}</span>
      </li>)}
    </ul>
    <div><img className="githubLogo" src={require('../images/githubLogo.png')} alt="" /> &copy; 2023 Github, Inc.</div>
  </>
}

export default Footer;