import {MusicVideo, MusicVideoList} from "../../types";

export default {
  findMusicVideosByGenreId(musicVideoList: MusicVideoList, genreId: number) {
    if (genreId === -1) return [];

    return musicVideoList.filter(
      (musicVideo: MusicVideo) => musicVideo?.genre_id === genreId
    );
  },
};
