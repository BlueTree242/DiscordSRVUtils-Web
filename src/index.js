const express = require("express");
fs = require("fs");
const compression = require("compression");
const fetch = require("node-fetch");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;

app.use(compression());
const staticSettings = { maxAge: "2h" };
app.use("/assets", express.static("fronted/dist/assets", staticSettings));
app.use("/img", express.static("fronted/dist/img", staticSettings));
app.get("/updatecheck", async (req, res) => {
  var response = JSON.parse("{}");
  response.error = "Invalid Request";
  res.status(400);
  return res.send(JSON.stringify(response));
});

app.post("/updatecheck", multer().none(), async (req, res) => {
  console.log("New good updatecheck received");
  var body = req.body;
  if (body.version == undefined) {
    var response = JSON.parse("{}");
    response.error = "Invalid Request";
    res.status(400);
    return res.send(JSON.stringify(response));
  }
  await fs.readFile("versions.json", "UTF8", async function (err, data) {
    if (err) {
      console.log("error");
      return console.log(err);
    }
    data = JSON.parse(data);
    var num = 0;
    var passed = false;
    var ver;
    data.forEach((v) => {
      if (!passed) {
        if (v.version === body.version.replace("-DEV", "")) {
          passed = true;
          ver = v;
        } else {
          if (!v.beta) {
            num++;
          }
        }
      }
    });
    response = ver === undefined ? {} : ver;
    response.type = response.type === undefined ? "INFO" : response.type;
    response.downloadUrl = "https://discordsrvutils.xyz/dl";
    if (body.version.includes("DEV")) {
      if (body.devUpdatechecker !== undefined) {
        if (body.devUpdatechecker === "false") {
          response.success = true;
          if (!passed) num = 0;
          response.versions_behind = num;
          response.shouldDisable = false;
          res.send(JSON.stringify(response));
          return;
        }
      }
      if (num >= 0 && passed) {
        response.message =
          "&cYou are using a DEV build, but it has been offically released. Download from https://discordsrvutils.xyz/dl";
        response.versions_behind = num;
        response.shouldDisable = false;
        res.send(JSON.stringify(response));
        return;
      }
      //handle jenkins dev build
      const buildNumber = body.buildNumber;
      const commit = body.commit;
      if (buildNumber == undefined) {
        //last builds should tell us about the build number
        num = 1;
        response.message =
          "You are very outdated. Please download new dev build from https://discordsrvutils.xyz/dldev";
        response.downloadUrl = "https://discordsrvutils.xyz/dldev";
      }
      if (buildNumber == "NONE") {
        //built locally, the user built the jar on his computer
        response.message =
          "&eDev Build but built locally. Set dev-updatechecker to false in config to bypass this, Or Download from https://discordsrvutils.xyz/dldev";
      } else {
        if (buildNumber != undefined) {
          var json = await fetch(
            "https://ci.bluetree242.ml/job/DiscordSRVUtils/api/json"
          );
          json = await json.json();
          const lastBuild = json.lastSuccessfulBuild.number;
          num = lastBuild - buildNumber;
        }
        response.downloadUrl = "https://discordsrvutils.xyz/dldev";

        if (num != 0)
          response.message =
            "&c&lYou are " + num + " Dev Builds Behind. Please Update.";
      }
    } else {
      if (num > 1)
        if (response.message === undefined)
          response.message =
            "&c&lYou are " +
            num +
            " Versions Behind. please Update. Download from https://discordsrvutils.xyz/dl";
    }
    response.success = true;

    response.versions_behind = num;
    response.shouldDisable = false;
    res.send(JSON.stringify(response));
  });
});
app.get("/support", async (req, res) => {
  res.redirect(302, "https://discord.gg/MMMQHA4");
});

app.get("/testserver", async (req, res) => {
  res.redirect(302, "https://discord.gg/VUU6wUHRZA");
});

app.get("/dl", async (_req, res) => {
  let rawLatest;
  let lastBetaNew = true;
  let lastBeta;
  await fs.readFile("versions.json", "UTF8", function (err, data) {
    data = JSON.parse(data);
    var num = 0;
    while (data[num].beta) {
      num++;
      length = data.length - 1;
      if (num >= data.length) {
        this.lastBeta = data[0].version;
        this.lastBetaNew = false;
        return (this.rawLatest = 0);
      }
    }
    latest = data[num];
    this.rawLatest = latest.version;
    this.lastBeta = data[0].version;
    if (!data[0].beta) {
      this.lastBetaNew = false;
    } else this.lastBetaNew = true;

    return res.redirect(
      302,
      `https://github.com/BlueTree242/DiscordSRVUtils/releases/tag/${this.rawLatest}`
    );
  });
});

app.get("/dldev", async function (req, res) {
  return res.redirect(302, "https://ci.bluetree242.ml/job/DiscordSRVUtils/");
});

app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "../fronted/dist/index.html"));
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
