module.exports = data => ({
  firstName: data.first_name,
  lastName: data.last_name,
  email: data.email,
  phone: data.phone,
  details: data.details,
  departmentId: data.department_id,
  urgencyId: data.urgency_id,
  status: data.status,
});
