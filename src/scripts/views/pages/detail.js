import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import {createMovieDetailTemplate,createLikeButtonTemplate} from '../templates/template-creator';

const Detail = {
    async render() {
        return `
          <div id="movie" class="movie"></div>
          <div id="likeButtonContainer"><div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const movie = await TheMovieDbSource.detailMovie(url.id);
        const movieContainer = document.querySelector('#movie');
        movieContainer.innerHTML = createMovieDetailTemplate(movie);
        
        const likeButtonContainer = document.querySelector('#likeButtonContainer');
        likeButtonContainer.innerHTML = createLikeButtonTemplate();
    }
}
export default Detail;