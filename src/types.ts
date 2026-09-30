import type Laravel from './assets/icons/Laravel.astro';

/*
 * Representa una tecnología o herramienta del stack de desarrollo.
 * Se usa tanto en la sección "Acerca de Mí" (carrusel de tecnologías)
 * como en las tarjetas de proyectos (etiquetas de stack utilizado).
 */
export interface Tech {
	name: string;
	color: string;
	icon: typeof Laravel;
}
