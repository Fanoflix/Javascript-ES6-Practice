// SPREAD OPERATOR ON OBJECTS

const first = { name: 'Ammar'};
const second = { job: 'Student'};

const combined = {...first, ...second, location: 'Pakistan'};
console.log(combined); // {name: "Ammar", job: "Student", location: "Pakistan"}


// cloning objects
// NOTE: We use [] for using spread operator with arrays.
// NOTE: We use {} for using spread operator with objects.

const newObj = {...first};

