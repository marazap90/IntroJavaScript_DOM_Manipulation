// from data.js
var tableData = data;

// select table element
const tbody = d3.select('tbody').node();


// Function to populate the prepared table with data.js data
function Populate(source) {
    tbody.innerHTML = '';
    for (i = 0; i < source.length; i++) {
        
        // get objects and keys
        const data = source[i];
        const fields = Object.keys(data);
        
        // inserts rows to tbody object
        const row = tbody.insertRow(i);
        for (j = 0; j < fields.length; j++) {
            
            // insert cells to rows
            const field = fields[j];
            const cell = row.insertCell(j);
            cell.innerText = data[field];
        }
    }
};




// Select the submit button
const filter_button = d3.select("#filter-btn");
filter_button.on("click", handleSearchButtonClick)

// const $searchBtn = document.querySelector("#filter-btn");
// $searchBtn.addEventListener("click", handleSearchButtonClick);


// function to filterdata
function handleSearchButtonClick() {
  
  // get values of user input
  const 
    Input = d3.select("#searchbox").property("value");

  var filteredData = tableData
  
  if (Input){
    filteredData = filteredData.filter(function(row){
      let date = row.datetime.toLowerCase();
      return date === Input
    })
  }


  // log filtered data for reference 
    Populate(filteredData)
};

// render table
Populate(tableData);