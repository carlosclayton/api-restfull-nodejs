
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
            {
              "id": 1,
              "name": "Rachel Gates",
              "email": "rachelgates@enaut.com",
              "password": "5bdfa3909ca302569502d2cd"
            },
            {
              "id": 2,
              "name": "Tanisha Chambers",
              "email": "tanishachambers@enaut.com",
              "password": "5bdfa39000b84ecbe938f4f4"
            },
            {
              "id": 3,
              "name": "Chavez Mcdowell",
              "email": "chavezmcdowell@enaut.com",
              "password": "5bdfa390da9c0602713fa057"
            },
            {
              "id": 4,
              "name": "Laura Perez",
              "email": "lauraperez@enaut.com",
              "password": "5bdfa390d768709925b88d2c"
            },
            {
              "id": 5,
              "name": "Angel Bridges",
              "email": "angelbridges@enaut.com",
              "password": "5bdfa390886f1ce829747686"
            },
            {
              "id": 6,
              "name": "Walters Singleton",
              "email": "walterssingleton@enaut.com",
              "password": "5bdfa3901b455e26c398fb16"
            },
            {
              "id": 7,
              "name": "Marylou Mcconnell",
              "email": "maryloumcconnell@enaut.com",
              "password": "5bdfa39080973dd27a0c7400"
            },
            {
              "id": 8,
              "name": "Madden Mclaughlin",
              "email": "maddenmclaughlin@enaut.com",
              "password": "5bdfa390108f810572eeb40f"
            },
            {
              "id": 9,
              "name": "Lott Dotson",
              "email": "lottdotson@enaut.com",
              "password": "5bdfa3900e8f3cd6f76cf0ab"
            },
            {
              "id": 10,
              "name": "Vang Joyce",
              "email": "vangjoyce@enaut.com",
              "password": "5bdfa390e6d4353f69b73d49"
            },
            {
              "id": 11,
              "name": "Weeks Rosario",
              "email": "weeksrosario@enaut.com",
              "password": "5bdfa390a1abf0790ca3e538"
            },
            {
              "id": 12,
              "name": "Angelia Duran",
              "email": "angeliaduran@enaut.com",
              "password": "5bdfa3907b4ae4ab98bad3ef"
            },
            {
              "id": 13,
              "name": "Millicent Chang",
              "email": "millicentchang@enaut.com",
              "password": "5bdfa3907d95cca36b91f202"
            },
            {
              "id": 14,
              "name": "Hurst Vazquez",
              "email": "hurstvazquez@enaut.com",
              "password": "5bdfa390b948b5f5aea2baf6"
            },
            {
              "id": 15,
              "name": "Duffy Marshall",
              "email": "duffymarshall@enaut.com",
              "password": "5bdfa390daf2ab9241965dae"
            },
            {
              "id": 16,
              "name": "George Wiley",
              "email": "georgewiley@enaut.com",
              "password": "5bdfa390347b955b8feea03e"
            },
            {
              "id": 17,
              "name": "Hanson Price",
              "email": "hansonprice@enaut.com",
              "password": "5bdfa3909f20d13dbd97abc8"
            },
            {
              "id": 18,
              "name": "Cross Glass",
              "email": "crossglass@enaut.com",
              "password": "5bdfa390d9c53b3eaf82e7ae"
            },
            {
              "id": 19,
              "name": "Mccarty Scott",
              "email": "mccartyscott@enaut.com",
              "password": "5bdfa3909c06593b9cdfffeb"
            },
            {
              "id": 20,
              "name": "May Sullivan",
              "email": "maysullivan@enaut.com",
              "password": "5bdfa390f283719e4ff713a7"
            },
            {
              "id": 21,
              "name": "Lee Chan",
              "email": "leechan@enaut.com",
              "password": "5bdfa3901de9c05ba43cc40d"
            },
            {
              "id": 22,
              "name": "Tillman Hamilton",
              "email": "tillmanhamilton@enaut.com",
              "password": "5bdfa39076120326155ebb5d"
            },
            {
              "id": 23,
              "name": "Porter Fuller",
              "email": "porterfuller@enaut.com",
              "password": "5bdfa390c51ee3cdd7fa3191"
            },
            {
              "id": 24,
              "name": "Williams Hickman",
              "email": "williamshickman@enaut.com",
              "password": "5bdfa39061c4910cb812e2cc"
            },
            {
              "id": 25,
              "name": "Jenifer Camacho",
              "email": "jenifercamacho@enaut.com",
              "password": "5bdfa390ed0f0e7d0988c86e"
            },
            {
              "id": 26,
              "name": "Trisha Cabrera",
              "email": "trishacabrera@enaut.com",
              "password": "5bdfa390a317adb38a5d7c89"
            },
            {
              "id": 27,
              "name": "Alma Sweet",
              "email": "almasweet@enaut.com",
              "password": "5bdfa390c306daa1fff2413d"
            }
      ]);
    });
};
