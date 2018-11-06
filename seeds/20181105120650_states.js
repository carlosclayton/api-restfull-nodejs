
exports.seed = function(knex, Promise) {
  return knex('states').del()
    .then(function () {      
      return knex('states').insert(
         [
            {
              "id": 1,
              "name": "New York"
            },
            {
              "id": 2,
              "name": "Wisconsin"
            },
            {
              "id": 3,
              "name": "District Of Columbia"
            },
            {
              "id": 4,
              "name": "Nebraska"
            },
            {
              "id": 5,
              "name": "Utah"
            },
            {
              "id": 6,
              "name": "Idaho"
            },
            {
              "id": 7,
              "name": "Marshall Islands"
            },
            {
              "id": 8,
              "name": "Arizona"
            },
            {
              "id": 9,
              "name": "Hawaii"
            },
            {
              "id": 10,
              "name": "Kentucky"
            },
            {
              "id": 11,
              "name": "Texas"
            },
            {
              "id": 12,
              "name": "North Carolina"
            },
            {
              "id": 13,
              "name": "Northern Mariana Islands"
            },
            {
              "id": 14,
              "name": "Rhode Island"
            },
            {
              "id": 15,
              "name": "Palau"
            },
            {
              "id": 16,
              "name": "New Mexico"
            },
            {
              "id": 17,
              "name": "Vermont"
            },
            {
              "id": 18,
              "name": "Federated States Of Micronesia"
            },
            {
              "id": 19,
              "name": "Alabama"
            },
            {
              "id": 20,
              "name": "Minnesota"
            },
            {
              "id": 21,
              "name": "Tennessee"
            },
            {
              "id": 22,
              "name": "Puerto Rico"
            },
            {
              "id": 23,
              "name": "Louisiana"
            },
            {
              "id": 24,
              "name": "Pennsylvania"
            },
            {
              "id": 25,
              "name": "Florida"
            },
            {
              "id": 26,
              "name": "South Dakota"
            },
            {
              "id": 27,
              "name": "Virginia"
            },
            {
              "id": 28,
              "name": "California"
            },
            {
              "id": 29,
              "name": "Mississippi"
            },
            {
              "id": 30,
              "name": "Missouri"
            },
            {
              "id": 31,
              "name": "Kansas"
            },
            {
              "id": 32,
              "name": "Connecticut"
            },
            {
              "id": 33,
              "name": "Guam"
            },
            {
              "id": 34,
              "name": "North Dakota"
            },
            {
              "id": 35,
              "name": "New Hampshire"
            }
            
        ]);
    });
};
