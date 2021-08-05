import * as types from "./types";
import {
  getTourListsAxios,
  deleteTourListAxios,
  postTourListAxios,
  deleteTourPackageAxios,
  postTourPackageAxios,
  putTourPackageAxios,
} from "@/store/tour/services";

export async function getTourListsAction({ commit }) {
  commit(types.LOADING_TOUR, true);
  try {
    const { data } = await getTourListsAxios();
    commit(types.GET_TOUR_LIST, data.lists);
  } catch (e) {
    alert(e);
    console.log(e);
  }
  commit(types.LOADING_TOUR, false);
}

export async function removeTourListAction({ commit }, payload) {
  commit(types.LOADING_TOUR, true);
  try {
    await deleteTourListAxios(payload);
    commit(types.REMOVE_TOUR_LIST, payload);
  } catch (e) {
    alert(e);
    console.log(e);
  }

  commit(types.LOADING_TOUR, false);
}

export async function addTourListAction({ commit }, payload) {
  commit(types.LOADING_TOUR, true);
  try {
    const { data } = await postTourListAxios(payload);
    payload.id = data;
    payload.tourPackages = [];
    commit(types.ADD_TOUR_LIST, payload);
  } catch (e) {
    alert(e);
    console.log(e);
  }
  commit(types.LOADING_TOUR, false);
}

export function getPackagesOfSelectedCityAction({ commit }, payload) {
  commit(types.GET_PACKAGES_OF_SELECTED_CITY, payload);
}

export async function removeTourPackageAction({ commit }, payload) {
  commit(types.LOADING_TOUR, true);

  try {
    await deleteTourPackageAxios(payload);
    commit(types.REMOVE_TOUR_PACKAGE, payload);
  } catch (e) {
    alert(e);
    console.log(e);
  }

  commit(types.LOADING_TOUR, false);
}

export async function addTourPackageAction({ commit }, payload) {
  commit(types.LOADING_TOUR, true);

  try {
    const { data } = await postTourPackageAxios(payload);
    payload.id = data;
    commit(types.ADD_TOUR_PACKAGE, payload);
  } catch (e) {
    alert(e);
    console.log(e);
  }

  commit(types.LOADING_TOUR, false);
}

export async function updateTourPackageAction({ commit }, payload) {
  commit(types.LOADING_TOUR, true);

  try {
    await putTourPackageAxios(payload);
    commit(types.UPDATE_TOUR_PACKAGE, payload);
  } catch (e) {
    alert(e);
    console.log(e);
  }

  commit(types.LOADING_TOUR, false);
}
