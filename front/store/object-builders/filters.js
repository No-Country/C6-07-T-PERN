export function definedMediaFilter(media) {
  return media.filter((element) => {
    if (element) return element;
  });
}

export function mediaFilter(media, filter) {
  return media.filter((element) => {
    if (element) {
      const adultFilter = filter.adults ? element.adults === filter.adults : true;
      const min_release_yearFilter = filter.min_release_year
        ? element.release_year >= filter.min_release_year
        : true;
      const max_release_yearFilter = filter.max_release_year
        ? element.release_year <= filter.max_release_year
        : true;
      const vote_averageFilter = filter.vote_average.length
        ? filter.vote_average.includes(Math.round(element.vote_average))
        : true;
      const genresFilter = filter.genres.length
        ? element.genres.map((genre) => filter.genres.includes(genre.name)).includes(true)
        : true;
      const platformsFilter = filter.platforms.length
        ? element.platforms
            .map((platform) => filter.platforms.includes(platform.name))
            .includes(true)
        : true;

      if (
        adultFilter &&
        min_release_yearFilter &&
        max_release_yearFilter &&
        vote_averageFilter &&
        genresFilter &&
        platformsFilter
      ) {
        return element;
      }
    }
  });
}
