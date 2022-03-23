//todolist with useState
import React, { useState } from "react";

export default function Example6() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));

    return storageJobs;
  });

  const submit = function () {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      //save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };
  return (
    <div>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />

      <button onClick={submit}>add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
