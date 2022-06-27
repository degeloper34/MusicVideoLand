import searchHelper from "../searchHelper";

const mockInputArray = [
  {
    id: 503130,
    artist: "Olly Murs ft. Travie McCoy",
    title: "Wrapped Up",
    release_year: 2014,
    genre_id: 1,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg",
  },
  {
    id: 503345,
    artist: "Fielfraz",
    title: "Personal Jesus",
    release_year: 1991,
    genre_id: 8,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503345/images/app/w522_h292.jpg",
  },
  {
    id: 503423,
    artist: "Djavan",
    title: "Om",
    release_year: 2014,
    genre_id: 5,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503423/images/app/w522_h292.jpg",
  },
  {
    id: 503546,
    artist: "Olly Murs ft. Demi Lovato",
    title: "Up",
    release_year: 2014,
    genre_id: 5,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503546/images/app/w522_h292.jpg",
  },
  {
    id: 503677,
    artist: "School is Cool",
    title: "Envelop Me",
    release_year: 2014,
    genre_id: 45,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503677/images/app/w522_h292.jpg",
  },
  {
    id: 504038,
    artist: "Mini Mini Club",
    title: "Krasnoludki",
    release_year: 2005,
    genre_id: 5,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504038/images/app/w522_h292.jpg",
  },
  {
    id: 504282,
    artist: "Anthrax",
    title: "Got The Time",
    release_year: 1990,
    genre_id: 59,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504282/images/app/w522_h292.jpg",
  },
  {
    id: 504508,
    artist: "Tony Bennett",
    title: "Fly Me to the Moon (In Other Words) (Live)",
    release_year: 1994,
    genre_id: 17,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504508/images/app/w522_h292.jpg",
  },
  {
    id: 504733,
    artist: "Elizma Theron",
    title: "Trane",
    release_year: 2015,
    genre_id: 1,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504733/images/app/w522_h292.jpg",
  },
  {
    id: 504752,
    artist: "Joaquin Sabina",
    title: "Dieguitos y Mafaldas",
    release_year: 2015,
    genre_id: 24,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504752/images/app/w522_h292.jpg",
  },
  {
    id: 504791,
    artist: "Roupa Nova",
    title: "Cantar Faz Feliz o Coração",
    release_year: 2009,
    genre_id: 8,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504791/images/app/w522_h292.jpg",
  },
  {
    id: 504960,
    artist: "Death Destruction",
    title: "Dead Pilot",
    release_year: 2014,
    genre_id: 59,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504960/images/app/w522_h292.jpg",
  },
  {
    id: 505238,
    artist: "F.A.N.S.",
    title: "Besos",
    release_year: 2014,
    genre_id: 1,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/505238/images/app/w522_h292.jpg",
  },
  {
    id: 506983,
    artist: "Alpenland Sepp & Co.",
    title: "Mein Herz des hat an Vogel",
    release_year: 2014,
    genre_id: 1,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/506983/images/app/w522_h292.jpg",
  },
  {
    id: 507159,
    artist: "Baba Shrimps",
    title: "All the City Lights",
    release_year: 2014,
    genre_id: 1,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/507159/images/app/w522_h292.jpg",
  },
];

describe("searchHelper Tests", () => {
  test("searchMusicVideoByTitle | Search in MusicVideoList with char", () => {
    var result = searchHelper.searchMusicVideoByTitle(mockInputArray, "w");

    expect(result).toStrictEqual([
      {
        id: 503130,
        artist: "Olly Murs ft. Travie McCoy",
        title: "Wrapped Up",
        release_year: 2014,
        genre_id: 1,
        image_url:
          "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503130/images/app/w522_h292.jpg",
      },
      {
        id: 504508,
        artist: "Tony Bennett",
        title: "Fly Me to the Moon (In Other Words) (Live)",
        release_year: 1994,
        genre_id: 17,
        image_url:
          "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504508/images/app/w522_h292.jpg",
      },
    ]);
  });

  test("searchMusicVideoByTitle | Search in MusicVideoList with word", () => {
    var result = searchHelper.searchMusicVideoByTitle(mockInputArray, "Trane");

    expect(result).toStrictEqual([
      {
        id: 504733,
        artist: "Elizma Theron",
        title: "Trane",
        release_year: 2015,
        genre_id: 1,
        image_url:
          "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/504733/images/app/w522_h292.jpg",
      },
    ]);
  });

  test("searchMusicVideoByTitle | Search in MusicVideoList with empty string", () => {
    var result = searchHelper.searchMusicVideoByTitle(mockInputArray, "");

    expect(result).toStrictEqual([]);
  });

  test("searchMusicVideoByTitle | Search in MusicVideoList with unmatched string", () => {
    var result = searchHelper.searchMusicVideoByTitle(
      mockInputArray,
      "Xitexite"
    );

    expect(result).toStrictEqual([]);
  });
});
