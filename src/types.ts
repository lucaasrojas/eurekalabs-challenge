export enum ACTION_TYPES {
	SET_LIST_VIEW = "SET_LIST_VIEW",
	SET_GRID_VIEW = "SET_GRID_VIEW",
	SET_ORIGINAL_DEALS = "SET_ORIGINAL_DEALS",
	SET_FILTERED_DEALS = "SET_FILTERED_DEALS",
	CLEAN_ORIGINAL_DEALS = "CLEAN_ORIGINAL_DEALS",
	CLEAN_FILTERED_DEALS = "CLEAN_FILTERED_DEALS",
}

export enum VIEW_TYPES {
	GRID = "grid",
	LIST = "list",
}

export type Deal = {
	id: number;
	title: string;
	product_type: string;
	image: {
		src: string;
	};
	quantitySold: number;

	variants: {
		id: number;
		price: number;
	}[];
};

export interface State {
	view: VIEW_TYPES;
	deals: Deal[];
	filteredDeals: Deal[];
}

export interface GridCardProps {
	deal: Deal;
}
