import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { IssueBoxHeaderData, apiDataConstant1 } from "./constants"
import axios from "axios";
import { timeAgo } from "./utils";

const IssueBox = () => {

  const [apiData, updateApiData] = useState([]);
  const [loading, updateLoading] = useState(true);
  const [errorMsg, updateErrorMsg] = useState("");
  const [dataPageNumber, setDataPageNumber] = useState(1);
  const [latestDataOnScroll, setLatestDataOnScroll] = useState([]);

  const fetchData = () => {
    const url = `https://api.github.com/repos/facebook/react/issues?page=${dataPageNumber}`;
    axios
      .get(url)
      .then(function (response) {
        const data = response?.data;
        updateLoading(false);
        let data1 = apiData.concat(data);
        updateApiData(data1);
        setLatestDataOnScroll(data)
        setDataPageNumber(dataPageNumber + 1)
        return data;
      })
      .catch(function (error) {
        updateErrorMsg(error.message);
      });
  };

  const fetchDataOnScrollHandler = () => {
    if (latestDataOnScroll.length < 30 || latestDataOnScroll === null) {
      updateLoading(false);
      return null;
    };
    fetchData();
  };

  const handleScroll = e => {
    if (
      !loading && e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight
    ) {
      updateLoading(true);
      fetchDataOnScrollHandler();
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return <>
    <div className="issueBoxContainer">
      <div className="header">
        <div className="left">
          <ul>
            <li>
              <img alt="issue" src={require('../icons/issue.png')} />
              <span>625 Open</span>
            </li>
            <li>
              <img alt="issue" src={require('../icons/check.jpeg')} />
              <span>625 Closed</span>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            {IssueBoxHeaderData.map((val, index) => <li
              key={index}>{val.name}
              <img alt="" src={require('../icons/down.png')} />
            </li>)}
          </ul>
        </div>
      </div>
      <div className="box" onScroll={handleScroll}>
        {<ul>
          {apiData.map((dataObj, index) => <li key={index} className="issueLi">
            <div className="left">
              <img alt="issue" src={require('../icons/issue.png')} />
              <div className="leftContent">
                <span className="title">{dataObj.title}</span>
                <ul className="statusTags">
                  {dataObj?.labels?.map((val, index) => <li
                    key={val?.id || index}
                    style={{ background: `#${val?.color}` }}
                    className="tags tooltip">
                    {val?.name}
                    <span className="tooltiptext">{val?.description || "No info Found"}</span>
                  </li>)}
                </ul>
                <p className="timeline">#{dataObj?.number} opened {timeAgo(dataObj?.created_at)} by {dataObj.user?.login}</p>
              </div>
            </div>
            <div className="right">
              <ul className="rightContent">
                <li style={{ visibility: dataObj.pull_request ? "visible" : "hidden" }}><img alt="" src={require('../icons/pr.png')} /><span>{1}</span></li>
                {dataObj?.assignees?.length > 0 &&
                  <li style={{ visibility: dataObj?.assignees?.length > 0 ? "visible" : "hidden" }}><img alt="" src={require('../images/githubLogo.png')} /><span>{dataObj?.assignees?.length}</span></li>}
                <li style={{ visibility: dataObj?.comments > 0 ? "visible" : "hidden" }}><img alt="" src={require('../icons/comment.png')} /><span>{dataObj?.comments}</span></li>
              </ul>
            </div>
          </li>
          )}
        </ul>
        }
        {loading && <p className="loadingText">Please Wait. Data is loading...</p>}
      </div>
      <div className="protip"><strong>ProTip!</strong> What's not been updated in a month: <span> updated:&lt;2021-08-17.</span></div>
      <hr />
      <Footer />
    </div>
  </>

}

export default IssueBox;