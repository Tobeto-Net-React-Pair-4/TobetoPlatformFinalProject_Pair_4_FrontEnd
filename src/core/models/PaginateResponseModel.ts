export interface Paginate<T> {
	size: number;
	index: number;
	count: number;
	pages: number;
	items: T[];
	hasPrevious: boolean;
	hasNext: boolean;
}
