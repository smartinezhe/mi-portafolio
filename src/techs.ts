import type {Tech} from './types';

/*
 * Catálogo único de tecnologías. Para agregar una nueva, defínela aquí
 * y luego úsala en STACK (carrusel) o en los tags de cada proyecto.
 */
export const TECHS = {
	HTML5: {name: 'HTML5', color: '#FB490B'},
	CSS3: {name: 'CSS3', color: '#C27AFF'},
	JAVASCRIPT: {name: 'JavaScript', color: '#F0DB4F'},
	TAILWIND: {name: 'Tailwind CSS', color: '#38BDF8'},
	PHP: {name: 'PHP', color: '#1E88E5'},
	MYSQL: {name: 'MySQL', color: '#00BBA7'},
	LARAVEL: {name: 'Laravel', color: '#FF2D20'},
	FILAMENT: {name: 'Filament', color: '#EFAF5D'},
} as const satisfies Record<string, Tech>;

/*
 * Tecnologías del stack agrupadas por categoría, en el orden en que
 * se muestran en "Acerca de Mí".
 */
export const STACK_GROUPS: {title: string; techs: Tech[]}[] = [
	{
		title: 'Frontend',
		techs: [TECHS.HTML5, TECHS.CSS3, TECHS.JAVASCRIPT, TECHS.TAILWIND],
	},
	{
		title: 'Backend',
		techs: [TECHS.PHP, TECHS.LARAVEL, TECHS.FILAMENT],
	},
	{
		title: 'Base de datos',
		techs: [TECHS.MYSQL],
	},
];
