

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('address').del()
        .then(function () {
            // Inserts seed entries
            return knex('address').insert([

            {
              "id": 1,
              "street": "Claver Place",
              "number": 175,
              "zipcode": "25560-8126",
              "user_id": 1
            },
            {
              "id": 2,
              "street": "Lorimer Street",
              "number": 568,
              "zipcode": "71666-3393",
              "user_id": 2
            },
            {
              "id": 3,
              "street": "Ashland Place",
              "number": 673,
              "zipcode": "50397-2470",
              "user_id": 3
            },
            {
              "id": 4,
              "street": "Verona Place",
              "number": 658,
              "zipcode": "62549-191",
              "user_id": 4
            },
            {
              "id": 5,
              "street": "Dictum Court",
              "number": 220,
              "zipcode": "69283-1046",
              "user_id": 5
            },
            {
              "id": 6,
              "street": "Glendale Court",
              "number": 189,
              "zipcode": "33961-7989",
              "user_id": 6
            },
            {
              "id": 7,
              "street": "Abbey Court",
              "number": 252,
              "zipcode": "78487-3213",
              "user_id": 7
            },
            {
              "id": 8,
              "street": "Village Court",
              "number": 945,
              "zipcode": "93948-5200",
              "user_id": 8
            },
            {
              "id": 9,
              "street": "Brightwater Avenue",
              "number": 799,
              "zipcode": "7515-4974",
              "user_id": 9
            },
            {
              "id": 10,
              "street": "Seacoast Terrace",
              "number": 674,
              "zipcode": "92784-4479",
              "user_id": 10
            },
            {
              "id": 11,
              "street": "Pitkin Avenue",
              "number": 891,
              "zipcode": "56882-8455",
              "user_id": 11
            },
            {
              "id": 12,
              "street": "Dinsmore Place",
              "number": 998,
              "zipcode": "22576-4527",
              "user_id": 12
            },
            {
              "id": 13,
              "street": "Grattan Street",
              "number": 368,
              "zipcode": "13010-9348",
              "user_id": 13
            },
            {
              "id": 14,
              "street": "Tillary Street",
              "number": 356,
              "zipcode": "90918-2304",
              "user_id": 14
            },
            {
              "id": 15,
              "street": "Rochester Avenue",
              "number": 754,
              "zipcode": "68133-8316",
              "user_id": 15
            },
            {
              "id": 16,
              "street": "Woodrow Court",
              "number": 462,
              "zipcode": "38789-4911",
              "user_id": 16
            },
            {
              "id": 17,
              "street": "Sharon Street",
              "number": 113,
              "zipcode": "93949-5168",
              "user_id": 17
            },
            {
              "id": 18,
              "street": "Fiske Place",
              "number": 887,
              "zipcode": "9629-7016",
              "user_id": 18
            },
            {
              "id": 19,
              "street": "Everett Avenue",
              "number": 544,
              "zipcode": "44604-7202",
              "user_id": 19
            },
            {
              "id": 20,
              "street": "Merit Court",
              "number": 677,
              "zipcode": "74290-9499",
              "user_id": 20
            },
            {
              "id": 21,
              "street": "Baltic Street",
              "number": 137,
              "zipcode": "58500-9617",
              "user_id": 21
            },
            {
              "id": 22,
              "street": "Aviation Road",
              "number": 338,
              "zipcode": "15804-5250",
              "user_id": 22
            },
            {
              "id": 23,
              "street": "Aster Court",
              "number": 920,
              "zipcode": "69040-2776",
              "user_id": 23
            },
            {
              "id": 24,
              "street": "Vanderveer Street",
              "number": 305,
              "zipcode": "65320-3802",
              "user_id": 24
            },
            {
              "id": 25,
              "street": "Drew Street",
              "number": 885,
              "zipcode": "9073-6967",
              "user_id": 25
            },
            {
              "id": 26,
              "street": "Fountain Avenue",
              "number": 183,
              "zipcode": "75437-5806",
              "user_id": 26
            },
            {
              "id": 27,
              "street": "Nostrand Avenue",
              "number": 180,
              "zipcode": "99537-7812",
              "user_id": 27
            }
      ]);
    });
};
