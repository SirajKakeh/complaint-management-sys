const { execute } = require("../framework/database");
const model = require("../model/complaint.js");

module.exports.addComplaint = data => {
  const query = `INSERT INTO complaint
  (
    first_name,
    last_name,
    department_id,
    urgency_id,
    email,
    phone,
    details
  ) VALUES (
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?
  )`;
  const { firstName, lastName, departmentId, urgencyId, email, phone, details } = data;
  return execute(query, [firstName, lastName, departmentId, urgencyId, email, phone, details]);
};

module.exports.getComplaints = async () => {
  const results = await execute("SELECT * FROM complaint");
  return results.map(model);
};
