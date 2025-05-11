//excute command
const { exec } = require("child_process");

// run the command to start the gitea container only without full compose
exec(
  "docker run --detach \
  --publish 3000:3000 --publish 222:22 \
  --name gitea \
  --restart always \
  --volume gitea_config:/etc/gitea \
    --volume gitea_logs:/var/log/gitea \
    --volume gitea_data:/var/opt/gitea \
    gitea/gitea:latest", // change the first port from 3000 to the required port on localhost
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

// // run the docker-compose file
// exec("docker-compose up -d", (error, stdout, stderr) => {
//   if (error) {
//     console.log(`error: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.log(`stderr: ${stderr}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
// });
