var camelCase = require("lodash.camelcase");
const cliente = {
  Nombre: "Jorge Rodriguez",
  Edad: 35,
  DireccionOficina: "Oaxaca 96 Roma Norte",
  DireccionCasa: "Salamanca 15",
  HistorialDeLentesComprados: {
    Notorious: {
      Color: "negro",
      TipoDeMica: "bluelight",
      Graduacion: {
        OjoDerecho: 3,
        OjoIzquierdo: 2
      }
    },
    Air: {
      Color: "plata",
      TipoDeMica: "Sencilla",
      Graduacion: {
        OjoDerecho: 3,
        OjoIzquierdo: 2
      }
    }
  }
};

function lowerCamelCaseObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map(s => lowerCamelCaseObject(s));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (res, key) => ({
        ...res,
        [camelCase(key)]: lowerCamelCaseObject(obj[key])
      }),
      {}
    );
  }
  return obj;
}

lowerCamelCaseObject(cliente);
