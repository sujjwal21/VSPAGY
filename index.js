let data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

const tableBody = document.querySelector("#dataTable tbody");
const dataForm = document.getElementById("dataForm");
const searchInput = document.getElementById("search");
const submitBtn = document.getElementById("submitBtn");

let editIndex = null; 


function renderTable(filter = "") {
  tableBody.innerHTML = "";
  data
    .filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.email.toLowerCase().includes(filter.toLowerCase())
    )
    .forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>
          <button onclick="editRow(${index})">Edit</button>
          <button onclick="deleteRow(${index})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
}


dataForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = parseInt(document.getElementById("id").value);
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!validateEmail(email)) {
    alert("Invalid email format!");
    return;
  }

  if (editIndex === null) {
    if (data.some((item) => item.id === id)) {
      alert("Duplicate ID not allowed!");
      return;
    }
    data.push({ id, name, email });
  } else {
    data[editIndex] = { id, name, email };
    editIndex = null;
    submitBtn.textContent = "Add Row";
  }

  dataForm.reset();
  renderTable(searchInput.value);
});

function editRow(index) {
  const item = data[index];
  document.getElementById("id").value = item.id;
  document.getElementById("name").value = item.name;
  document.getElementById("email").value = item.email;

  editIndex = index;
  submitBtn.textContent = "Update Row";
}

function deleteRow(index) {
  data.splice(index, 1);
  renderTable(searchInput.value);
}

searchInput.addEventListener("input", () => {
  renderTable(searchInput.value);
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

renderTable();
