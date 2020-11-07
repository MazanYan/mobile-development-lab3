import { Poster, posters } from '../assets/Posters';

export class Movie {

    poster: Poster | undefined;

    constructor(
        public title: string,
        public imdbId: string,
        public movType?: string,
        public year?: number,
        poster?: string
    ) {
        if (!!poster) {
            // @ts-ignore
            this.poster = posters[poster!] as Poster;
        }
    }
}
