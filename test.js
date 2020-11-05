const jobs = [
    {id: 1, isActive: true},
    {id: 1, isActive: true},
    {id: 1, isActive: false}
];

// -- 1 --
// const activeJobs = jobs.filter(function(job) { return job.isActive; });

// --- <> SAME AS BELOW <> ----

// -- 3 --
// const activeJobs = jobs.filter(
//     function(jobs) {
//         return jobs.isActive;
//     }
// )

// -- 2 --
const activeJobs = jobs.filter(job =>  job.isActive );
