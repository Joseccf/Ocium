(function(window, undefined) {
  var dictionary = {
    "8e916dd0-12d9-4bdb-933e-96b98221cd07": "Notificacion evento gondola",
    "7524f169-74f6-4181-b85a-1870be3d4290": "BuscarAmigos",
    "a2dbc7d2-748b-470e-88fc-594a22644906": "InicioNoSesion",
    "7af30fbc-d57a-4708-b9cd-d7d703d0bb62": "Notificaciones",
    "073e0d70-c71d-49cf-bc43-6f072d5cc824": "ConfPerfil",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "MostrarLocal",
    "a751b86c-9761-48d3-8447-2bc4e4fc097f": "ListarFavoritos",
    "98e44735-fe86-4384-8e69-99a6259822bf": "ListarAmigos",
    "ac874657-5db3-48a4-8919-517b0d2b6358": "ListarEventosNoSesion",
    "e4a3e282-e9fa-4499-9e1c-16604f06974d": "OpinionesEvento",
    "5d4ba641-79c5-454b-b880-5c6c5cf52bf8": "IniciarSesion",
    "8df067f6-1b5d-4706-a5cb-7348d5716357": "MostrarAmigo",
    "00416c7b-22b7-4d88-8ccd-0afe730fe0c2": "ListarLocalNoSesion",
    "63ec927f-3836-4131-a957-2f0321e45c43": "Favoritos",
    "b599b667-8745-430f-b666-ab0039e47188": "ListarEventos",
    "b37e0e1a-b07c-45b1-a4a4-64e4c3db87f1": "Inicio",
    "324d9c61-fee4-4543-8e43-8e7911a5d26a": "Registro",
    "185be558-5988-49a4-a9ce-dde242c86a86": "Notificaciones bloqueo",
    "2d5566ac-008b-45e8-b781-ec6d43b77daa": "BuscarEventos",
    "940f1f47-9a99-4a5d-8376-b21593f168d5": "OpinionesLocal",
    "ce4a531d-90db-4579-9d5f-4f035a441489": "ListarLocal",
    "0e93470e-7c40-49a2-9533-bcf8ee2235c8": "Notificacion Local plated",
    "2641c17e-70fb-44a8-ad2d-268362b8dc8d": "EscribirMensaje",
    "d0015cac-f8ed-4932-b8b4-95d8348158a7": "ListarUsuarios",
    "1a068508-0402-4b55-9bd8-b92662f73efb": "BuscarUsuarios",
    "86189168-8997-4110-aff7-8b2fd59d18ac": "BuscarLocales",
    "d679283a-b864-4d24-b80b-1cbcdefc5326": "MostrarEvento",
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