const placesMock = [
  {
    id: '5de44ac7fc13ae2f48000000',
    name: 'Varakļāni',
    countryName: 'Latvia',
    cover: 'http://dummyimage.com/153x185.png/cc0000/ffffff',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    availableSits: 36,
    cost: 4186
  },
  {
    id: '5de44ac7fc13ae2f48000001',
    name: 'Hengjian',
    countryName: 'China',
    cover: 'http://dummyimage.com/210x124.png/cc0000/ffffff',
    description:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    availableSits: 30,
    cost: 8008
  },
  {
    id: '5de44ac7fc13ae2f48000002',
    name: 'As Sūsah',
    countryName: 'Syria',
    cover: 'http://dummyimage.com/174x186.png/cc0000/ffffff',
    description:
      'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    availableSits: 54,
    cost: 6147
  },
  {
    id: '5de44ac7fc13ae2f48000003',
    name: 'Guyancourt',
    countryName: 'France',
    cover: 'http://dummyimage.com/175x161.png/cc0000/ffffff',
    description: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    availableSits: 41,
    cost: 9971
  },
  {
    id: '5de44ac7fc13ae2f48000004',
    name: 'Tegalgunung',
    countryName: 'Indonesia',
    cover: 'http://dummyimage.com/171x183.jpg/5fa2dd/ffffff',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
    availableSits: 50,
    cost: 9792
  },
  {
    id: '5de44ac7fc13ae2f48000005',
    name: 'Madrid',
    countryName: 'Spain',
    cover: 'http://dummyimage.com/214x154.jpg/5fa2dd/ffffff',
    description:
      'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    availableSits: 46,
    cost: 9118
  },
  {
    id: '5de44ac7fc13ae2f48000006',
    name: 'Yug',
    countryName: 'Russia',
    cover: 'http://dummyimage.com/177x116.png/dddddd/000000',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    availableSits: 43,
    cost: 6368
  },
  {
    id: '5de44ac7fc13ae2f48000007',
    name: 'Lanipao',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/185x220.bmp/ff4444/ffffff',
    description:
      'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    availableSits: 40,
    cost: 3449
  },
  {
    id: '5de44ac7fc13ae2f48000008',
    name: 'Jinhe',
    countryName: 'China',
    cover: 'http://dummyimage.com/114x214.jpg/cc0000/ffffff',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    availableSits: 39,
    cost: 4746
  },
  {
    id: '5de44ac7fc13ae2f48000009',
    name: 'Melaka',
    countryName: 'Malaysia',
    cover: 'http://dummyimage.com/169x184.jpg/cc0000/ffffff',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    availableSits: 43,
    cost: 5797
  },
  {
    id: '5de44ac7fc13ae2f4800000a',
    name: 'Dijon',
    countryName: 'France',
    cover: 'http://dummyimage.com/175x123.jpg/5fa2dd/ffffff',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    availableSits: 38,
    cost: 7581
  },
  {
    id: '5de44ac7fc13ae2f4800000b',
    name: 'Juḩr ad Dīk',
    countryName: 'Palestinian Territory',
    cover: 'http://dummyimage.com/198x159.bmp/cc0000/ffffff',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    availableSits: 39,
    cost: 6815
  },
  {
    id: '5de44ac7fc13ae2f4800000c',
    name: 'Bulgan',
    countryName: 'Mongolia',
    cover: 'http://dummyimage.com/231x179.png/5fa2dd/ffffff',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    availableSits: 53,
    cost: 3719
  },
  {
    id: '5de44ac7fc13ae2f4800000d',
    name: 'Insiza',
    countryName: 'Zimbabwe',
    cover: 'http://dummyimage.com/172x133.png/cc0000/ffffff',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    availableSits: 41,
    cost: 7414
  },
  {
    id: '5de44ac7fc13ae2f4800000e',
    name: 'Cândido Mota',
    countryName: 'Brazil',
    cover: 'http://dummyimage.com/180x125.bmp/dddddd/000000',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    availableSits: 45,
    cost: 3437
  },
  {
    id: '5de44ac7fc13ae2f4800000f',
    name: 'Colón',
    countryName: 'Argentina',
    cover: 'http://dummyimage.com/184x233.jpg/5fa2dd/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    availableSits: 37,
    cost: 8302
  },
  {
    id: '5de44ac7fc13ae2f48000010',
    name: 'Patayac',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/102x174.bmp/dddddd/000000',
    description: 'Nullam porttitor lacus at turpis.',
    availableSits: 30,
    cost: 8157
  },
  {
    id: '5de44ac7fc13ae2f48000011',
    name: 'Klang',
    countryName: 'Malaysia',
    cover: 'http://dummyimage.com/213x138.bmp/dddddd/000000',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    availableSits: 48,
    cost: 8970
  },
  {
    id: '5de44ac7fc13ae2f48000012',
    name: 'Beloeil',
    countryName: 'Canada',
    cover: 'http://dummyimage.com/126x194.png/dddddd/000000',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.',
    availableSits: 49,
    cost: 7272
  },
  {
    id: '5de44ac7fc13ae2f48000013',
    name: 'Divisoria',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/207x236.jpg/5fa2dd/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    availableSits: 39,
    cost: 7764
  },
  {
    id: '5de44ac7fc13ae2f48000014',
    name: 'Stylída',
    countryName: 'Greece',
    cover: 'http://dummyimage.com/229x130.jpg/cc0000/ffffff',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
    availableSits: 53,
    cost: 2136
  },
  {
    id: '5de44ac7fc13ae2f48000015',
    name: 'Palmas',
    countryName: 'Brazil',
    cover: 'http://dummyimage.com/156x212.bmp/ff4444/ffffff',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    availableSits: 38,
    cost: 2278
  },
  {
    id: '5de44ac7fc13ae2f48000016',
    name: 'Songjiang',
    countryName: 'China',
    cover: 'http://dummyimage.com/195x119.bmp/ff4444/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    availableSits: 54,
    cost: 9583
  },
  {
    id: '5de44ac7fc13ae2f48000017',
    name: 'Daxing',
    countryName: 'China',
    cover: 'http://dummyimage.com/138x108.png/cc0000/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    availableSits: 46,
    cost: 8148
  },
  {
    id: '5de44ac7fc13ae2f48000018',
    name: 'Chonghe',
    countryName: 'China',
    cover: 'http://dummyimage.com/120x235.png/5fa2dd/ffffff',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    availableSits: 60,
    cost: 4300
  },
  {
    id: '5de44ac7fc13ae2f48000019',
    name: 'Doña Remedios Trinidad',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/167x249.bmp/dddddd/000000',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    availableSits: 36,
    cost: 9433
  },
  {
    id: '5de44ac7fc13ae2f4800001a',
    name: 'Damiku',
    countryName: 'China',
    cover: 'http://dummyimage.com/133x148.bmp/dddddd/000000',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    availableSits: 39,
    cost: 9760
  },
  {
    id: '5de44ac7fc13ae2f4800001b',
    name: 'Bayombong',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/143x247.bmp/dddddd/000000',
    description:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
    availableSits: 52,
    cost: 8100
  },
  {
    id: '5de44ac7fc13ae2f4800001c',
    name: 'Jalalaqsi',
    countryName: 'Somalia',
    cover: 'http://dummyimage.com/115x155.bmp/cc0000/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    availableSits: 41,
    cost: 5407
  },
  {
    id: '5de44ac7fc13ae2f4800001d',
    name: 'Nekla',
    countryName: 'Poland',
    cover: 'http://dummyimage.com/170x172.bmp/ff4444/ffffff',
    description:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    availableSits: 51,
    cost: 5826
  },
  {
    id: '5de44ac7fc13ae2f4800001e',
    name: 'Dimayon',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/144x214.jpg/5fa2dd/ffffff',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    availableSits: 55,
    cost: 7506
  },
  {
    id: '5de44ac7fc13ae2f4800001f',
    name: 'Boulaide',
    countryName: 'Luxembourg',
    cover: 'http://dummyimage.com/120x172.bmp/dddddd/000000',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    availableSits: 40,
    cost: 9592
  },
  {
    id: '5de44ac7fc13ae2f48000020',
    name: 'Bayang',
    countryName: 'China',
    cover: 'http://dummyimage.com/161x148.jpg/5fa2dd/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    availableSits: 52,
    cost: 8761
  },
  {
    id: '5de44ac7fc13ae2f48000021',
    name: 'Pārūn',
    countryName: 'Afghanistan',
    cover: 'http://dummyimage.com/225x235.jpg/5fa2dd/ffffff',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    availableSits: 31,
    cost: 6394
  },
  {
    id: '5de44ac7fc13ae2f48000022',
    name: 'Qiantang',
    countryName: 'China',
    cover: 'http://dummyimage.com/217x241.bmp/dddddd/000000',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    availableSits: 48,
    cost: 5536
  },
  {
    id: '5de44ac7fc13ae2f48000023',
    name: 'Porto Velho',
    countryName: 'Brazil',
    cover: 'http://dummyimage.com/200x180.jpg/5fa2dd/ffffff',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    availableSits: 33,
    cost: 2653
  },
  {
    id: '5de44ac7fc13ae2f48000024',
    name: 'Preobrazhenka',
    countryName: 'Ukraine',
    cover: 'http://dummyimage.com/140x173.jpg/dddddd/000000',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    availableSits: 52,
    cost: 3983
  },
  {
    id: '5de44ac7fc13ae2f48000025',
    name: 'Qārah',
    countryName: 'Syria',
    cover: 'http://dummyimage.com/111x231.jpg/ff4444/ffffff',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    availableSits: 58,
    cost: 2125
  },
  {
    id: '5de44ac7fc13ae2f48000026',
    name: 'Leigongjian',
    countryName: 'China',
    cover: 'http://dummyimage.com/151x135.bmp/ff4444/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    availableSits: 32,
    cost: 9679
  },
  {
    id: '5de44ac7fc13ae2f48000027',
    name: 'Ko Samui',
    countryName: 'Thailand',
    cover: 'http://dummyimage.com/112x198.bmp/cc0000/ffffff',
    description:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    availableSits: 58,
    cost: 3306
  },
  {
    id: '5de44ac7fc13ae2f48000028',
    name: 'Bršadin',
    countryName: 'Croatia',
    cover: 'http://dummyimage.com/106x229.bmp/5fa2dd/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    availableSits: 44,
    cost: 4503
  },
  {
    id: '5de44ac7fc13ae2f48000029',
    name: 'Čejkovice',
    countryName: 'Czech Republic',
    cover: 'http://dummyimage.com/137x224.bmp/5fa2dd/ffffff',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    availableSits: 37,
    cost: 4368
  },
  {
    id: '5de44ac7fc13ae2f4800002a',
    name: 'Poykovskiy',
    countryName: 'Russia',
    cover: 'http://dummyimage.com/148x156.bmp/dddddd/000000',
    description:
      'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    availableSits: 54,
    cost: 2082
  },
  {
    id: '5de44ac7fc13ae2f4800002b',
    name: 'Weyburn',
    countryName: 'Canada',
    cover: 'http://dummyimage.com/144x181.jpg/5fa2dd/ffffff',
    description: 'In eleifend quam a odio. In hac habitasse platea dictumst.',
    availableSits: 59,
    cost: 9331
  },
  {
    id: '5de44ac7fc13ae2f4800002c',
    name: 'Sundbyberg',
    countryName: 'Sweden',
    cover: 'http://dummyimage.com/144x169.jpg/dddddd/000000',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    availableSits: 56,
    cost: 5168
  },
  {
    id: '5de44ac7fc13ae2f4800002d',
    name: 'Sogcho',
    countryName: 'South Korea',
    cover: 'http://dummyimage.com/150x204.bmp/5fa2dd/ffffff',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
    availableSits: 49,
    cost: 7516
  },
  {
    id: '5de44ac7fc13ae2f4800002e',
    name: 'Uacon',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/219x228.bmp/5fa2dd/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    availableSits: 43,
    cost: 7987
  },
  {
    id: '5de44ac7fc13ae2f4800002f',
    name: 'Barra do Garças',
    countryName: 'Brazil',
    cover: 'http://dummyimage.com/205x232.bmp/cc0000/ffffff',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    availableSits: 44,
    cost: 7182
  },
  {
    id: '5de44ac7fc13ae2f48000030',
    name: 'San Francisco',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/177x133.png/5fa2dd/ffffff',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    availableSits: 40,
    cost: 8165
  },
  {
    id: '5de44ac7fc13ae2f48000031',
    name: 'Orekhovo-Borisovo',
    countryName: 'Russia',
    cover: 'http://dummyimage.com/129x138.jpg/dddddd/000000',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    availableSits: 32,
    cost: 7212
  },
  {
    id: '5de44ac7fc13ae2f48000032',
    name: 'Krajan Atas Suger Lor',
    countryName: 'Indonesia',
    cover: 'http://dummyimage.com/220x164.png/cc0000/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    availableSits: 30,
    cost: 5622
  },
  {
    id: '5de44ac7fc13ae2f48000033',
    name: 'Shanshu',
    countryName: 'China',
    cover: 'http://dummyimage.com/173x143.png/cc0000/ffffff',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    availableSits: 39,
    cost: 7041
  },
  {
    id: '5de44ac7fc13ae2f48000034',
    name: 'Kangmei',
    countryName: 'China',
    cover: 'http://dummyimage.com/240x207.png/5fa2dd/ffffff',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    availableSits: 30,
    cost: 3632
  },
  {
    id: '5de44ac7fc13ae2f48000035',
    name: 'Paiçandu',
    countryName: 'Brazil',
    cover: 'http://dummyimage.com/109x138.jpg/cc0000/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    availableSits: 51,
    cost: 6547
  },
  {
    id: '5de44ac7fc13ae2f48000036',
    name: 'That Phanom',
    countryName: 'Thailand',
    cover: 'http://dummyimage.com/205x179.png/5fa2dd/ffffff',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    availableSits: 34,
    cost: 3396
  },
  {
    id: '5de44ac7fc13ae2f48000037',
    name: 'Santa Marta',
    countryName: 'Colombia',
    cover: 'http://dummyimage.com/181x120.jpg/ff4444/ffffff',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    availableSits: 41,
    cost: 8973
  },
  {
    id: '5de44ac7fc13ae2f48000038',
    name: 'Tayabo',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/245x148.png/5fa2dd/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    availableSits: 50,
    cost: 6243
  },
  {
    id: '5de44ac7fc13ae2f48000039',
    name: 'Empedrado',
    countryName: 'Argentina',
    cover: 'http://dummyimage.com/230x158.bmp/5fa2dd/ffffff',
    description: 'Nullam molestie nibh in lectus.',
    availableSits: 46,
    cost: 8988
  },
  {
    id: '5de44ac7fc13ae2f4800003a',
    name: 'Shahrak',
    countryName: 'Afghanistan',
    cover: 'http://dummyimage.com/217x195.png/cc0000/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    availableSits: 56,
    cost: 5555
  },
  {
    id: '5de44ac7fc13ae2f4800003b',
    name: 'Tulyushka',
    countryName: 'Russia',
    cover: 'http://dummyimage.com/105x144.bmp/dddddd/000000',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    availableSits: 37,
    cost: 2218
  },
  {
    id: '5de44ac7fc13ae2f4800003c',
    name: 'Klang',
    countryName: 'Malaysia',
    cover: 'http://dummyimage.com/223x170.bmp/ff4444/ffffff',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    availableSits: 59,
    cost: 3358
  },
  {
    id: '5de44ac7fc13ae2f4800003d',
    name: 'Klang',
    countryName: 'Malaysia',
    cover: 'http://dummyimage.com/151x187.jpg/5fa2dd/ffffff',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.',
    availableSits: 30,
    cost: 7361
  },
  {
    id: '5de44ac7fc13ae2f4800003e',
    name: 'Presidente Epitácio',
    countryName: 'Brazil',
    cover: 'http://dummyimage.com/250x180.bmp/5fa2dd/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    availableSits: 55,
    cost: 8253
  },
  {
    id: '5de44ac7fc13ae2f4800003f',
    name: 'Nesterovskaya',
    countryName: 'Russia',
    cover: 'http://dummyimage.com/250x246.bmp/cc0000/ffffff',
    description: 'Suspendisse potenti.',
    availableSits: 51,
    cost: 7356
  },
  {
    id: '5de44ac7fc13ae2f48000040',
    name: 'Aksu',
    countryName: 'Kazakhstan',
    cover: 'http://dummyimage.com/116x184.bmp/ff4444/ffffff',
    description: 'Fusce posuere felis sed lacus.',
    availableSits: 36,
    cost: 5456
  },
  {
    id: '5de44ac7fc13ae2f48000041',
    name: 'Lazaro Cardenas',
    countryName: 'Mexico',
    cover: 'http://dummyimage.com/181x238.jpg/dddddd/000000',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    availableSits: 58,
    cost: 2814
  },
  {
    id: '5de44ac7fc13ae2f48000042',
    name: 'Tiadiaye',
    countryName: 'Senegal',
    cover: 'http://dummyimage.com/227x171.png/ff4444/ffffff',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    availableSits: 45,
    cost: 7875
  },
  {
    id: '5de44ac7fc13ae2f48000043',
    name: 'Rudnyy',
    countryName: 'Kazakhstan',
    cover: 'http://dummyimage.com/100x128.bmp/cc0000/ffffff',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    availableSits: 43,
    cost: 3662
  },
  {
    id: '5de44ac7fc13ae2f48000044',
    name: 'Mianduhe',
    countryName: 'China',
    cover: 'http://dummyimage.com/210x201.bmp/dddddd/000000',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    availableSits: 41,
    cost: 9489
  },
  {
    id: '5de44ac7fc13ae2f48000045',
    name: 'Palapye',
    countryName: 'Botswana',
    cover: 'http://dummyimage.com/180x186.bmp/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
    availableSits: 55,
    cost: 9002
  },
  {
    id: '5de44ac7fc13ae2f48000046',
    name: 'Steinkjer',
    countryName: 'Norway',
    cover: 'http://dummyimage.com/134x146.bmp/dddddd/000000',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    availableSits: 47,
    cost: 4576
  },
  {
    id: '5de44ac7fc13ae2f48000047',
    name: 'Água de Pau',
    countryName: 'Portugal',
    cover: 'http://dummyimage.com/206x118.bmp/cc0000/ffffff',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.',
    availableSits: 37,
    cost: 6044
  },
  {
    id: '5de44ac7fc13ae2f48000048',
    name: 'Valašská Polanka',
    countryName: 'Czech Republic',
    cover: 'http://dummyimage.com/224x167.png/5fa2dd/ffffff',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    availableSits: 32,
    cost: 8923
  },
  {
    id: '5de44ac7fc13ae2f48000049',
    name: 'Täby',
    countryName: 'Sweden',
    cover: 'http://dummyimage.com/120x155.bmp/dddddd/000000',
    description:
      'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    availableSits: 52,
    cost: 2505
  },
  {
    id: '5de44ac7fc13ae2f4800004a',
    name: 'Mawu',
    countryName: 'China',
    cover: 'http://dummyimage.com/182x101.png/5fa2dd/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    availableSits: 56,
    cost: 8760
  },
  {
    id: '5de44ac7fc13ae2f4800004b',
    name: 'Jingdu',
    countryName: 'China',
    cover: 'http://dummyimage.com/223x179.png/5fa2dd/ffffff',
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    availableSits: 56,
    cost: 9391
  },
  {
    id: '5de44ac7fc13ae2f4800004c',
    name: 'Sokol’skoye',
    countryName: 'Russia',
    cover: 'http://dummyimage.com/101x162.png/ff4444/ffffff',
    description:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
    availableSits: 54,
    cost: 3451
  },
  {
    id: '5de44ac7fc13ae2f4800004d',
    name: 'Nagoya-shi',
    countryName: 'Japan',
    cover: 'http://dummyimage.com/231x210.png/dddddd/000000',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    availableSits: 36,
    cost: 3483
  },
  {
    id: '5de44ac7fc13ae2f4800004e',
    name: 'Xamba',
    countryName: 'China',
    cover: 'http://dummyimage.com/244x249.bmp/5fa2dd/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    availableSits: 50,
    cost: 5220
  },
  {
    id: '5de44ac7fc13ae2f4800004f',
    name: 'Tangub',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/109x192.jpg/cc0000/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    availableSits: 51,
    cost: 8897
  },
  {
    id: '5de44ac7fc13ae2f48000050',
    name: 'Nova Viçosa',
    countryName: 'Brazil',
    cover: 'http://dummyimage.com/110x139.jpg/ff4444/ffffff',
    description:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    availableSits: 32,
    cost: 6464
  },
  {
    id: '5de44ac7fc13ae2f48000051',
    name: 'Kurmanayevka',
    countryName: 'Russia',
    cover: 'http://dummyimage.com/171x145.jpg/cc0000/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    availableSits: 60,
    cost: 9635
  },
  {
    id: '5de44ac7fc13ae2f48000052',
    name: 'Phanom Phrai',
    countryName: 'Thailand',
    cover: 'http://dummyimage.com/139x219.jpg/dddddd/000000',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    availableSits: 37,
    cost: 3681
  },
  {
    id: '5de44ac7fc13ae2f48000053',
    name: 'Monte Alto',
    countryName: 'Brazil',
    cover: 'http://dummyimage.com/192x136.bmp/ff4444/ffffff',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    availableSits: 42,
    cost: 2199
  },
  {
    id: '5de44ac7fc13ae2f48000054',
    name: 'Čáslav',
    countryName: 'Czech Republic',
    cover: 'http://dummyimage.com/133x122.png/5fa2dd/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    availableSits: 58,
    cost: 7415
  },
  {
    id: '5de44ac7fc13ae2f48000055',
    name: 'Caijiapu',
    countryName: 'China',
    cover: 'http://dummyimage.com/113x243.png/dddddd/000000',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    availableSits: 36,
    cost: 3380
  },
  {
    id: '5de44ac7fc13ae2f48000056',
    name: 'Partizansk',
    countryName: 'Russia',
    cover: 'http://dummyimage.com/215x137.png/5fa2dd/ffffff',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    availableSits: 48,
    cost: 9346
  },
  {
    id: '5de44ac7fc13ae2f48000057',
    name: 'Söderhamn',
    countryName: 'Sweden',
    cover: 'http://dummyimage.com/211x132.png/ff4444/ffffff',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    availableSits: 31,
    cost: 3616
  },
  {
    id: '5de44ac7fc13ae2f48000058',
    name: 'Annecy-le-Vieux',
    countryName: 'France',
    cover: 'http://dummyimage.com/202x129.bmp/dddddd/000000',
    description: 'Pellentesque at nulla.',
    availableSits: 49,
    cost: 5544
  },
  {
    id: '5de44ac7fc13ae2f48000059',
    name: 'Gedian',
    countryName: 'China',
    cover: 'http://dummyimage.com/216x232.jpg/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    availableSits: 41,
    cost: 5458
  },
  {
    id: '5de44ac7fc13ae2f4800005a',
    name: 'Luftinjë',
    countryName: 'Albania',
    cover: 'http://dummyimage.com/215x214.png/cc0000/ffffff',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    availableSits: 30,
    cost: 8096
  },
  {
    id: '5de44ac7fc13ae2f4800005b',
    name: 'Bāsawul',
    countryName: 'Afghanistan',
    cover: 'http://dummyimage.com/173x232.jpg/5fa2dd/ffffff',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    availableSits: 59,
    cost: 5419
  },
  {
    id: '5de44ac7fc13ae2f4800005c',
    name: 'Nhà Bè',
    countryName: 'Vietnam',
    cover: 'http://dummyimage.com/142x129.png/5fa2dd/ffffff',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    availableSits: 53,
    cost: 3779
  },
  {
    id: '5de44ac7fc13ae2f4800005d',
    name: 'Quán Hàu',
    countryName: 'Vietnam',
    cover: 'http://dummyimage.com/172x240.jpg/ff4444/ffffff',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    availableSits: 54,
    cost: 3977
  },
  {
    id: '5de44ac7fc13ae2f4800005e',
    name: "Na'ale",
    countryName: 'Israel',
    cover: 'http://dummyimage.com/219x170.bmp/cc0000/ffffff',
    description: 'Maecenas ut massa quis augue luctus tincidunt.',
    availableSits: 45,
    cost: 3381
  },
  {
    id: '5de44ac7fc13ae2f4800005f',
    name: 'Kalinkavichy',
    countryName: 'Belarus',
    cover: 'http://dummyimage.com/238x170.jpg/cc0000/ffffff',
    description:
      'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    availableSits: 33,
    cost: 2350
  },
  {
    id: '5de44ac7fc13ae2f48000060',
    name: 'Moulins',
    countryName: 'France',
    cover: 'http://dummyimage.com/103x131.bmp/dddddd/000000',
    description:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
    availableSits: 32,
    cost: 3675
  },
  {
    id: '5de44ac7fc13ae2f48000061',
    name: 'Odivelas',
    countryName: 'Portugal',
    cover: 'http://dummyimage.com/164x235.bmp/cc0000/ffffff',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    availableSits: 57,
    cost: 6886
  },
  {
    id: '5de44ac7fc13ae2f48000062',
    name: 'Keetmanshoop',
    countryName: 'Namibia',
    cover: 'http://dummyimage.com/163x115.png/5fa2dd/ffffff',
    description:
      'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    availableSits: 50,
    cost: 5318
  },
  {
    id: '5de44ac7fc13ae2f48000063',
    name: 'Bolo',
    countryName: 'Philippines',
    cover: 'http://dummyimage.com/232x220.jpg/dddddd/000000',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    availableSits: 57,
    cost: 9688
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
