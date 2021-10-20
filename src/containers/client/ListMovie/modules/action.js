import * as ActionType from './constants';
import api from './../../../../utils/api';

export const actFetchListMovie = () => {
	return dispatch => {
		dispatch(actListMovieRequest());
		api
			.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP07')
			.then(result => {
				dispatch(actListMovieSuccess(result.data.content));
			})
			.catch(error => {
				dispatch(actListMovieFailed(error));
			});
	};
};

export const actListMovieRequest = () => {
	return {
		type: ActionType.LIST_MOVIE_REQUEST
	};
};
export const actListMovieSuccess = data => {
	return {
		type: ActionType.LIST_MOVIE_SUCCESS,
		payload: data
	};
};
export const actListMovieFailed = error => {
	return {
		type: ActionType.LIST_MOVIE_FAILED,
		payload: error
	};
};
