import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  jobList: state.jobList,
});

// console.log("here console: ", jobList);

const JobList = (jobList) => {
  return (
    <div>
      <ul>
        {jobList.map((job, i) => (
          <li key={i}>
            <Link to={`/${job.company_name}`}>{job.company_name}</Link>
            {job.title}
          </li>
        ))}
      </ul>
      <h1>gg</h1>
    </div>
  );
};

export default connect(mapStateToProps)(JobList);
