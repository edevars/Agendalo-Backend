const placesMock = [
  {
    name: 'Puerta de Brandenburgo',
    countryName: 'Alemania',
    cover:
      'https://www.guiadealemania.com/wp-content/uploads/2010/08/Puerta-de-Brandemburgo-Berlin.jpg',
    description:
      'La Puerta de Brandeburgo es una antigua puerta de entrada a Berlín y uno de los principales símbolos tanto de la ciudad como de Alemania. No se trata de un arco de triunfo, sino que era el acceso, a modo de propileos, al «Nuevo Berlín» de la época.',
    availableSits: 30,
    cost: 5940,
    date: '18-12-2019'
  },
  {
    name: 'Edificio del Reichstag',
    countryName: 'Alemania',
    cover:
      'https://album.es/fotos/uploads/imagenes/thumbs/edificio-del-reichstag-berlin__DSC9259_1200px.jpg',
    description:
      'El edificio del Reichstag se encuentra en el barrio del Tiergarten, en el distrito Mitte de Berlín, capital de Alemania. Fue la sede del Reichstag en tiempos del II Imperio alemán y más tarde del parlamento de la República de Weimar.',
    availableSits: 36,
    cost: 9206,
    date: '15-12-2019'
  },
  {
    name: 'Isla de los Museos',
    countryName: 'Alemania',
    cover:
      'https://elojopoblano.mx/wp-content/uploads/2018/07/berli%CC%81n-1520x1000.jpg',
    description:
      'La Isla de los Museos es el nombre de la mitad septentrional de la Spreeinsel, una isla en el río Spree, en el centro de Berlín, Alemania.',
    availableSits: 12,
    cost: 9206,
    date: '20-12-2019'
  },
  {
    name: 'East Side Gallery',
    countryName: 'Alemania',
    cover:
      'https://www.tagesspiegel.de/images/east-side-gallery_spiekermann-klaas/8961582/2-format43.jpg',
    description:
      'East Side Gallery es una galería de arte al aire libre situada sobre una sección de 1.316 metros en la cara este del muro de Berlín, que fueron salvados del derribo con dicha finalidad.',
    availableSits: 19,
    cost: 9256,
    date: '28-12-2019'
  },
  {
    name: 'Marienplatz',
    countryName: 'Alemania',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/6/62/Neues_Rathaus_und_Marienplatz_M%C3%BCnchen.jpg',
    description:
      'La Marienplatz es la plaza central de Múnich, Alemania, desde la fundación de la ciudad en 1158. La Marienplatz es hoy día el centro neurálgico de la vida de la ciudad, alrededor de la cual se extienden las principales calles comerciales con todo tipo de comercios y restaurantes.',
    availableSits: 18,
    cost: 4206,
    date: '29-12-2019'
  },
  {
    name: 'Palacio de Nymphenburg',
    countryName: 'Alemania',
    cover:
      'https://www.guiadealemania.com/wp-content/uploads/2013/02/Palacio-de-Nymphenburg-Munich-760x417.jpg',
    description:
      'El palacio de Nymphenburg es un palacio de estilo barroco ubicado en la ciudad de Múnich, estado federado de Baviera, Alemania. El palacio fue la residencia de verano de los gobernantes del Reino de Baviera.',
    availableSits: 20,
    cost: 2561,
    date: '20-01-2020'
  },
  {
    name: 'Jardin Inglés de Munich',
    countryName: 'Alemania',
    cover:
      'https://static.neweuropetours.eu/wp-content/uploads/2019/07/vistas-al-parque-olimpico-de-munich-1600x900.jpg',
    description:
      'El Englischer Garten es un parque ubicado en la ciudad de Múnich, Alemania. Situado en el nordeste de la capital bávara, en la orilla occidental del río Isar, sus 4,17 km² de zona verde lo convierten en uno de los parques urbanos más grandes del mundo, más extenso incluso que Central Park o Hyde Park.',
    availableSits: 9,
    cost: 7260,
    date: '08-12-2019'
  },
  {
    name: 'Residenz',
    countryName: 'Alemania',
    cover:
      'https://www.timetravelturtle.com/wp-content/uploads/2018/01/Bavaria-2016-21_new.jpg',
    description:
      'Residenz La Residencia de Múnich es el anterior palacio real de los reyes de Baviera en el centro urbano de Múnich. La Residencia es el palacio urbano más grande de Alemania, y sirve hoy en día como uno de los mejores museos decorativos en Europa.',
    availableSits: 60,
    cost: 1529,
    date: '23-12-2019'
  },
  {
    name: 'Römer ',
    countryName: 'Alemania',
    cover:
      'https://cdn.britannica.com/01/701-050-5323A0DD/Romer-town-hall-Germany-Frankfurt-am-Main.jpg',
    description:
      'El Römer es un edificio medieval situado en Fráncfort del Meno. Es uno de los monumentos más importantes de la ciudad.',
    availableSits: 52,
    cost: 6054,
    date: '27-12-2019'
  },
  {
    name: 'Goethe House',
    countryName: 'Alemania',
    cover:
      'https://a.cdn-hotels.com/gdcs/production196/d1340/34dcd700-68ce-11e8-9862-0242ac11003c.jpg',
    description:
      'La Casa Goethe es un museo de la casa del escritor en el distrito Innenstadt de Frankfurt am Main, Alemania. El edificio original fue la residencia familiar de la familia Goethe, especialmente Johann Wolfgang von Goethe, hasta 1795.',
    availableSits: 3,
    cost: 8050,
    date: '14-12-2019'
  },
  {
    name: 'Jardin de palmeras de francfort',
    countryName: 'Alemania',
    cover:
      'https://www.guiadealemania.com/wp-content/uploads/2013/03/Palmengarten-Frankfurt-760x500.jpg',
    description:
      'El Jardín de Palmeras de Fráncfort del Meno es uno de los dos jardines botánicos de Fráncfort del Meno, Alemania. Se encuentra en el distrito de Westend, adyacente al Grüneburgpark. El parque en sí mismo es una sociedad anónima que establecieron los ciudadanos de Fráncfort en 1868.',
    availableSits: 2,
    cost: 9206,
    date: '20-12-2019'
  },
  {
    name: 'Main tower',
    countryName: 'Alemania',
    cover:
      'https://s3.amazonaws.com/hines-images/main-tower/main-tower--base-up_hres_web.jpg',
    description:
      'El Maintower en Fráncfort del Meno, Alemania. El edificio es de 200 metros de altura, pero con la torre de transmisión mide 240 metros. Tiene 56 pisos y 5 pisos subterráneos. Tiene también dos observatorios públicos, siendo el único rascacielos en Fráncfort en tener observatorio público.',
    availableSits: 18,
    cost: 6047,
    date: '14-03-2020'
  },
  {
    name: 'Catedral de Colonia',
    countryName: 'Alemania',
    cover:
      'http://3.bp.blogspot.com/-y_zegOJ_nyQ/Vh_Pdh9FF2I/AAAAAAAAJ2s/gD0fROPyWO8/s1600/COLONIA%2BPORTADA.jpg',
    description:
      'La catedral de Colonia es un templo católico de estilo gótico, comenzó a construirse en 1248 y no se terminó hasta 1880. Está situada en el centro de la ciudad de Colonia. Con sus 157 metros de altura fue el edificio más alto del mundo hasta la culminación del Monumento a Washington en 1884, de 170 metros.',
    availableSits: 20,
    cost: 6045,
    date: '18-05-2020'
  },
  {
    name: 'Museo del Chocolate',
    countryName: 'Alemania',
    cover:
      'https://bienvenidosacolonia.files.wordpress.com/2014/01/museo-del-chocolate.jpg',
    description:
      'El Museo del Chocolate Imhoff es un museo del chocolate creado el 31 de octubre de 1993 y nombrado a partir del entonces director general Hans Imhoff Stollwerck. Está situado en el distrito de Colonia, Altstadt-Süd en la península Rheinau.',
    availableSits: 32,
    cost: 7845,
    date: '14-02-2020'
  },
  {
    name: 'Phantasialand',
    countryName: 'Alemania',
    cover:
      'https://thumbnail.pa-community.com/3c/cc/39b398186d4f7be8b5e5512fc1ce/73cf20d89ba6beae4e10b8eeb052ee6e.jpg',
    description:
      'Phantasialand es un parque temático localizado en Brühl, en el estado federado alemán de Renania del Norte-Westfalia, que recibe aproximadamente dos millones de visitantes anualmente. El parque abrió sus puertas en el año 1967, de la mano de Gottlieb Löffelhardt y Richard Schmidt.',
    availableSits: 10,
    cost: 4020,
    date: '13-06-2020'
  },
  {
    name: 'Museo Ludwig',
    countryName: 'Alemania',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/3/3d/Museum_Ludwig_002.jpg',
    description:
      'El Museo Ludwig es un museo de arte de Alemania, uno de los museos más importantes de la ciudad de Colonia. Contiene una gran variedad de obras del siglo XX y XXI, desde el arte abstracto, el expresionismo alemán y el surrealismo hasta el Pop Art.',
    availableSits: 2,
    cost: 9650,
    date: '20-09-2020'
  },
  {
    name: 'Cristo Redentor',
    countryName: 'Brasil',
    cover:
      'https://sobrehistoria.com/wp-content/uploads/2016/05/cristo-corcovado-600x399.jpg',
    description:
      'El Cristo Redentor o Cristo del Corcovado es una enorme estatua de Jesús de Nazaret con los brazos abiertos mostrando a la ciudad de Río de Janeiro, Brasil.',
    availableSits: 5,
    cost: 6050,
    date: '28-03-2020'
  },
  {
    name: 'Escalera de Selaron',
    countryName: 'Brasil',
    cover:
      'https://freewalkertours.com/wp-content/uploads/escalera-selar%C3%B3n-lapa.jpeg',
    description:
      'La Escalera de Selarón o Escadaria de Santa Tereza es una escalera ubicada en el barrio Santa Teresa, junto al convento homónimo, en la ciudad brasileña de Río de Janeiro.',
    availableSits: 10,
    cost: 3020,
    date: '20-10-2020'
  },
  {
    name: 'Copacabana',
    countryName: 'Brasil',
    cover:
      'https://s.aolcdn.com/dims-shared/dims3/GLOB/crop/2121x1410+0+1/resize/640x426!/format/jpg/quality/85/https://s.aolcdn.com/hss/storage/midas/53ae97f0734dec9170ee4a6e364b4d4d/204020389/453076401.jpg',
    description:
      'Famoso por su playa en forma de media luna, Copacabana es uno de los barrios más animados de Río y atrae a una gran variedad de lugareños y visitantes a las actividades que se realizan las 24 horas en sus playas y en el paseo marítimo de mosaicos.',
    availableSits: 3,
    cost: 2050,
    date: '05-12-2019'
  },
  {
    name: 'Santa Teresa',
    countryName: 'Brasil',
    cover:
      'https://www.eluniversal.com.mx/sites/default/files/styles/f01-1023x630/public/2015/10/30/1_0.jpg?itok=IxmvCfLq',
    description:
      'Santa Teresa es un distrito de la cima de una colina con un ambiente encantador pueblerino. Las calles empinadas y serpenteantes están bordeadas por elegantes mansiones antiguas, y muchas de ellas albergan elegantes hoteles boutique, extravagantes bares de cócteles o restaurantes románticos con vistas a la bahía.',
    availableSits: 4,
    cost: 3050,
    date: '06-06-2020'
  },
  {
    name: 'Parque do Ibirapuera',
    countryName: 'Brasil',
    cover:
      'https://abrilexame.files.wordpress.com/2018/04/thinkstockphotos-510317002-e1524666883642.jpg',
    description:
      'El Parque do Ibirapuera es el más importante y conocido parque de la ciudad de São Paulo, Brasil y es considerado el pulmón verde de la ciudad. Es usado frecuentemente para eventos gubernamentales y privados como así también para actividades artísticas que pueden incluir conciertos.',
    availableSits: 15,
    cost: 6450,
    date: '15-08-2020'
  },
  {
    name: 'Avenida Paulista',
    countryName: 'Brasil',
    cover:
      'https://i0.wp.com/hostelalice.com/wp-content/uploads/2017/12/S%C3%A3o-Paulo-Avenida-Paulista.jpg',
    description:
      'La Avenida Paulista es uno de los lugares más importantes de la ciudad de São Paulo, capital del estado del mismo nombre en Brasil. Se encuentra en el límite entre la zona centro-sur, central y occidental; y una de las zonas más altas de la ciudad, llamado Cima Paulista.',
    availableSits: 10,
    cost: 5040,
    date: '02-06-2020'
  },
  {
    name: 'Museu de Arte de Sao Paulo',
    countryName: 'Brasil',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Museu_de_Arte_de_S%C3%A3o_Paulo_Assis_Chateaubriand_-_MASP.jpg',
    description:
      'El Museo de Arte de São Paulo, MASP se encuentra localizado en la Avenida Paulista, en la ciudad de São Paulo, en Brasil. Es uno de los más importantes espacios culturales del país, popularmente conocido por la arquitectura de sus instalaciones.',
    availableSits: 10,
    cost: 300,
    date: '28-03-2020'
  },
  {
    name: 'Pinacoteca do Estado',
    countryName: 'Brasil',
    cover:
      'http://latempestad.mx/wp-content/uploads/2017/02/Pinacoteca-do-Estado-de-Sao-Paulo.jpg',
    description:
      'La Pinacoteca del Estado de São Paulo es una institución cultural brasileña dependiente de la Secretaría de Cultura del Estado de São Paulo. Su sede principal se encuentra en el Jardim da Luz, en la Ciudad de São Paulo.',
    availableSits: 15,
    cost: 605,
    date: '15-11-2020'
  },
  {
    name: 'Las Cataratas del Iguazú',
    countryName: 'Brasil',
    cover:
      'https://www.hotelsaintgeorge.com/files/uploads/images/Fotolia_122356845_Subscription_Monthly_M.jpg',
    description:
      'Las Cataratas del Iguazú, llamadas popularmente en Argentina como «Cataratas»; son un conjunto de cataratas que se localizan sobre el río Iguazú, en el límite entre la provincia de Misiones y el estado brasileño de Paraná',
    availableSits: 15,
    cost: 6050,
    date: '14-01-2020'
  },
  {
    name: 'Presa de Itaipú',
    countryName: 'Brasil',
    cover:
      'http://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/itaipu_foto_caio_coronel_2_0.jpg',
    description:
      'La represa hidroeléctrica de Itaipú es una represa nacional de Paraguay, en su frontera sobre el río Paraná. Posee un desnivel de 120 m de caída bruta. Itaipu nacional ostenta el título de "mayor productora de energía del planeta" con 103.098.366 MWh producidos en el 2016.',
    availableSits: 18,
    cost: 600,
    date: '12-07-2020'
  },
  {
    name: 'Parque das Aves',
    countryName: 'Brasil',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Arara_vermelha_-_Parque_das_aves_-_Foz_do_Iguacu_-_Brasil_%2824195243491%29.jpg',
    description:
      'El Parque das Aves es un zoológico privado situado en Foz do Iguaçu, Estado de Paraná, Brasil, y está cerca de las Cataratas del Iguazú. Sus exhibiciones comprenden principalmente aves, así como otros animales y mariposas. El parque fue inaugurado en 1994 y está ubicado dentro de 16 hectáreas de bosque.',
    availableSits: 5,
    cost: 600,
    date: '28-12-2019'
  },
  {
    name: 'Dreamland Wax Museum',
    countryName: 'Brasil',
    cover:
      'https://www.visitefoz.com.br/wp-content/uploads/2014/08/museu-de-cera-foz-3.jpg',
    description:
      'Gran museo de cera con muchos personajes, dinosaurios animatrónicos, muestras de autos y motocicletas.',
    availableSits: 10,
    cost: 550,
    date: '14-12-2019'
  },
  {
    name: 'Taperapuan',
    countryName: 'Brasil',
    cover:
      'https://www.casastemporada.com/image/d235/-5af1b867e2856e00103debfa?ver=ac19&width=1200&height=800',
    description:
      'Taperapuan, la mejor playa de luau en Brasil, muchas personas hermosas, interesantes y enérgicas disfrutan de la noche más animada del mejor Luau en Brasil. Una noche increíble en la playa, ambiente típicamente hawaiano, diversidad musical, banda en vivo, DJ exclusivo, Dance Company.',
    availableSits: 12,
    cost: 1548,
    date: '21-09-2020'
  },
  {
    name: 'Passarela do Descobrimiento',
    countryName: 'Brasil',
    cover:
      'https://photo980x880.mnstatic.com/c3/f6/c3f6f9cec6cab116ca23b0eae4c35010.jpg',
    description:
      'Passarela do Descobrimiento, es el mejor lugar para pasar la noche de Porto Seguro, tanto si queres solo pasear recorriendo los cientos de puestos de artesanías y otros negocios donde podes comprar barato, o si queres también ir a tomar algo o cenar en los bares/restaurantes que hay sobre la pasarela.',
    availableSits: 5,
    cost: 3000,
    date: '13-11-2020'
  },
  {
    name: 'Parracho',
    countryName: 'Brasil',
    cover:
      'https://photo620x400.mnstatic.com/2be0cdf4a07682d6e2a60a8af248c565/playa-do-parracho.jpg',
    description:
      'El Parracho, en verano es muy divertida con muchos servicios, buena playa buena atencion, ahora cuando fui no habia movimineto, pero la playa es muy buena muy cerca del centro y de mucuge.',
    availableSits: 5,
    cost: 2015,
    date: '01-01-2020'
  },
  {
    name: 'Epic Discovery Memorial',
    countryName: 'Brasil',
    cover:
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/67/b3/93.jpg',
    description:
      'Epic Discovery Memorial, réplica de tamaño real de un barco portugués, jardines botánicos y exposiciones sobre la historia de Brasil.',
    availableSits: 21,
    cost: 300,
    date: '12-05-2020'
  }
];

function filteredPlacesMock(country) {
  return placesMock.filter(place => place.countryName.includes(country));
}

class PlacesServicesMocks {
  async getPlaces() {
    return Promise.resolve(placesMock);
  }

  async createPlace() {
    return Promise.resolve(placesMock[0]);
  }
}

module.exports = {
  placesMock,
  filteredPlacesMock,
  PlacesServicesMocks
};
