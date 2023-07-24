import { PhotoSwipeLightbox } from 'photoswipe/dist/photoswipe-lightbox.esm';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe'),
});
lightbox.init();

function mode() {}
