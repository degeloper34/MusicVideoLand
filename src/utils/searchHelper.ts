import {MusicVideoList} from "../../types";

export default {
  searchMusicVideoByTitle(
    musicVideoList: MusicVideoList,
    searchedText: string
  ) {
    let searchedMusicVideoList: MusicVideoList = [];
    const lowerCaseSearchedText = searchedText.toLowerCase();

    if (!searchedText) return searchedMusicVideoList;

    for (const musicVideo of musicVideoList) {
      if (
        String(musicVideo?.title).toLowerCase().includes(lowerCaseSearchedText)
      ) {
        searchedMusicVideoList.push(musicVideo);
      }
    }

    return searchedMusicVideoList;
  },
};
