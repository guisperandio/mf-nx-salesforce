// /* eslint-disable no-undef */
// /* eslint-disable @typescript-eslint/no-var-requires */
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// module.exports = {
//   output: {
//     uniqueName: 'shell',
//   },
//   optimization: {
//     // Only needed to bypass a temporary bug
//     runtimeChunk: false,
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//       // For remotes (please adjust)
//       // name: "shell",
//       // filename: "remoteEntry.js",
//       // exposes: {
//       //     './Component': './apps/shell/src/app/app.component.ts',
//       // },

//       // For hosts (please adjust)
//       // remotes: {
//       //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

//       // },

//       shared: {
//         '@angular/core': { singleton: true, strictVersion: true },
//         '@angular/common': { singleton: true, strictVersion: true },
//         '@angular/router': { singleton: true, strictVersion: true },
//       },
//     }),
//   ],
// };
