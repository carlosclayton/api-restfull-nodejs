
exports.seed = function(knex, Promise) {
  return knex('cities').del()
    .then(function () {
      return knex('cities').insert(
       [

          {
            "id": 1,
            "name": "Fairlee",
            "state_id": 6
          },
          {
            "id": 2,
            "name": "Fostoria",
            "state_id": 22
          },
          {
            "id": 3,
            "name": "Crenshaw",
            "state_id": 6
          },
          {
            "id": 4,
            "name": "Albany",
            "state_id": 22
          },
          {
            "id": 5,
            "name": "Utting",
            "state_id": 3
          },
          {
            "id": 6,
            "name": "Silkworth",
            "state_id": 10
          },
          {
            "id": 7,
            "name": "Dowling",
            "state_id": 6
          },
          {
            "id": 8,
            "name": "Macdona",
            "state_id": 9
          },
          {
            "id": 9,
            "name": "Blodgett",
            "state_id": 25
          },
          {
            "id": 10,
            "name": "Sparkill",
            "state_id": 21
          },
          {
            "id": 11,
            "name": "Garfield",
            "state_id": 21
          },
          {
            "id": 12,
            "name": "Innsbrook",
            "state_id": 10
          },
          {
            "id": 13,
            "name": "Datil",
            "state_id": 2
          },
          {
            "id": 14,
            "name": "Witmer",
            "state_id": 9
          },
          {
            "id": 15,
            "name": "Orviston",
            "state_id": 10
          },
          {
            "id": 16,
            "name": "Fairview",
            "state_id": 2
          },
          {
            "id": 17,
            "name": "Waumandee",
            "state_id": 24
          },
          {
            "id": 18,
            "name": "Tryon",
            "state_id": 21
          },
          {
            "id": 19,
            "name": "Roosevelt",
            "state_id": 3
          },
          {
            "id": 20,
            "name": "Nicholson",
            "state_id": 5
          },
          {
            "id": 21,
            "name": "Bartley",
            "state_id": 8
          },
          {
            "id": 22,
            "name": "Brethren",
            "state_id": 5
          },
          {
            "id": 23,
            "name": "Vaughn",
            "state_id": 5
          },
          {
            "id": 24,
            "name": "Wakarusa",
            "state_id": 18
          },
          {
            "id": 25,
            "name": "Watrous",
            "state_id": 23
          },
          {
            "id": 26,
            "name": "Bluetown",
            "state_id": 12
          },
          {
            "id": 27,
            "name": "Hatteras",
            "state_id": 23
          },
          {
            "id": 28,
            "name": "Emerald",
            "state_id": 24
          },
          {
            "id": 29,
            "name": "Brogan",
            "state_id": 18
          },
          {
            "id": 30,
            "name": "Haena",
            "state_id": 5
          },
          {
            "id": 31,
            "name": "Bynum",
            "state_id": 2
          },
          {
            "id": 32,
            "name": "Wedgewood",
            "state_id": 20
          },
          {
            "id": 33,
            "name": "Kiskimere",
            "state_id": 11
          },
          {
            "id": 34,
            "name": "Windsor",
            "state_id": 3
          },
          {
            "id": 35,
            "name": "Marion",
            "state_id": 21
          },
          {
            "id": 36,
            "name": "Greenfields",
            "state_id": 11
          },
          {
            "id": 37,
            "name": "Longbranch",
            "state_id": 23
          },
          {
            "id": 38,
            "name": "Fairforest",
            "state_id": 18
          },
          {
            "id": 39,
            "name": "Cressey",
            "state_id": 13
          },
          {
            "id": 40,
            "name": "Clarktown",
            "state_id": 13
          },
          {
            "id": 41,
            "name": "Avoca",
            "state_id": 10
          }
        ]);
    });
};
