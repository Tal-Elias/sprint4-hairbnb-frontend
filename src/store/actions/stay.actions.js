import { stayService } from "../../services/stay.service.js";
import { store } from '../store.js'
import { showSuccessMsg, showErrorMsg } from '../../services/event-bus.service.js'
import { ADD_STAY, REMOVE_STAY, SET_STAYS, UNDO_REMOVE_STAY, UPDATE_STAY, SET_FILTER_BY } from "../reducers/stay.reducer.js";
import { LOADING_DONE, LOADING_START } from "../reducers/system.reducer.js";

// Action Creators:
export function getActionRemoveStay(stayId) {
    return {
        type: REMOVE_STAY,
        stayId
    }
}
export function getActionAddStay(stay) {
    return {
        type: ADD_STAY,
        stay
    }
}
export function getActionUpdateStay(stay) {
    return {
        type: UPDATE_STAY,
        stay
    }
}

export async function loadStays(filterBy = {}) {
    store.dispatch({ type: LOADING_START })
    try {
        const stays = await stayService.query(filterBy)
        store.dispatch({ type: SET_STAYS, stays })
    } catch (err) {
        console.log('Cannot load stays', err)
        throw err
    } finally {
        store.dispatch({ type: LOADING_DONE })
    }
}

export async function removeStay(stayId) {
    try {
        await stayService.remove(stayId)
        store.dispatch(getActionRemoveStay(stayId))
    } catch (err) {
        console.log('Cannot remove stay', err)
        throw err
    }
}

export async function addStay(stay) {
    try {
        const savedStay = await stayService.save(stay)
        console.log('Added Stay', savedStay)
        store.dispatch(getActionAddStay(savedStay))
        return savedStay
    } catch (err) {
        console.log('Cannot add stay', err)
        throw err
    }
}

export async function updateStay(stay) {
    try {
        const savedStay = await stayService.save(stay)
        console.log('Updated Stay:', savedStay)
        store.dispatch(getActionUpdateStay(savedStay))
        return savedStay
    } catch (err) {
        console.log('Cannot save stay', err)
        throw err
    }
}

export function setFilter(filterBy = stayService.getDefaultFilter()) {
    store.dispatch({ type: SET_FILTER_BY, filterBy: filterBy })
}

// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export async function onRemoveStayOptimistic(stayId) {
    store.dispatch({
        type: REMOVE_STAY,
        stayId
    })
    showSuccessMsg('Stay removed')
    try {
        await stayService.remove(stayId)
        console.log('Server Reported - Deleted Succesfully');
    } catch (err) {
        showErrorMsg('Cannot remove stay')
        console.log('Cannot load stays', err)
        store.dispatch({
            type: UNDO_REMOVE_STAY,
        })
    }
}
