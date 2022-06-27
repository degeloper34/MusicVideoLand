import musicVideoHelper from "../musicVideoHelper";

const mockInputArray = [
  {
    id: 501437,
    artist: "Pants Velour",
    title: "All In",
    release_year: 2014,
    genre_id: 14,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg",
  },
  {
    id: 501649,
    artist: "El Koala",
    title: "Veni paca to",
    release_year: 2014,
    genre_id: 8,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501649/images/app/w522_h292.jpg",
  },
  {
    id: 501895,
    artist: "Tom Petty and the Heartbreakers",
    title: "I Should Have Known It",
    release_year: 2010,
    genre_id: 8,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501895/images/app/w522_h292.jpg",
  },
  {
    id: 502139,
    artist: "Waka Flocka Flame",
    title: "Grove St. Party",
    release_year: 2011,
    genre_id: 6,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/502139/images/app/w522_h292.jpg",
  },
  {
    id: 502992,
    artist: "Beyoncé",
    title: "Single Ladies (Put a Ring on It)",
    release_year: 2008,
    genre_id: 62,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/502992/images/app/w522_h292.jpg",
  },
  {
    id: 503026,
    artist: "John Mayer",
    title: "Something Like Olivia",
    release_year: 2013,
    genre_id: 5,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503026/images/app/w522_h292.jpg",
  },
  {
    id: 503037,
    artist: "Olly Murs",
    title: "Army of Two",
    release_year: 2013,
    genre_id: 5,
    image_url:
      "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503037/images/app/w522_h292.jpg",
  },
];

describe("musicVideoHelper Tests", () => {
  test("Filter MusicVideoList with genreId -1", () => {
    const result = musicVideoHelper.findMusicVideosByGenreId(
      mockInputArray,
      -1
    );

    expect(result).toStrictEqual([]);
  });

  test("Filter MusicVideoList with genreId", () => {
    const result = musicVideoHelper.findMusicVideosByGenreId(mockInputArray, 5);

    expect(result).toStrictEqual([
      {
        id: 503026,
        artist: "John Mayer",
        title: "Something Like Olivia",
        release_year: 2013,
        genre_id: 5,
        image_url:
          "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503026/images/app/w522_h292.jpg",
      },
      {
        id: 503037,
        artist: "Olly Murs",
        title: "Army of Two",
        release_year: 2013,
        genre_id: 5,
        image_url:
          "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/503037/images/app/w522_h292.jpg",
      },
    ]);
  });
});
