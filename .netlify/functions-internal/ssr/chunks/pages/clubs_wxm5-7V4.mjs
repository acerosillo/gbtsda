import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_BSiTW4v7.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './assistant-instructors_CogUMRay.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

const clubsData = [
  {
    location: "East Anglia",
    instructor: "Master M. Khan (8th Dan), Master D Khan (5th Dan)",
    club: "Huntingdon TSD",
    address: {
      location_name: "One Leisure",
      street: "St Peters Road",
      city: "Huntingdon",
      postal_code: "PE29 7DG"
    },
    contact: {
      phone: "+447973636740",
      email: "master.mkhan@gbtsda.com"
    },
    training_times: ["Tuesdays - 19:00 - 21:00", "Thursdays - 19:00 - 21:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master M. Khan (8th Dan), Master D Khan (5th Dan)",
    club: "St Ives TSD",
    address: {
      location_name: "One Leisure Centre",
      street: "Westwood Road",
      city: "St Ives",
      postal_code: "PE27 6WU"
    },
    contact: {
      phone: "+447973636740",
      email: "master.mkhan@gbtsda.com"
    },
    training_times: ["Fridays - 19:30 - 21:00", "Sundays - 11:30 - 13:30"]
  },
  {
    location: "East Anglia",
    instructor: "Master C. Carter (7th Dan)",
    club: "Grafham TSD",
    address: {
      location_name: "Grafham Village Hall",
      street: "Brampton Road, Grafham Water",
      city: "Cambridgeshire",
      postal_code: "PE28 0UR"
    },
    contact: {
      phone: "+447854664098",
      email: "master.ccarter@gbstda.com"
    },
    training_times: ["TBC"]
  },
  {
    location: "East Anglia",
    instructor: "Master P. Wiskin (5th Dan)",
    club: "Ramsey & Upwood TSD",
    address: {
      location_name: "Upwood Primary School",
      street: "Ramsey Rd, Upwood",
      city: "Huntingdon",
      postal_code: "PE26 2QA"
    },
    contact: {
      phone: "+447543561896",
      email: "master.pwiskin@gbtsda.com"
    },
    training_times: ["Mondays - 19:00 - 21:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master P. Wiskin (5th Dan)",
    club: "Ramsey & Upwood TSD",
    address: {
      location_name: "Ramsey One Leisure Centre",
      street: "Abbey Road",
      city: "Ramsey",
      postal_code: "PE26 1DP"
    },
    contact: {
      phone: "+447543561896",
      email: "master.pwiskin@gbtsda.com"
    },
    training_times: ["Wednesdays - 19:00 - 21:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master Dawn Khan (5th Dan)",
    club: "Huntingdon Tiny Tigers TSD",
    address: {
      location_name: "One Leisure",
      street: "St Peters Road",
      city: "Huntingdon",
      postal_code: "PE29 7DG"
    },
    contact: {
      phone: "+447427686186",
      email: "master.dkhan@gbtsda.com"
    },
    training_times: ["Tuesdays - 18:00 - 19:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master M. Allen (5th Dan)",
    club: "Cambridge & Impington TSD",
    address: {
      location_name: "Impington Sports Centre",
      street: "New Road",
      city: "Impington",
      postal_code: "CB24 9LX"
    },
    contact: {
      phone: "+447944078007",
      email: "master.mallen@gbtsda.com"
    },
    training_times: ["Tuesdays - 18:30 - 20:30", "Fridays - 18:30 - 20:30"]
  },
  {
    location: "East Anglia",
    instructor: "Master B. Harper (5th Dan), Mr N. Payne (3rd Dan)",
    club: "Comberton TSD",
    address: {
      location_name: "Meridian Primary School",
      street: "Harbour Avenue, Comberton",
      city: "Cambridge",
      postal_code: "CB23 7DD"
    },
    contact: {
      phone: "+447833451301",
      email: ["master.bharper@gbtsda.com", "mr.npayne@gbtsda.com"]
    },
    training_times: ["Mondays - 19:00 - 21:00", "Wednesdays - 19:00 - 21:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master L. Allen (5th Dan)",
    club: "Chatteris TSD",
    address: {
      location_name: "Cromwell Community College",
      street: "Eastwood",
      city: "Chatteris",
      postal_code: "PE16 6NF"
    },
    contact: {
      phone: "+447787552118",
      email: "master.lallen@gbtsda.com"
    },
    training_times: ["Mondays - 18.30 - 20.30", "Fridays - 18.30 - 20.00"]
  },
  {
    location: "East Anglia",
    instructor: "Master R. Tyler (5th Dan)",
    club: "Market Deeping TSD",
    address: {
      location_name: "Global Centre",
      street: "113 Spalding Road",
      city: "Market Deeping",
      postal_code: "PE6 8SD"
    },
    contact: {
      phone: "+447910869382",
      email: "master.rtyler@gbtsda.com"
    },
    training_times: [
      "Mondays - 19:00 - 20:30 & 20:30 - 21:00",
      "Tuesdays - 18:00 - 19:00 & 19:00 - 20:30",
      "Wednesdays - 18:00 - 19:00",
      "Thursdays - 18:00 - 19:15 & 19:30 - 21:00",
      "Fridays - 18:00 - 19:00 & 19:00 - 20:30"
    ]
  },
  {
    location: "East Anglia",
    instructor: "Master A. Robertson (4th Dan)",
    club: "Melbourn TSD",
    address: {
      location_name: "Melbourn Village College",
      street: "The Moor, Melbourn, Royston",
      city: "Hertfordshire",
      postal_code: "SG8 6EF"
    },
    contact: {
      phone: "+447983630516",
      email: "master.arobertson@gbtsda.com"
    },
    training_times: ["Tuesdays - 19:00 - 21:00", "Thursdays - 19:00 - 21:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master D. Harvey (4th Dan)",
    club: "Wisbech & Kings Lynn TSD",
    address: {
      location_name: "Alive LynnSport",
      street: "Greenpark Avenue",
      city: "Kings Lynn",
      postal_code: "PE30 2NB"
    },
    contact: {
      phone: "+447709120012",
      email: "master.dharvey@gbtsda.com"
    },
    training_times: [
      "Mondays - 19:00 - 20:30 (age 6yrs+)",
      "Weapons class (senior ranks only) - 20:30 - 21:00"
    ]
  },
  {
    location: "East Anglia",
    instructor: "Master D. Harvey (4th Dan)",
    club: "Wisbech & Kings Lynn TSD",
    address: {
      location_name: "Walton Highway Village Club",
      street: "Walton Highway",
      city: "Cambridge",
      postal_code: "PE14 7DF"
    },
    contact: {
      phone: "+447709120012",
      email: "master.dharvey@gbtsda.com"
    },
    training_times: [
      "Thursdays - Tiny tigers (4-6yrs) 17:30 - 18:00",
      "Thursdays - Little kickers (6-10yrs) 18:00 - 19:00",
      "Thursdays - Main class (10yrs+) 19:00 - 21:00"
    ]
  },
  {
    location: "East Anglia",
    instructor: "Master N. Crockett (4th Dan)",
    club: "Cherry Hinton TSD",
    address: null,
    contact: {
      phone: "+447900407586",
      email: "master.ncrockett@gbtsda.com"
    },
    training_times: null
  },
  {
    location: "East Anglia",
    instructor: "Master M. Shahid (4th Dan)",
    club: "Peterborough TSD",
    address: {
      location_name: "Millenium Centre",
      street: "Dickens Street",
      city: "Peterborough",
      postal_code: "PE1 5DG"
    },
    contact: {
      phone: "+447815188159",
      email: "master.mshahid@gbtsda.com"
    },
    training_times: ["Tuesdays - 19:15 - TBC", "Thursdays - 19:15 - TBC"]
  },
  {
    location: "East Anglia",
    instructor: "Master K. Reed (4th Dan)",
    club: "Sawtry & Glatton TSD",
    address: {
      location_name: "Academy Leisure Centre",
      street: "Green End Road, Sawtry",
      city: "Cambridge",
      postal_code: "PE28 5UY"
    },
    contact: {
      phone: "+447783674797",
      email: "master.kreed@gbtsda.com"
    },
    training_times: ["Thursdays - 19:00 - 20:30"]
  },
  {
    location: "East Anglia",
    instructor: "Master S. Amin (4th Dan)",
    club: "Stanground TSD",
    address: {
      location_name: "Stanground Sports Centre",
      street: "Peterborough Road, Stanground",
      city: "Peterborough",
      postal_code: "PE7 3BY"
    },
    contact: {
      phone: "+447874901300",
      email: "master.samin@gbtsda.com"
    },
    training_times: ["Mondays - 18:00 - 19:30", "Wednesdays - 18:00 - 19:30"]
  },
  {
    location: "East Anglia",
    instructor: "Master B. Halliday (4th Dan) & Miss Z. Halliday (Sam Dan)",
    club: "Cambridge South TSD",
    address: {
      location_name: "Cherry Hinton Village Centre",
      street: "Colville Road",
      city: "Cambridge",
      postal_code: "CB1 9EJ"
    },
    contact: {
      phone: "+447801752773",
      email: "master.bhalliday@gbtsda.com"
    },
    training_times: ["Mondays - 18:00 - 20:00", "Fridays - 18:00 - 20:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master G. Russell (4th Dan)",
    club: "Witchford TSD",
    address: {
      location_name: "Paradise Sports Centre",
      street: "Newnham Street",
      city: "Ely",
      postal_code: "CB7 4PQ"
    },
    contact: {
      phone: "+447800923780",
      email: "master.grussell@gbtsda.com"
    },
    training_times: ["Tuesdays - 18:00 - 20:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master G. Russell (4th Dan)",
    club: "Witchford TSD",
    address: {
      location_name: "St Peter's Hall",
      street: "41 High Street",
      city: "Wilburton",
      postal_code: "CB6 3RA"
    },
    contact: {
      phone: "+447800923780",
      email: "master.grussell@gbtsda.com"
    },
    training_times: ["Mondays - 18:30 - 20:30"]
  },
  {
    location: "East Anglia",
    instructor: "Master G. Russell (4th Dan)",
    club: "Witchford TSD",
    address: {
      location_name: "Hive Leisure Centre",
      street: "15 Ely Leisure Village, Downham Road",
      city: "Ely",
      postal_code: "CB6 3RB"
    },
    contact: {
      phone: "+447800923780",
      email: "master.grussell@gbtsda.com"
    },
    training_times: ["Thursdays - 18:00 - 20:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master R. Russell (4th Dan)",
    club: "Ely TSD",
    address: {
      location_name: "Paradise Sports Centre",
      street: "Newnham Street",
      city: "Ely",
      postal_code: "CB7 4PQ"
    },
    contact: {
      phone: "+447732746179",
      email: "master.rrussell@gbtsda.com"
    },
    training_times: ["Tuesdays - 18:00 - 20:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master R. Russell (4th Dan)",
    club: "Ely TSD",
    address: {
      location_name: "Hive Leisure Centre",
      street: "15 Ely Leisure Village, Downham Road",
      city: "Ely",
      postal_code: "CB6 3RB"
    },
    contact: {
      phone: "+447732746179",
      email: "master.rrussell@gbtsda.com"
    },
    training_times: ["Thursdays - 18:00 - 20:00"]
  },
  {
    location: "East Anglia",
    instructor: "Master R. Russell (4th Dan)",
    club: "Ely TSD",
    address: {
      location_name: "St Peter's Hall",
      street: "41 High Street",
      city: "Wilburton",
      postal_code: "CB6 3RA"
    },
    contact: {
      phone: "+447732746179",
      email: "master.rrussell@gbtsda.com"
    },
    training_times: ["Mondays - 18:30 - 20:30"]
  },
  {
    location: "East Anglia",
    instructor: "Master L. Morton (4th Dan)",
    club: "Northstowe TSD",
    address: {
      location_name: "Western Park Sports Pavilion",
      street: "Northstowe",
      city: "Cambridge",
      postal_code: "CB24 1DA"
    },
    contact: {
      phone: "+447919050261",
      email: "master.lmorton@gbtsda.com"
    },
    training_times: ["Mondays - 16:30 - 17:30", "Thursdays - 16:30 - 17:30"]
  },
  {
    location: "East Anglia",
    instructor: "Master G. Morton (4th Dan)",
    club: "Swavesey TSD",
    address: {
      location_name: "Primary School",
      street: "Middle Watch",
      city: "Swavesey, Cambridge",
      postal_code: "CB24 4RN"
    },
    contact: {
      phone: "+447919050261",
      email: "master.gmorton@gbtsda.com"
    },
    training_times: [
      "Mondays - 18:00 - 20:00",
      "Tuesdays - 18:00 - 19:00",
      "Wednesdays - 18:00 - 20:00"
    ]
  },
  {
    location: "East Anglia",
    instructor: "Mrs K. Alexander (3rd Dan)",
    club: "Cambourne Ladies TSD",
    address: {
      location_name: "1 Ventura Avenue",
      street: "Cambourne",
      city: "",
      postal_code: "CB23 9HX"
    },
    contact: {
      phone: "+447540623521",
      email: "mrs.kalexander@gbtsda.com"
    },
    training_times: [
      "Wednesdays - 17:40 - 18:40",
      "Wednesdays - 18:40 - 19:40"
    ]
  },
  {
    location: "East Anglia",
    instructor: "Mrs B. Seager (3rd Dan)",
    club: "Trumpington TSD",
    address: {
      location_name: "Trumpington Sports Centre",
      street: "Lime Avenue",
      city: "Trumpington",
      postal_code: "CB2 9HB"
    },
    contact: {
      phone: "+447923230302",
      email: "mrs.bseager@gbtsda.com"
    },
    training_times: ["Mondays - 18:00"]
  },
  {
    location: "East Anglia",
    instructor: "Mr R. Seager (3rd Dan)",
    club: "Marleigh TSD",
    address: {
      location_name: "Marleigh Primary Academy",
      street: "Marleigh Drive",
      city: "Cambridge",
      postal_code: "CB5 8BG"
    },
    contact: {
      phone: "+447827387166",
      email: "mr.rseager@gbtsda.com"
    },
    training_times: ["TBC"]
  },
  {
    location: "East Anglia",
    instructor: "Miss T. Hennah (2nd Dan)",
    club: "Weston TSD",
    address: {
      location_name: "Weston Village Hall",
      street: "Maiden Street",
      city: "Weston, Hertfordshire",
      postal_code: "SG4 7AA"
    },
    contact: {
      phone: null,
      email: "miss.thennah@gbtsda.com"
    },
    training_times: ["Thursdays - 16:45 - 17:45"]
  },
  {
    location: "Northern",
    instructor: "Master M. Silk (5th Dan)",
    club: "Northern TSD",
    address: {
      location_name: "The Marske Center",
      street: "69-71 High Street",
      city: "Marske by the Sea",
      postal_code: "TS11-6JL"
    },
    contact: {
      phone: "+447847396188",
      email: "master.msilk@gbtsda.com"
    },
    training_times: [
      "Tuesdays - 18:00 - 20:00",
      "Thursdays - 18:30 - 20:00",
      "Fridays - 18:00 - 20:00"
    ]
  },
  {
    location: "Northern",
    instructor: "Mr G. Annis (3rd Dan)",
    club: "East Cleveland TSD",
    address: {
      location_name: "Skelton Civic Hall",
      street: "Coniston Road, Skelton",
      city: "Saltburn-by-the-Sea",
      postal_code: "TS12 2EY"
    },
    contact: {
      phone: "+447982239494",
      email: "mr.gannis@gbtsda.com"
    },
    training_times: ["Mondays - 17:30 - 19:00", "Thursdays - 18:00 - 20:00"]
  },
  {
    location: "Northern",
    instructor: "Mr H. Walker (3rd Dan)",
    club: "Teesside TSD",
    address: {
      location_name: "Synthonia Scout Hut",
      street: "Greenwood Road",
      city: "Billingham",
      postal_code: "TS23 4BA"
    },
    contact: {
      phone: "+447535666445",
      email: "mr.hwalker@gbtsda.com"
    },
    training_times: [
      "Mondays - 18:30 - 20:00",
      "Saturdays - 11:00 - 12:30",
      "Saturdays - 12:30 - 13:30"
    ]
  },
  {
    location: "Midlands",
    instructor: "Master N. Khan (5th Dan)",
    club: "Nottingham TSD",
    address: {
      location_name: "The Lenton Centre",
      street: "Willoughby Street",
      city: "Nottingham",
      postal_code: "NG7 1RQ"
    },
    contact: {
      phone: "+447472268537",
      email: "master.nkhan@gbtsda.com"
    },
    training_times: ["Fridays - 18:45 - 20:15"]
  },
  {
    location: "Midlands",
    instructor: "Master I. Bening (4th Dan)",
    club: "Ryton TSD",
    address: {
      location_name: "Sports Connexion",
      street: "Leamington Road",
      city: "Ryton on Dunsmore, Warwickshire",
      postal_code: "CV8 3FL"
    },
    contact: {
      phone: "+447944852049",
      email: "master.ibening@gbtsda.com"
    },
    training_times: ["Mondays - 19:00 - 20:30", "Thursdays - 19:00 - 20:30"]
  },
  {
    location: "Midlands",
    instructor: "Mr B. Dearnley (3rd Dan)",
    club: "Leicester TSD",
    address: {
      location_name: "New College Leicester",
      street: "Glenfield Road",
      city: "Leicester",
      postal_code: "LE3 6DN"
    },
    contact: {
      phone: "+447876030796",
      email: "mr.bdearnley@gbtsda.com"
    },
    training_times: [
      "Mondays - Tiny Tigers - 18:00 – 18:45",
      "Mondays - Central Hall - 18:30 – 20:00",
      "Wednesdays - Theatre - 18:30 – 20:00"
    ]
  },
  {
    location: "Midlands",
    instructor: "Ms C. Wyatt (3rd Dan)",
    club: "Kenilworth TSD",
    address: {
      location_name: "Kenilworth School",
      street: "The Studio, Glasshouse Lane",
      city: "Kenilworth",
      postal_code: "CV8 2AL"
    },
    contact: {
      phone: "+447825031841",
      email: "ms.cwyatt@gbtsda.com"
    },
    training_times: ["Tuesdays - 17:30 - 19:30"]
  },
  {
    location: "Midlands",
    instructor: "Mr C. Boreland (3rd Dan)",
    club: "Radford & Walgrave TSD",
    address: {
      location_name: "Jubilee Crescent Community Centre",
      street: "Jubilee Crescent",
      city: "Radford, Warwickshire",
      postal_code: "CV6 3EX"
    },
    contact: {
      phone: "+447817490739",
      email: "mr.cboreland@gbtsda.com"
    },
    training_times: [
      "Tuesdays - 16:00 - 17:30",
      "Wednesdays - 15:15 - 16:15",
      "Thursdays - 15:15 - 16:15",
      "Fridays - 15:15 - 16:15",
      "Saturdays - 18:00 - 19:30"
    ]
  },
  {
    location: "Wales",
    instructor: "Master J. Morgan (4th Dan)",
    club: "Blaenavon TSD",
    address: {
      location_name: "Active Living Centre",
      street: "Coedcae Road",
      city: "Blaenavon",
      postal_code: "NP4 9AW"
    },
    contact: {
      phone: "+447841344224",
      email: "master.jmorgan@gbtsda.com"
    },
    training_times: ["Wednesdays - 18:00 - 20:30"]
  },
  {
    location: "Wales",
    instructor: "Master P. Turton (4th Dan)",
    club: "Canton TSD",
    address: {
      location_name: "Chapter Arts Centre",
      street: "Market Rd",
      city: "Canton",
      postal_code: "CF5 1QE"
    },
    contact: {
      phone: "+447568394818",
      email: "master.pturton@gbtsda.com"
    },
    training_times: ["Mondays - 19:30 - TBC"]
  },
  {
    location: "Wales",
    instructor: "Mr P. Jones (3rd Dan)",
    club: "Abergavenny TSD",
    address: {
      location_name: "Llanfoist Village Hall",
      street: "Church Lane",
      city: "Abergavenny",
      postal_code: "NP7 9LP"
    },
    contact: {
      phone: "+447796873378",
      email: "mr.pjones@gbtsda.com"
    },
    training_times: ["Thursdays - 18:00 - 19:30"]
  },
  {
    location: "Wales",
    instructor: "Mr J. Jones (3rd Dan)",
    club: "Cwmbran TSD",
    address: {
      location_name: "Upper Cwmbran Community Centre",
      street: "Thornhill Road",
      city: "Upper Cwmbran",
      postal_code: "NP44 5TZ"
    },
    contact: {
      phone: "+447943365755",
      email: "mr.jjones@gbtsda.com"
    },
    training_times: ["Tuesdays - 18:30 - 19:30", "Fridays - 18:30 - 19:30"]
  },
  {
    location: "South West",
    instructor: "Master J. Chappell (4th Dan)",
    club: "Bishopton TSD",
    address: {
      location_name: "St Bonaventures Primary School",
      street: "Edgerton Road",
      city: "Bishopton",
      postal_code: "BS7 8HP"
    },
    contact: {
      phone: "+447702173791",
      email: "master.jchappell@gbtsda.com"
    },
    training_times: ["Thursdays - 18:00 - 19:30"]
  },
  {
    location: "South West",
    instructor: "Mr G. Jarvis (3rd Dan)",
    club: "Thornbury TSD",
    address: {
      location_name: "Turnberries Community Centre",
      street: "Bath Road",
      city: "Thornbury",
      postal_code: "BS35 2BB"
    },
    contact: {
      phone: "+447863828271",
      email: "mr.gjarvis@gbtsda.com"
    },
    training_times: ["Fridays - 19:00 - 21:00"]
  },
  {
    location: "South West",
    instructor: "Mr H. Badman (2nd Dan)",
    club: "Yate TSD",
    address: {
      location_name: "Multi Active Building, YOSC",
      street: "Broad Lane",
      city: "Yate",
      postal_code: "BS37 7LB"
    },
    contact: {
      phone: "+447377396631",
      email: "mr.hbadman@gbtsda.com"
    },
    training_times: [
      "Juniors - Mondays - 17:30 - 18:30",
      "Seniors - Mondays - 18:30 - 20:30"
    ]
  },
  {
    location: "South West",
    instructor: "Mr I. Crook (2nd Dan)",
    club: "Downend TSD",
    address: {
      location_name: "Christchurch Parish Hall",
      street: "North Street",
      city: "Downend",
      postal_code: "BS16 5SG"
    },
    contact: {
      phone: "+447817744689",
      email: "mr.icrook@gbtsda.com"
    },
    training_times: ["Wednesdays - 19:30 - 21:00"]
  },
  {
    location: "South West",
    instructor: "Miss A. Sheppard (2nd Dan)",
    club: "Staple Hill TSD",
    address: {
      location_name: "Christchurch Infant School",
      street: "Christchurch Avenue",
      city: "Bristol",
      postal_code: "BS16 5TG"
    },
    contact: {
      phone: "+447581092147",
      email: "miss.asheppard@gbtsda.com"
    },
    training_times: ["Tuesdays - 17:30 - 18:30"]
  },
  {
    location: "South West",
    instructor: "Mr R. Whitehead (1st Dan)",
    club: "Portishead TSD",
    address: {
      location_name: "The Folk Hall",
      city: "Portishead",
      postal_code: "BS20 6PR"
    },
    contact: {
      email: "mr.rwhitehead@gbtsda.com"
    },
    training_times: ["Thursdays - 19:30 - 21:00"]
  },
  {
    location: "South West",
    instructor: "Mr M. Hopes (1st Dan)",
    club: "North Common TSD",
    address: {
      location_name: "North Common Village Hall",
      street: "Millers Drive",
      city: "Bristol",
      postal_code: "BS30 8XX"
    },
    contact: {
      email: "mr.mhopes@gbtsda.com"
    },
    training_times: ["Thursdays - 19:00 - 20:00"]
  },
  {
    location: "South East",
    instructor: "Master L. Hartt (5th Dan)",
    club: "Essex TSD",
    address: {
      location_name: "Robert Clack Leisure Centre",
      street: "Gosfield Road",
      city: "Romford",
      postal_code: "RM8 1DN"
    },
    contact: {
      phone: "+447768682432",
      email: "master.lhartt@gbtsda.com"
    },
    training_times: ["Mondays - 19:00 - 20:30"]
  },
  {
    location: "South East",
    instructor: "Master L. Hartt (5th Dan)",
    club: "Essex TSD",
    address: {
      location_name: "St Chads Hall",
      street: "3 Erics Road",
      city: "Chadwell Heath",
      region: "Essex",
      postal_code: "RM6 6JH"
    },
    contact: {
      phone: "+447768682432",
      email: "master.lhartt@gbtsda.com"
    },
    training_times: ["Thursdays - 19:00 - 20:30"]
  },
  {
    location: "South East",
    instructor: "Master A. Rosillo (4th Dan)",
    club: "Canning Town TSD",
    address: {
      location_name: "Eastlea Community School",
      street: "Pretoria Road",
      city: "Canning Town",
      region: "London",
      postal_code: "E16 4NP",
      social_media: "@canningtowntsd"
    },
    contact: {
      phone: "+447701319106",
      email: "ace_rosillo@hotmail.com"
    },
    website: "https://www.facebook.com/canningtowntsd/",
    training_times: ["Tuesdays - 19:00 - 20:30", "Saturdays - 11:30 - 13:00"]
  },
  {
    location: "South East",
    instructor: "Master A. Rosillo (4th Dan)",
    club: "Islington TSD (North London)",
    address: {
      location_name: "Claremont Project",
      street: "24 White Lion Street",
      city: "Angel",
      region: "London",
      postal_code: "N1 9PD",
      social_media: "@islingtontsd"
    },
    contact: {
      phone: "+447701319106",
      email: "ace_rosillo@hotmail.com"
    },
    website: "https://www.facebook.com/islingtontsd/",
    training_times: ["Fridays - 18:00 - 19:00"]
  },
  {
    location: "South East",
    instructor: "Master M.Islam (4th Dan)",
    club: "Leyton TSD",
    address: {
      location_name: "Leyton Parish Chuch Hall",
      street: "72 Lindley Road",
      city: "Waltham Forest",
      region: "Leyton",
      postal_code: "E10 6QT"
    },
    contact: {
      phone: "+447989338879",
      email: "mr.mislam@gbtsda.com"
    },
    website: "https://m.facebook.com/leytontsd",
    training_times: [
      "Wednesdays - 18:45 - 20:30",
      "Saturdays - 10:00 - 12:00",
      "Saturdays (weapons) - 12:00 - 1:00"
    ]
  },
  {
    location: "South East",
    instructor: "Mr R.Bernarte (3rd Dan)",
    club: "East London TSD",
    address: {
      location_name: "Beckton Globe",
      street: "Kingsford Way",
      city: "Beckton",
      region: "London",
      postal_code: "E6 5JQ"
    },
    contact: {
      phone: "+447449549720",
      email: "mr.rbernarte@gbtsda.com"
    },
    training_times: ["Mondays - 19:00 - 20:30", "Thursdays - 19:00 - 20:30"]
  }
];

const ClubFilter = () => {
  const [selectedCounty, setSelectedCounty] = useState("All");
  const counties = ["All", ...new Set(clubsData.map((club) => club.location))];
  const filteredClubs = selectedCounty === "All" ? clubsData : clubsData.filter((club) => club.location === selectedCounty);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { children: counties.map((county) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setSelectedCounty(county),
        style: {
          color: selectedCounty === county ? "#ffffff" : "",
          marginRight: "10px",
          backgroundColor: selectedCounty === county ? "#e43c5c" : "",
          padding: "10px",
          border: "1px solid black",
          cursor: "pointer"
        },
        className: "button-tag",
        children: county
      },
      county
    )) }),
    /* @__PURE__ */ jsx("ul", { className: "contact-list", id: "myUL", children: filteredClubs.map((club, index) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("h3", { className: "name", children: club.instructor }),
      /* @__PURE__ */ jsxs("address", { children: [
        club.address?.location_name,
        /* @__PURE__ */ jsx("br", {}),
        club.address?.street,
        /* @__PURE__ */ jsx("br", {}),
        club.address?.city,
        /* @__PURE__ */ jsx("br", {}),
        club.address?.postal_code,
        /* @__PURE__ */ jsx("br", {})
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsxs("h4", { children: [
        "Phone: ",
        /* @__PURE__ */ jsx("a", { href: `tel:${club.contact?.phone}`, children: club.contact?.phone })
      ] }),
      /* @__PURE__ */ jsxs("h4", { children: [
        "Email: ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${club.contact?.email}`, children: club.contact?.email })
      ] }),
      /* @__PURE__ */ jsx("h4", { children: "Training times:" }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("ul", { children: club.training_times?.map((time, idx) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("i", { className: "bx bx-chevron-right" }),
        " ",
        time
      ] }, idx)) })
    ] }, index)) })
  ] }) });
};

const $$Astro = createAstro();
const $$Clubs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clubs;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "homepage" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="inner-page"> <div class="container"> <br><br><br><br> <h1>Clubs</h1> <p>Please select a region for your nearest club : </p> ${renderComponent($$result2, "ClubFilter", ClubFilter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/acerosillo/Desktop/dev/gbtsda/src/components/ClubFilter.jsx", "client:component-export": "default" })} </div> </section> ` })}`;
}, "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/clubs.astro", void 0);

const $$file = "/Users/acerosillo/Desktop/dev/gbtsda/src/pages/clubs.astro";
const $$url = "/clubs";

export { $$Clubs as default, $$file as file, $$url as url };
