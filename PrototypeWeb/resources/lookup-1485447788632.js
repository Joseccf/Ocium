(function(window, undefined) {
  var dictionary = {
    "6c1e162e-f837-4044-8dd7-f5c46b2cb181": "CrearEvento",
    "24bb26c5-6f30-4cbf-bf83-06ed62aab907": "AñadirAnunciante",
    "67811bbf-0c00-4016-a7ee-192c46a6470a": "EditarEvento",
    "f61331bb-1e96-4365-a200-66a50ac3b402": "ListarUsuarios",
    "7ba5bf45-38c1-4102-90e8-2c1c55335db3": "Inicio",
    "6e18861d-799d-43de-887e-225d58a2804d": "ListarAnunciantes",
    "cb141fd9-dc15-4ce3-8d98-4aa35e6dc402": "EditarLocal",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "RegistroLocal",
    "5691a2f9-e0db-47c9-b264-bafacc05abed": "CrearUsuario",
    "2c2d4ea8-db4b-40c2-af4f-e0ee962a79d2": "EditarUsuario",
    "0c5027a6-59ae-43d8-8071-a100e415337d": "Dashboard",
    "933eb8ff-aca7-4582-a4d6-ba609ea2e6d9": "ListarLocales",
    "205a6cac-e9ff-491d-a6c3-f250e75a0037": "ListarEventos",
    "bbd704f2-f6a1-429f-ab04-0403d10b5972": "EditarAnunciante",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);