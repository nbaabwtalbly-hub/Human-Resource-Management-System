// Show system section and hide welcome section
function enterSystem() {
  document.getElementById('welcomeSection').style.display = 'none';
  document.getElementById('systemSection').style.display = 'block';
}

// Employee Management
let employees = [];
const employeeForm = document.getElementById('employeeForm');
const employeeTable = document.getElementById('employeeTable');

employeeForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (name && email) {
    employees.push({ name, email });
    renderEmployees();
    employeeForm.reset();
  }
});

function renderEmployees() {
  employeeTable.innerHTML = '';
  employees.forEach((emp, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.email}</td>
      <td><button class="delete" onclick="deleteEmployee(${idx})">حذف</button></td>
    `;
    employeeTable.appendChild(tr);
  });
}

window.deleteEmployee = function(idx) {
  employees.splice(idx, 1);
  renderEmployees();
};

// Attendance Management
let attendance = [];
const attendanceForm = document.getElementById('attendanceForm');
const attendanceTable = document.getElementById('attendanceTable');

attendanceForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('employeeName').value.trim();
  const date = document.getElementById('date').value;
  const status = document.getElementById('status').value;
  if (name && date && status) {
    attendance.push({ name, date, status });
    renderAttendance();
    attendanceForm.reset();
  }
});

function renderAttendance() {
  attendanceTable.innerHTML = '';
  attendance.forEach((att, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${att.name}</td>
      <td>${att.date}</td>
      <td>${att.status}</td>
      <td><button class="delete" onclick="deleteAttendance(${idx})">حذف</button></td>
    `;
    attendanceTable.appendChild(tr);
  });
}

window.deleteAttendance = function(idx) {
  attendance.splice(idx, 1);
  renderAttendance();
};

// Leave Management
let leaves = [];
const leaveForm = document.getElementById('leaveForm');
const leaveTable = document.getElementById('leaveTable');

leaveForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('employeeNameLeave').value.trim();
  const date = document.getElementById('leaveDate').value;
  const type = document.getElementById('leaveType').value;
  if (name && date && type) {
    leaves.push({ name, date, type });
    renderLeaves();
    leaveForm.reset();
  }
});

function renderLeaves() {
  leaveTable.innerHTML = '';
  leaves.forEach((leave, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${leave.name}</td>
      <td>${leave.date}</td>
      <td>${leave.type}</td>
      <td><button class="delete" onclick="deleteLeave(${idx})">حذف</button></td>
    `;
    leaveTable.appendChild(tr);
  });
}

window.deleteLeave = function(idx) {
  leaves.splice(idx, 1);
  renderLeaves();
};

// Performance Management
let performance = [];
const performanceForm = document.getElementById('performanceForm');
const performanceTable = document.getElementById('performanceTable');

performanceForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('employeeNamePerformance').value.trim();
  const rating = document.getElementById('performanceRating').value;
  if (name && rating) {
    performance.push({ name, rating });
    renderPerformance();
    performanceForm.reset();
  }
});

function renderPerformance() {
  performanceTable.innerHTML = '';
  performance.forEach((perf, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${perf.name}</td>
      <td>${perf.rating}</td>
      <td><button class="delete" onclick="deletePerformance(${idx})">حذف</button></td>
    `;
    performanceTable.appendChild(tr);
  });
}

window.deletePerformance = function(idx) {
  performance.splice(idx, 1);
  renderPerformance();
};
