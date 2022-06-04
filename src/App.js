import React from 'react'
import { url, _post } from './services'

export default function App() {
  let a = [
    {
      "title": "nike1",
      "description": "some description of nike1",
      "old": "816",
      "new": "524",
      "rating": "3",
      "discount": "12",
      "tags": "men",
      "image": "/img/a (1).jpg"
    },
    {
      "title": "nike2",
      "description": "some description of nike2",
      "old": "863",
      "new": "565",
      "rating": "1",
      "discount": "37",
      "tags": "men",
      "image": "/img/a (2).jpg"
    },
    {
      "title": "nike3",
      "description": "some description of nike3",
      "old": "831",
      "new": "449",
      "rating": "3",
      "discount": "54",
      "tags": "men",
      "image": "/img/a (3).jpg"
    },
    {
      "title": "nike4",
      "description": "some description of nike4",
      "old": "817",
      "new": "476",
      "rating": "2",
      "discount": "39",
      "tags": "men",
      "image": "/img/a (4).jpg"
    },
    {
      "title": "nike5",
      "description": "some description of nike5",
      "old": "889",
      "new": "588",
      "rating": "4",
      "discount": "52",
      "tags": "men",
      "image": "/img/a (5).jpg"
    },
    {
      "title": "nike6",
      "description": "some description of nike6",
      "old": "820",
      "new": "527",
      "rating": "2",
      "discount": "29",
      "tags": "men",
      "image": "/img/a (6).jpg"
    },
    {
      "title": "nike7",
      "description": "some description of nike7",
      "old": "820",
      "new": "554",
      "rating": "1",
      "discount": "59",
      "tags": "men",
      "image": "/img/a (7).jpg"
    },
    {
      "title": "nike8",
      "description": "some description of nike8",
      "old": "842",
      "new": "444",
      "rating": "2",
      "discount": "45",
      "tags": "men",
      "image": "/img/a (8).jpg"
    },
    {
      "title": "nike9",
      "description": "some description of nike9",
      "old": "894",
      "new": "423",
      "rating": "4",
      "discount": "48",
      "tags": "women",
      "image": "/img/a (9).jpg"
    },
    {
      "title": "nike10",
      "description": "some description of nike10",
      "old": "865",
      "new": "543",
      "rating": "2",
      "discount": "23",
      "tags": "women",
      "image": "/img/a (10).jpg"
    },
    {
      "title": "nike11",
      "description": "some description of nike11",
      "old": "847",
      "new": "486",
      "rating": "2",
      "discount": "49",
      "tags": "women",
      "image": "/img/a (11).jpg"
    },
    {
      "title": "nike12",
      "description": "some description of nike12",
      "old": "830",
      "new": "407",
      "rating": "3",
      "discount": "13",
      "tags": "women",
      "image": "/img/a (12).jpg"
    },
    {
      "title": "nike13",
      "description": "some description of nike13",
      "old": "804",
      "new": "582",
      "rating": "1",
      "discount": "31",
      "tags": "women",
      "image": "/img/a (13).jpg"
    },
    {
      "title": "nike14",
      "description": "some description of nike14",
      "old": "896",
      "new": "597",
      "rating": "4",
      "discount": "33",
      "tags": "women",
      "image": "/img/a (14).jpg"
    },
    {
      "title": "nike15",
      "description": "some description of nike15",
      "old": "864",
      "new": "412",
      "rating": "2",
      "discount": "14",
      "tags": "women",
      "image": "/img/a (15).jpg"
    },
    {
      "title": "nike16",
      "description": "some description of nike16",
      "old": "801",
      "new": "505",
      "rating": "5",
      "discount": "59",
      "tags": "women",
      "image": "/img/a (16).jpg"
    },
    {
      "title": "nike17",
      "description": "some description of nike17",
      "old": "896",
      "new": "507",
      "rating": "2",
      "discount": "18",
      "tags": "kids",
      "image": "/img/a (17).jpg"
    },
    {
      "title": "nike18",
      "description": "some description of nike18",
      "old": "878",
      "new": "411",
      "rating": "3",
      "discount": "11",
      "tags": "kids",
      "image": "/img/a (18).jpg"
    },
    {
      "title": "nike19",
      "description": "some description of nike19",
      "old": "858",
      "new": "466",
      "rating": "3",
      "discount": "11",
      "tags": "kids",
      "image": "/img/a (19).jpg"
    },
    {
      "title": "nike20",
      "description": "some description of nike20",
      "old": "813",
      "new": "554",
      "rating": "2",
      "discount": "56",
      "tags": "kids",
      "image": "/img/a (20).jpg"
    },
    {
      "title": "nike21",
      "description": "some description of nike21",
      "old": "855",
      "new": "444",
      "rating": "5",
      "discount": "15",
      "tags": "kids",
      "image": "/img/a (21).jpg"
    },
    {
      "title": "nike22",
      "description": "some description of nike22",
      "old": "815",
      "new": "498",
      "rating": "3",
      "discount": "45",
      "tags": "kids",
      "image": "/img/a (22).jpg"
    },
    {
      "title": "nike23",
      "description": "some description of nike23",
      "old": "899",
      "new": "572",
      "rating": "1",
      "discount": "52",
      "tags": "kids",
      "image": "/img/a (23).jpg"
    },
    {
      "title": "nike24",
      "description": "some description of nike24",
      "old": "898",
      "new": "441",
      "rating": "3",
      "discount": "19",
      "tags": "kids",
      "image": "/img/a (24).jpg"
    },
    {
      "title": "nike25",
      "description": "some description of nike25",
      "old": "848",
      "new": "504",
      "rating": "3",
      "discount": "11",
      "tags": "shoes",
      "image": "/img/a (25).jpg"
    },
    {
      "title": "nike26",
      "description": "some description of nike26",
      "old": "865",
      "new": "595",
      "rating": "5",
      "discount": "41",
      "tags": "shoes",
      "image": "/img/a (26).jpg"
    },
    {
      "title": "nike27",
      "description": "some description of nike27",
      "old": "811",
      "new": "424",
      "rating": "2",
      "discount": "32",
      "tags": "shoes",
      "image": "/img/a (27).jpg"
    },
    {
      "title": "nike28",
      "description": "some description of nike28",
      "old": "862",
      "new": "509",
      "rating": "1",
      "discount": "51",
      "tags": "shoes",
      "image": "/img/a (28).jpg"
    },
    {
      "title": "nike29",
      "description": "some description of nike29",
      "old": "806",
      "new": "462",
      "rating": "3",
      "discount": "22",
      "tags": "shoes",
      "image": "/img/a (29).jpg"
    },
    {
      "title": "nike30",
      "description": "some description of nike30",
      "old": "844",
      "new": "438",
      "rating": "2",
      "discount": "55",
      "tags": "shoes",
      "image": "/img/a (30).jpg"
    },
    {
      "title": "nike31",
      "description": "some description of nike31",
      "old": "824",
      "new": "500",
      "rating": "3",
      "discount": "39",
      "tags": "shoes",
      "image": "/img/a (31).jpg"
    },
    {
      "title": "nike32",
      "description": "some description of nike32",
      "old": "808",
      "new": "477",
      "rating": "5",
      "discount": "16",
      "tags": "shoes",
      "image": "/img/a (32).jpg"
    },
    {
      "title": "nike33",
      "description": "some description of nike33",
      "old": "860",
      "new": "426",
      "rating": "3",
      "discount": "35",
      "tags": "campus",
      "image": "/img/a (33).jpg"
    },
    {
      "title": "nike34",
      "description": "some description of nike34",
      "old": "818",
      "new": "416",
      "rating": "4",
      "discount": "33",
      "tags": "campus",
      "image": "/img/a (34).jpg"
    },
    {
      "title": "nike35",
      "description": "some description of nike35",
      "old": "872",
      "new": "565",
      "rating": "4",
      "discount": "51",
      "tags": "campus",
      "image": "/img/a (35).jpg"
    },
    {
      "title": "nike36",
      "description": "some description of nike36",
      "old": "824",
      "new": "529",
      "rating": "5",
      "discount": "13",
      "tags": "campus",
      "image": "/img/a (36).jpg"
    },
    {
      "title": "nike37",
      "description": "some description of nike37",
      "old": "819",
      "new": "463",
      "rating": "4",
      "discount": "19",
      "tags": "puma",
      "image": "/img/a (37).jpg"
    },
    {
      "title": "nike38",
      "description": "some description of nike38",
      "old": "807",
      "new": "406",
      "rating": "1",
      "discount": "23",
      "tags": "puma",
      "image": "/img/a (38).jpg"
    },
    {
      "title": "nike39",
      "description": "some description of nike39",
      "old": "806",
      "new": "568",
      "rating": "2",
      "discount": "33",
      "tags": "puma",
      "image": "/img/a (39).jpg"
    },
    {
      "title": "nike40",
      "description": "some description of nike40",
      "old": "849",
      "new": "404",
      "rating": "4",
      "discount": "40",
      "tags": "puma",
      "image": "/img/a (40).jpg"
    },
    {
      "title": "nike41",
      "description": "some description of nike41",
      "old": "820",
      "new": "527",
      "rating": "4",
      "discount": "19",
      "tags": "puma",
      "image": "/img/a (41).jpg"
    },
    {
      "title": "nike42",
      "description": "some description of nike42",
      "old": "805",
      "new": "552",
      "rating": "3",
      "discount": "49",
      "tags": "nike",
      "image": "/img/a (42).jpg"
    },
    {
      "title": "nike43",
      "description": "some description of nike43",
      "old": "856",
      "new": "481",
      "rating": "5",
      "discount": "60",
      "tags": "nike",
      "image": "/img/a (43).jpg"
    },
    {
      "title": "nike44",
      "description": "some description of nike44",
      "old": "853",
      "new": "447",
      "rating": "4",
      "discount": "47",
      "tags": "nike",
      "image": "/img/a (44).jpg"
    },
    {
      "title": "nike45",
      "description": "some description of nike45",
      "old": "847",
      "new": "550",
      "rating": "3",
      "discount": "10",
      "tags": "nike",
      "image": "/img/a (45).jpg"
    },
    {
      "title": "nike46",
      "description": "some description of nike46",
      "old": "808",
      "new": "479",
      "rating": "2",
      "discount": "44",
      "tags": "nike",
      "image": "/img/a (46).jpg"
    },
    {
      "title": "nike47",
      "description": "some description of nike47",
      "old": "830",
      "new": "443",
      "rating": "2",
      "discount": "13",
      "tags": "nike",
      "image": "/img/a (47).jpg"
    },
    {
      "title": "nike48",
      "description": "some description of nike48",
      "old": "885",
      "new": "534",
      "rating": "1",
      "discount": "10",
      "tags": "nike",
      "image": "/img/a (48).jpg"
    },
    {
      "title": "nike49",
      "description": "some description of nike49",
      "old": "871",
      "new": "400",
      "rating": "1",
      "discount": "20",
      "tags": "nike",
      "image": "/img/a (49).jpg"
    },
    {
      "title": "nike50",
      "description": "some description of nike50",
      "old": "816",
      "new": "580",
      "rating": "4",
      "discount": "59",
      "tags": "nike",
      "image": "/img/a (50).jpg"
    }
  ]

  for (let item of a) {
    _post(url+"/products.json",item)
  }
  return (
    <div>App</div>
  )
}
