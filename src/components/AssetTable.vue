<template>
  <div>
    <h1>Asset Tracker</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Asset Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in assets" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.department }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="downloadCSV">Download CSV</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assets: [
        { name: "Printer", department: "HR" },
        { name: "Monitor", department: "IT" },
        { name: "Barcode Scanner", department: "ACCOUNT" }
      ]
    };
  },
  methods: {
    downloadCSV() {
      const csvContent = "data:text/csv;charset=utf-8,"
        + ["Asset Name,Department", ...this.assets.map(a => `${a.name},${a.department}`)].join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "assets.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
table {
  margin: 20px auto;
  border-collapse: collapse;
  width: 60%;
}
th, td {
  padding: 10px;
  text-align: center;
}
button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
