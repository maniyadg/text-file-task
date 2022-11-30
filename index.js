var express = require("express"),
  fs = require("fs");
var app = express();





app.post("/receive", (req, res) => {

  const date = new Date().toDateString();
  const time = new Date().toTimeString();

  fs.writeFile(
    "./public/date-time.txt",
    `current Date - ${date} \n current Time - ${time}`,
    (err) => {
      if (err) console.log(err);
    }
  );
  res.send(`Text file created sucessfully`)
});

app.get("/getfile", (req, res) => {

  let folder ="./public"
  filenames = fs.readdirSync(folder);
  
  console.log("\nCurrent directory filenames:");
  filenames.forEach(file => {
    console.log(file);
  });
    res.send('find sucessfully')
});

app.listen(3003);
