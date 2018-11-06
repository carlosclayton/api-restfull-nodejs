
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('city_user').del()
    .then(function () {
      // Inserts seed entries
      return knex('city_user').insert(
          [
            {
              "user_id": 1,
              "city_id": 3
            },
            {
              "user_id": 2,
              "city_id": 6
            },
            {
              "user_id": 3,
              "city_id": 18
            },
            {
              "user_id": 4,
              "city_id": 6
            },
            {
              "user_id": 5,
              "city_id": 24
            },
            {
              "user_id": 6,
              "city_id": 4
            },
            {
              "user_id": 7,
              "city_id": 11
            },
            {
              "user_id": 8,
              "city_id": 3
            },
            {
              "user_id": 9,
              "city_id": 18
            },
            {
              "user_id": 10,
              "city_id": 3
            },
            {
              "user_id": 11,
              "city_id": 25
            },
            {
              "user_id": 12,
              "city_id": 25
            },
            {
              "user_id": 13,
              "city_id": 15
            },
            {
              "user_id": 14,
              "city_id": 10
            },
            {
              "user_id": 15,
              "city_id": 3
            },
            {
              "user_id": 16,
              "city_id": 25
            },
            {
              "user_id": 17,
              "city_id": 10
            },
            {
              "user_id": 18,
              "city_id": 6
            },
            {
              "user_id": 19,
              "city_id": 7
            },
            {
              "user_id": 20,
              "city_id": 1
            },
            {
              "user_id": 21,
              "city_id": 4
            },
            {
              "user_id": 22,
              "city_id": 8
            },
            {
              "user_id": 23,
              "city_id": 11
            },
            {
              "user_id": 24,
              "city_id": 10
            },
            {
              "user_id": 25,
              "city_id": 7
            },
            {
              "user_id": 26,
              "city_id": 18
            },
            {
              "user_id": 27,
              "city_id": 7
            }
          ]
        );
    });
};
