const placesMock = [
  {
    id: 1,
    Place_Name: 'Mabayo',
    Description: 'Osteochondropathy, unspecified, unspecified lower leg',
    Remaning_Places: 21,
    Cost: 1927
  },
  {
    id: 2,
    Place_Name: 'Karma',
    Description:
      'Stress fracture, right foot, subsequent encounter for fracture with delayed healing',
    Remaning_Places: 30,
    Cost: 2234
  },
  {
    id: 3,
    Place_Name: 'Nanlang',
    Description: 'Malignant neoplasm of esophagus',
    Remaning_Places: 17,
    Cost: 7321
  },
  {
    id: 4,
    Place_Name: 'Butungan',
    Description:
      'Nondisplaced longitudinal fracture of left patella, subsequent encounter for open fracture type I or II with malunion',
    Remaning_Places: 30,
    Cost: 690
  },
  {
    id: 5,
    Place_Name: 'Cibebek',
    Description: 'Maternal care for unstable lie, fetus 4',
    Remaning_Places: 12,
    Cost: 7335
  },
  {
    id: 6,
    Place_Name: 'Suqin Huimin',
    Description:
      'War operations involving other fires, conflagrations and hot substances, civilian',
    Remaning_Places: 3,
    Cost: 4803
  },
  {
    id: 7,
    Place_Name: 'Ovsyanka',
    Description: 'Venous complications and hemorrhoids in the puerperium',
    Remaning_Places: 24,
    Cost: 5077
  },
  {
    id: 8,
    Place_Name: 'Kayukembang',
    Description: 'Other postprocedural states',
    Remaning_Places: 29,
    Cost: 1433
  },
  {
    id: 9,
    Place_Name: 'Créteil',
    Description:
      'Unspecified displaced fracture of surgical neck of right humerus, initial encounter for closed fracture',
    Remaning_Places: 30,
    Cost: 3884
  },
  {
    id: 10,
    Place_Name: 'Ocucaje',
    Description:
      'Complete traumatic amputation at level between knee and ankle, left lower leg',
    Remaning_Places: 12,
    Cost: 5645
  },
  {
    id: 11,
    Place_Name: 'Mantingantengah',
    Description:
      'Fracture of unspecified part of right clavicle, subsequent encounter for fracture with delayed healing',
    Remaning_Places: 6,
    Cost: 7087
  },
  {
    id: 12,
    Place_Name: 'Kut Bak',
    Description: 'Poisoning by lysergide [LSD], intentional self-harm, sequela',
    Remaning_Places: 2,
    Cost: 7796
  },
  {
    id: 13,
    Place_Name: 'Karangasem Laok',
    Description:
      'Displaced fracture of olecranon process with intraarticular extension of right ulna, subsequent encounter for open fracture type I or II with delayed healing',
    Remaning_Places: 26,
    Cost: 2336
  },
  {
    id: 14,
    Place_Name: 'Panjakent',
    Description: 'Poisoning by rifampicins, accidental (unintentional)',
    Remaning_Places: 26,
    Cost: 1375
  },
  {
    id: 15,
    Place_Name: 'Hongcheng',
    Description:
      'Nondisplaced other extraarticular fracture of left calcaneus, subsequent encounter for fracture with routine healing',
    Remaning_Places: 14,
    Cost: 5706
  },
  {
    id: 16,
    Place_Name: 'San Manuel',
    Description:
      'Other fracture of right femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with malunion',
    Remaning_Places: 2,
    Cost: 4058
  },
  {
    id: 17,
    Place_Name: 'Miguel Hidalgo',
    Description: 'Punctate keratitis, left eye',
    Remaning_Places: 17,
    Cost: 5778
  },
  {
    id: 18,
    Place_Name: 'Presidente Bernardes',
    Description:
      'Nondisplaced transverse fracture of unspecified patella, subsequent encounter for closed fracture with nonunion',
    Remaning_Places: 11,
    Cost: 687
  },
  {
    id: 19,
    Place_Name: 'Basak',
    Description:
      'Nondisplaced fracture of neck of scapula, left shoulder, subsequent encounter for fracture with nonunion',
    Remaning_Places: 0,
    Cost: 4776
  },
  {
    id: 20,
    Place_Name: 'Pingdingshan',
    Description: 'Somnolence, stupor and coma',
    Remaning_Places: 30,
    Cost: 1932
  },
  {
    id: 21,
    Place_Name: 'Žacléř',
    Description:
      'Adverse effect of skeletal muscle relaxants [neuromuscular blocking agents], sequela',
    Remaning_Places: 8,
    Cost: 6048
  },
  {
    id: 22,
    Place_Name: 'Cam Lâm',
    Description:
      'Other injury of other muscles, fascia and tendons at shoulder and upper arm level, left arm, subsequent encounter',
    Remaning_Places: 28,
    Cost: 6953
  },
  {
    id: 23,
    Place_Name: 'Zelenodolsk',
    Description: 'Myelophthisis',
    Remaning_Places: 3,
    Cost: 4211
  },
  {
    id: 24,
    Place_Name: 'Lesnikovo',
    Description:
      'Strain of adductor muscle, fascia and tendon of left thigh, initial encounter',
    Remaning_Places: 22,
    Cost: 7771
  },
  {
    id: 25,
    Place_Name: 'Monte Alegre',
    Description: 'Pneumatic hammer syndrome, initial encounter',
    Remaning_Places: 29,
    Cost: 517
  },
  {
    id: 26,
    Place_Name: 'Leidschendam',
    Description:
      'Nondisplaced fracture of distal phalanx of left lesser toe(s), sequela',
    Remaning_Places: 12,
    Cost: 3233
  },
  {
    id: 27,
    Place_Name: 'Telde',
    Description: 'Crushing injury of penis, subsequent encounter',
    Remaning_Places: 9,
    Cost: 6134
  },
  {
    id: 28,
    Place_Name: 'Linhó',
    Description:
      'Poisoning by unspecified psychodysleptics [hallucinogens], assault, sequela',
    Remaning_Places: 1,
    Cost: 5406
  },
  {
    id: 29,
    Place_Name: 'Talun',
    Description: 'Unspecified sprain of unspecified wrist, initial encounter',
    Remaning_Places: 25,
    Cost: 662
  },
  {
    id: 30,
    Place_Name: 'Liangli',
    Description: 'Other specified injury of dorsal vein of left foot',
    Remaning_Places: 25,
    Cost: 1596
  },
  {
    id: 31,
    Place_Name: 'Hāfizābād',
    Description:
      'Unspecified injury of femoral vein at hip and thigh level, unspecified leg',
    Remaning_Places: 25,
    Cost: 1988
  },
  {
    id: 32,
    Place_Name: 'Tocopilla',
    Description: "Patient's unintentional underdosing of medication regimen",
    Remaning_Places: 30,
    Cost: 1657
  },
  {
    id: 33,
    Place_Name: 'Martingança',
    Description: 'Laceration with foreign body of thyroid gland, sequela',
    Remaning_Places: 16,
    Cost: 1189
  },
  {
    id: 34,
    Place_Name: 'Dongshangguan',
    Description:
      'Other mental disorders complicating pregnancy, third trimester',
    Remaning_Places: 23,
    Cost: 4454
  },
  {
    id: 35,
    Place_Name: 'Santa Ana Huista',
    Description: 'Acute hematogenous osteomyelitis, unspecified shoulder',
    Remaning_Places: 17,
    Cost: 7155
  },
  {
    id: 36,
    Place_Name: 'Mokronog',
    Description:
      'Maternal care for other isoimmunization, second trimester, fetus 2',
    Remaning_Places: 23,
    Cost: 3701
  },
  {
    id: 37,
    Place_Name: 'Bāft',
    Description:
      'Nondisplaced oblique fracture of shaft of unspecified radius, subsequent encounter for open fracture type I or II with routine healing',
    Remaning_Places: 28,
    Cost: 2310
  },
  {
    id: 38,
    Place_Name: 'Coris',
    Description: 'Adult physical abuse, confirmed',
    Remaning_Places: 21,
    Cost: 712
  },
  {
    id: 39,
    Place_Name: 'Créteil',
    Description:
      'Other maternal infectious and parasitic diseases complicating pregnancy, third trimester',
    Remaning_Places: 12,
    Cost: 3451
  },
  {
    id: 40,
    Place_Name: 'Lomme',
    Description:
      'Person on outside of bus injured in collision with heavy transport vehicle or bus in traffic accident, sequela',
    Remaning_Places: 16,
    Cost: 2403
  },
  {
    id: 41,
    Place_Name: 'Waterloo',
    Description: 'Poisoning by saline and osmotic laxatives, assault, sequela',
    Remaning_Places: 10,
    Cost: 7480
  },
  {
    id: 42,
    Place_Name: 'Abengourou',
    Description: 'Malignant immunoproliferative disease, unspecified',
    Remaning_Places: 30,
    Cost: 7227
  },
  {
    id: 43,
    Place_Name: 'Templeogue',
    Description:
      'Pre-existing hypertensive chronic kidney disease complicating pregnancy, unspecified trimester',
    Remaning_Places: 18,
    Cost: 4429
  },
  {
    id: 44,
    Place_Name: 'Igreja',
    Description: 'Syphilis complicating pregnancy, unspecified trimester',
    Remaning_Places: 22,
    Cost: 7385
  },
  {
    id: 45,
    Place_Name: 'Sieniawa Żarska',
    Description:
      'Nondisplaced fracture of medial phalanx of right index finger',
    Remaning_Places: 13,
    Cost: 428
  },
  {
    id: 46,
    Place_Name: 'Tongliao',
    Description: 'Corrosion of second degree of left toe(s) (nail)',
    Remaning_Places: 18,
    Cost: 2070
  },
  {
    id: 47,
    Place_Name: 'Sim',
    Description:
      'Nondisplaced bicondylar fracture of unspecified tibia, subsequent encounter for closed fracture with malunion',
    Remaning_Places: 9,
    Cost: 5495
  },
  {
    id: 48,
    Place_Name: 'Banjar Jambe Baleran',
    Description: 'Chondromalacia, left elbow',
    Remaning_Places: 29,
    Cost: 2696
  },
  {
    id: 49,
    Place_Name: 'Kavalerovo',
    Description: 'Struck by other mammals, subsequent encounter',
    Remaning_Places: 9,
    Cost: 4179
  },
  {
    id: 50,
    Place_Name: 'San Rafael',
    Description:
      'Burn of unspecified degree of multiple sites of unspecified ankle and foot, subsequent encounter',
    Remaning_Places: 24,
    Cost: 1958
  },
  {
    id: 51,
    Place_Name: 'Nikolayevka',
    Description:
      'Other injury of unspecified muscles, fascia and tendons at forearm level, right arm, sequela',
    Remaning_Places: 16,
    Cost: 5378
  },
  {
    id: 52,
    Place_Name: 'Dębowiec',
    Description:
      'Infection and inflammatory reaction due to internal fixation device of left femur, sequela',
    Remaning_Places: 7,
    Cost: 1623
  },
  {
    id: 53,
    Place_Name: 'Namp’o',
    Description: 'Mild hyperemesis gravidarum',
    Remaning_Places: 25,
    Cost: 2860
  },
  {
    id: 54,
    Place_Name: 'MacArthur',
    Description: 'Trichiasis without entropian right lower eyelid',
    Remaning_Places: 20,
    Cost: 2412
  },
  {
    id: 55,
    Place_Name: 'Napak',
    Description: 'Candidal meningitis',
    Remaning_Places: 30,
    Cost: 4410
  },
  {
    id: 56,
    Place_Name: 'Kil',
    Description:
      'Inhalant dependence with inhalant-induced psychotic disorder with delusions',
    Remaning_Places: 7,
    Cost: 7834
  },
  {
    id: 57,
    Place_Name: 'Hailin',
    Description:
      'Nondisplaced transverse fracture of shaft of left radius, subsequent encounter for closed fracture with malunion',
    Remaning_Places: 21,
    Cost: 6941
  },
  {
    id: 58,
    Place_Name: 'Concordia',
    Description:
      'Corrosion with resulting rupture and destruction of right eyeball, initial encounter',
    Remaning_Places: 26,
    Cost: 2861
  },
  {
    id: 59,
    Place_Name: 'Čerčany',
    Description:
      'Atherosclerosis of other type of bypass graft(s) of the extremities with gangrene',
    Remaning_Places: 17,
    Cost: 6626
  },
  {
    id: 60,
    Place_Name: 'Tsiroanomandidy',
    Description:
      'Other psychoactive substance dependence with other psychoactive substance-induced disorders',
    Remaning_Places: 22,
    Cost: 6861
  },
  {
    id: 61,
    Place_Name: 'Ulaan-Uul',
    Description: 'Connective tissue stenosis of neural canal',
    Remaning_Places: 16,
    Cost: 5266
  },
  {
    id: 62,
    Place_Name: 'Huifeng',
    Description:
      'Displaced supracondylar fracture without intracondylar extension of lower end of right femur, initial encounter for open fracture type I or II',
    Remaning_Places: 24,
    Cost: 5139
  },
  {
    id: 63,
    Place_Name: 'Yanhe',
    Description: 'Other chronic hematogenous osteomyelitis, right femur',
    Remaning_Places: 21,
    Cost: 5673
  },
  {
    id: 64,
    Place_Name: 'Casal de Cambra',
    Description: 'Carcinoma in situ of pharynx',
    Remaning_Places: 15,
    Cost: 2321
  },
  {
    id: 65,
    Place_Name: 'Wāling',
    Description:
      'Other mechanical complication of esophageal anti-reflux device',
    Remaning_Places: 30,
    Cost: 1512
  },
  {
    id: 66,
    Place_Name: 'Tanabi',
    Description:
      'Laceration of extensor or abductor muscles, fascia and tendons of thumb at forearm level',
    Remaning_Places: 8,
    Cost: 1788
  },
  {
    id: 67,
    Place_Name: 'Cabangahan',
    Description:
      'Driver of pick-up truck or van injured in collision with railway train or railway vehicle in nontraffic accident, sequela',
    Remaning_Places: 9,
    Cost: 5977
  },
  {
    id: 68,
    Place_Name: 'Laxou',
    Description: 'Other ossification of muscle, left forearm',
    Remaning_Places: 22,
    Cost: 3047
  },
  {
    id: 69,
    Place_Name: 'Lluchubamba',
    Description:
      'Other specified injury of axillary or brachial vein, right side, subsequent encounter',
    Remaning_Places: 26,
    Cost: 3563
  },
  {
    id: 70,
    Place_Name: 'Hualin',
    Description:
      'Other mechanical complication of internal fixation device of vertebrae, initial encounter',
    Remaning_Places: 11,
    Cost: 6438
  },
  {
    id: 71,
    Place_Name: 'Marabá',
    Description:
      'Poisoning by other systemic antibiotics, undetermined, initial encounter',
    Remaning_Places: 18,
    Cost: 6504
  },
  {
    id: 72,
    Place_Name: 'Padangguci',
    Description:
      'Corrosion of first degree of left wrist, subsequent encounter',
    Remaning_Places: 11,
    Cost: 7029
  },
  {
    id: 73,
    Place_Name: 'Saint-Quentin',
    Description: 'Unspecified displaced fracture of fourth cervical vertebra',
    Remaning_Places: 12,
    Cost: 659
  },
  {
    id: 74,
    Place_Name: 'Zhongshan',
    Description:
      'Atherosclerosis of autologous vein coronary artery bypass graft(s) with unspecified angina pectoris',
    Remaning_Places: 5,
    Cost: 6857
  },
  {
    id: 75,
    Place_Name: 'Solntsevo',
    Description: 'Placenta accreta, second trimester',
    Remaning_Places: 2,
    Cost: 7102
  },
  {
    id: 76,
    Place_Name: 'Huerta Grande',
    Description:
      'Salter-Harris Type IV physeal fracture of right calcaneus, subsequent encounter for fracture with delayed healing',
    Remaning_Places: 9,
    Cost: 5726
  },
  {
    id: 77,
    Place_Name: 'Chengjiang',
    Description:
      'Torus fracture of lower end of unspecified femur, initial encounter for closed fracture',
    Remaning_Places: 29,
    Cost: 660
  },
  {
    id: 78,
    Place_Name: 'Jankovec',
    Description: 'Mild protein-calorie malnutrition',
    Remaning_Places: 10,
    Cost: 1441
  },
  {
    id: 79,
    Place_Name: 'Yelyzavethradka',
    Description: 'Osseointegration failure of dental implant',
    Remaning_Places: 18,
    Cost: 5622
  },
  {
    id: 80,
    Place_Name: 'Mochudi',
    Description: 'Shock due to being struck by lightning, sequela',
    Remaning_Places: 9,
    Cost: 6662
  },
  {
    id: 81,
    Place_Name: 'San Francisco',
    Description: 'Major laceration of kidney',
    Remaning_Places: 4,
    Cost: 3903
  },
  {
    id: 82,
    Place_Name: 'Lisovi Sorochyntsi',
    Description: 'Cellulitis of right orbit',
    Remaning_Places: 9,
    Cost: 2790
  },
  {
    id: 83,
    Place_Name: 'Pirapozinho',
    Description:
      'Nondisplaced fracture of base of neck of right femur, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing',
    Remaning_Places: 23,
    Cost: 1767
  },
  {
    id: 84,
    Place_Name: 'Kranjska Gora',
    Description:
      'Laceration with foreign body of left back wall of thorax without penetration into thoracic cavity, subsequent encounter',
    Remaning_Places: 6,
    Cost: 1323
  },
  {
    id: 85,
    Place_Name: 'Zelenogradsk',
    Description: 'Other enthesopathy of right foot',
    Remaning_Places: 1,
    Cost: 6202
  },
  {
    id: 86,
    Place_Name: 'Feilaixia',
    Description: 'Cataract with neovascularization, right eye',
    Remaning_Places: 24,
    Cost: 5022
  },
  {
    id: 87,
    Place_Name: 'Tangjiakou',
    Description:
      'Foreign body in other and multiple parts of external eye, left eye',
    Remaning_Places: 4,
    Cost: 7405
  },
  {
    id: 88,
    Place_Name: 'Áyios Nikólaos',
    Description:
      'Displaced fracture of base of third metacarpal bone, left hand, subsequent encounter for fracture with routine healing',
    Remaning_Places: 5,
    Cost: 3928
  },
  {
    id: 89,
    Place_Name: 'Benito Juarez',
    Description: 'Injury of facial nerve, right side',
    Remaning_Places: 1,
    Cost: 2141
  },
  {
    id: 90,
    Place_Name: 'Plateliai',
    Description:
      'Poisoning by other synthetic narcotics, intentional self-harm',
    Remaning_Places: 26,
    Cost: 7026
  },
  {
    id: 91,
    Place_Name: 'Dailekh',
    Description: 'Carcinoma in situ of other and unspecified sites',
    Remaning_Places: 28,
    Cost: 897
  },
  {
    id: 92,
    Place_Name: 'Porkhov',
    Description: 'Posterior dislocation of right hip',
    Remaning_Places: 30,
    Cost: 1114
  },
  {
    id: 93,
    Place_Name: 'Vanadzor',
    Description: 'Embryonic cyst of fallopian tube',
    Remaning_Places: 23,
    Cost: 6245
  },
  {
    id: 94,
    Place_Name: 'Landim',
    Description:
      'Basal cell carcinoma of skin of unspecified upper limb, including shoulder',
    Remaning_Places: 13,
    Cost: 3481
  },
  {
    id: 95,
    Place_Name: 'Södertälje',
    Description: 'Fracture of T11-T12 vertebra',
    Remaning_Places: 20,
    Cost: 2680
  },
  {
    id: 96,
    Place_Name: 'Bunga Mas',
    Description: 'Other disorders of optic disc, bilateral',
    Remaning_Places: 10,
    Cost: 6190
  },
  {
    id: 97,
    Place_Name: 'Añatuya',
    Description: 'Other congenital cauda equina malformations',
    Remaning_Places: 22,
    Cost: 4018
  },
  {
    id: 98,
    Place_Name: 'Khorol',
    Description:
      'Other specified disorders of Eustachian tube, unspecified ear',
    Remaning_Places: 17,
    Cost: 6191
  },
  {
    id: 99,
    Place_Name: 'Sanok',
    Description: 'Monoplegia of lower limb affecting left nondominant side',
    Remaning_Places: 10,
    Cost: 507
  },
  {
    id: 100,
    Place_Name: 'Oepula',
    Description: 'Nasopharyngeal diphtheria',
    Remaning_Places: 26,
    Cost: 3848
  }
];

module.exports = { placesMock };
