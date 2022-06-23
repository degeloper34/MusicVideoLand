import {Genre, GenreList} from "../../types";

export default {
  findGenreTitleByGenreId(genreList: GenreList, genreId: string) {
    return (
      genreList.find((eachGenre: Genre) => eachGenre?.id === parseInt(genreId))
        ?.name || `There is no title for GenreId: ${genreId}`
    );
  },
};
