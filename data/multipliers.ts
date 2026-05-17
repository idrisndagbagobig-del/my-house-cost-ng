export const stateMultipliers:
Record<string, number> = {

  Lagos: 1.30,

  Abuja: 1.2,

  Rivers: 1.15,

  Kano: 1.05,

  Kaduna: 0.95,

  Ogun: 1.05,

  Oyo: 1.02,

  Enugu: 1.03,

  Anambra: 1.08,

  Imo: 1.05,

  Abia: 1.02,

  Ebonyi: 0.98,

  Delta: 1.08,

  Edo: 1.04,

  AkwaIbom: 1.05,

  Bayelsa: 1.02,

  CrossRiver: 1.0,

  Ondo: 0.98,

  Ekiti: 0.94,

  Osun: 0.96,

  Kwara: 0.96,

  Niger: 0.93,

  Benue: 0.92,

  Kogi: 0.93,

};

export const finishMultipliers = {

  Basic: 0.6,

  Standard: 0.7,

  Luxury: 0.8,

};

export const bedroomMultipliers: Record<
  number,
  number
> = {

  1: 0.2,

  2: 0.3,

  3: 0.4,

  4: 0.5,

  5: 0.6,

  6: 0.7,

};

export const floorMultipliers: Record<
  number,
  number
> = {

  1: 1,

  2: 1.12,

  3: 1.22,

  4: 1.32,

  5: 1.45,

};

export const foundationMultipliers: Record<
  string,
  number
> = {

  Bungalow: 0.6,

  Duplex: 1.0,

  Apartment: 1.15,

  Mansion: 1.18,

  Maisonette: 1.6,

  Penthouse: 2,

  Traditional: 0.6,

  HighRise: 3.5,

};

export const unitMultipliers: Record<
  number,
  number
> = {

  1: 1,

  2: 1.08,

  4: 1.15,

  6: 1.25,

  8: 1.4,

};

export const locationMultipliers:
Record<string, number> = {

  // Lagos
  Lekki: 1.12,
  Ikoyi: 1.18,
  VictoriaIsland: 1.2,
  IbejuLekki: 1.02,
  Epe: 1.02,
  Ajah: 1.12,
  Ikorodu: 0.9,
  Yaba: 1.1,
  Ikeja: 1.12, 
  

  // Abuja
Jabi: 1.0,
Maitama: 1.0,
Katampe: 1.0,
LifeCamp: 1.0,
Utako: 1.0,
Apo: 1.0,
Karu: 0.9,
Durumi: 1.0,
Lokogoma: 1.0,

  // Rivers
  ObioAkpor: 1.08,
Eleme: 0.92,
Oyigbo: 0.88,
Omoku: 0.9,
Bonny: 1.15,
Rumuokoro: 1.05,
Rukpokwu: 1.02,

 // Ogun
Abeokuta: 0.98,
Mowe: 0.98,
Ibafo: 0.95,
Sagamu: 0.92,
IjebuOde: 0.92,
Ota: 0.92,
Sango: 0.92,
Agbara: 0.92,

// Oyo
Ibadan: 1.05,
Bodija: 1.15,
Challenge: 1,
Akobo: 1.08,
Oluyole: 1.02,
Moniya: 0.95,
RingRoad: 1.05,
Apata: 0.98,

// Enugu
IndependenceLayout: 1.18,
NewHaven: 1.15,
ThinkersCorner: 1.08,
Emene: 1,
TransEkulu: 1.1,
Abakpa: 0.95,
Uwani: 1.02,

// Imo
Owerri: 1.08,
Orlu: 1,
Okigwe: 0.95,
Mbaise: 0.92,
Nekede: 1,
NewOwerri: 1.15,


  // Anambra
  Awka: 1.08,
Ekwulobia: 0.95,
Nkpor: 1,
Ogidi: 1,
Obosi: 1,
Amawbia: 1.02,

  // Delta
Ughelli: 0.98,
Sapele: 1,
Agbor: 0.96,
Effurun: 1.05,
Okpanam: 1.08,
Abraka: 0.94,

  // Edo
  Ekpoma: 0.95,
Auchi: 0.92,
Ugbowo: 1.02,
IkpobaHill: 0.96,
SapeleRoad: 1.08,

};