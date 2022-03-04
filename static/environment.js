window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"f7300b7097358788fe5801870dadeaea84cc6db43c6ac39453d447f47c49887e","projects":[{"name":"api-interfaces","type":"lib","data":{"tags":[],"root":"libs/api-interfaces","files":[]}},{"name":"dashboard-e2e","type":"e2e","data":{"tags":[],"root":"apps/dashboard-e2e","files":[]}},{"name":"core-state","type":"lib","data":{"tags":[],"root":"libs/core-state","files":[]}},{"name":"core-data","type":"lib","data":{"tags":[],"root":"libs/core-data","files":[]}},{"name":"dashboard","type":"app","data":{"tags":[],"root":"apps/dashboard","files":[]}},{"name":"material","type":"lib","data":{"tags":[],"root":"libs/material","files":[]}},{"name":"api","type":"app","data":{"tags":[],"root":"apps/api","files":[]}}],"dependencies":{"api-interfaces":[],"dashboard-e2e":[{"source":"dashboard-e2e","target":"dashboard","type":"implicit"}],"core-state":[{"source":"core-state","target":"core-data","type":"static"},{"source":"core-state","target":"api-interfaces","type":"static"}],"core-data":[{"source":"core-data","target":"dashboard","type":"static"},{"source":"core-data","target":"api-interfaces","type":"static"}],"dashboard":[{"source":"dashboard","target":"api-interfaces","type":"static"},{"source":"dashboard","target":"core-data","type":"static"},{"source":"dashboard","target":"core-state","type":"static"},{"source":"dashboard","target":"material","type":"static"}],"material":[],"api":[{"source":"api","target":"api-interfaces","type":"static"}]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};