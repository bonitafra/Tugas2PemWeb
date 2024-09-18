function createForm() {
    const Bonita = document.getElementById("Bonita");
  
    Bonita.style.backgroundColor = "rgba(237, 237, 212, 0.8)";
    Bonita.style.borderRadius = "8px";
    Bonita.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    Bonita.style.padding = "20px";
    Bonita.style.maxWidth = "600px";
    Bonita.style.margin = "20px auto";
  
    const form = document.createElement("div");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "15px";
  
    form.innerHTML = `
          <h3 style="text-align: center; color: #7f5539; text-shadow: 0 0 1px #ddd;">INDENTITAS MAHASISWA</h3>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="no" style="width: 25%; font-weight: bold; color: #7f5539;">No:</label>
              <input type="text" id="no" name="no" style="width: 70%; padding: 12px; border: 5px solid #b08968; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="nim" style="width: 25%; font-weight: bold; color: #7f5539;">NIM:</label>
              <input type="text" id="nim" name="nim" style="width: 70%; padding: 12px; border: 5px solid #b08968; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="nama" style="width: 25%; font-weight: bold; color: #7f5539;">Nama:</label>
              <input type="text" id="nama" name="nama" style="width: 70%; padding: 12px; border: 5px solid #b08968; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="prodi" style="width: 25%; font-weight: bold; color: #7f5539;">Prodi:</label>
              <input type="text" id="prodi" name="prodi" style="width: 70%; padding: 12px; border: 5px solid #b08968; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <div style="display: flex; align-items: center; justify-content: space-between;">
              <label for="kelas" style="width: 25%; font-weight: bold; color: #7f5539;">Kelas:</label>
              <input type="text" id="kelas" name="kelas" style="width: 70%; padding: 12px; border: 5px solid #b08968; border-radius: 10px; box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);">
          </div>
          
          <button id="submitBtn" style="width: 100%; padding: 12px; background-color: #b08968; color: #edeod4; border: none; border-radius: 10px; cursor: pointer; font-size: 16px; margin-top: 10px; transition: background-color 0.3s;">Submit</button>
          <hr style="width: 100%; border-color: #FFD8BE;">`;
  
    Bonita.appendChild(form);
  
    const table = document.createElement("table");
    table.setAttribute("border", "1");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.marginTop = "20px";
    table.style.borderRadius = "0 0 15px 15px";
  
    table.innerHTML = `
              <thead>
                  <tr style="background-color: #7f5539; color: #edeod4;">
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">No</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">NIM</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">Nama</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">Prodi</th>
                      <th style="padding: 12px; text-align: left; border: 3px solid #ddd;">Kelas</th>
                  </tr>
              </thead>
              <tbody id="tableBody"></tbody>
          `;
  
    Bonita.appendChild(table);
  
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("mouseover", () => {
      submitBtn.style.backgroundColor = "#9c6644";
    });
    submitBtn.addEventListener("mouseout", () => {
      submitBtn.style.backgroundColor = "#b08968";
    });
  
    submitBtn.addEventListener("click", addToTable);
  }
  
  function addToTable() {
    const no = document.getElementById("no").value;
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const prodi = document.getElementById("prodi").value;
    const kelas = document.getElementById("kelas").value;
  
    if (no && nim && nama && prodi && kelas) {
      const tableBody = document.getElementById("tableBody");
      const row = document.createElement("tr");
  
      row.style.backgroundColor =
        tableBody.children.length % 2 === 0
          ? "rgba(230, 204, 178, 0.8)"
          : "rgba(237, 237, 212, 0.8)";
      row.style.border = "1px solid #ddd";
      row.style.padding = "12px";
      row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "rgba(221, 184, 146, 0.8)"; // Light highlight color on hover
      });
      row.addEventListener("mouseout", () => {
        row.style.backgroundColor =
          tableBody.children.length % 2 === 0
            ? "rgba(230, 204, 178, 0.8)"
            : "rgba(237, 237, 212, 0.8)";
      });
  
      row.innerHTML = `
                  <td style="padding: 12px; border: 3px solid #ddd;">${no}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${nim}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${nama}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${prodi}</td>
                  <td style="padding: 12px; border: 3px solid #ddd;">${kelas}</td>
              `;
  
      tableBody.appendChild(row);
  
      document.getElementById("no").value = "";
      document.getElementById("nim").value = "";
      document.getElementById("nama").value = "";
      document.getElementById("prodi").value = "";
      document.getElementById("kelas").value = "";
    } else {
      alert("Harap Lengkapi Biodata");
    }
  }
  
  createForm();