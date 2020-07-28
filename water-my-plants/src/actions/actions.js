import { axiosWithAuth } from "../utilities/axiosWithAuth";

// Action Types

export const REGISTER_USER = "REGISTER_USER";
export const FETCH_PLANTS_START = "FETCH_PLANTS_START";
export const FETCH_PLANTS_SUCCESS = "FETCH_PLANTS_SUCCESS";
export const FETCH_PLANTS_FAILURE = "FETCH_PLANTS_FAILURE";
export const ADD_PLANTS_START = "ADD_PLANTS_START";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_FAILURE = "ADD_PLANT_FAILURE";
export const EDIT_PLANT_START = "EDIT_PLANT_START";
export const EDIT_PLANT_SUCCESS = "EDIT_PLANT_SUCCESS";
export const EDIT_PLANT_FAILURE = "EDIT_PLANT_FAILURE";
export const DELETE_PLANT_START = "DELETE_PLANT_START";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAILURE = "DELETE_PLANT_FAILURE";

// Action Creators

export const registerUser = (user) => {
  axiosWithAuth()
    .post("https://reqres.in/api/register", user)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchPlants = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PLANTS_START });
    axiosWithAuth()
      .get("/unknown")
      .then((response) => {
        dispatch({ type: FETCH_PLANTS_SUCCESS, payload: response.data.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_PLANTS_FAILURE, payload: error.message });
      });
  };
};

export const addPlant = (plant) => {
  return (dispatch) => {
    dispatch({ type: ADD_PLANTS_START });
    axiosWithAuth()
      .post("/users", plant)
      .then((response) => {
        dispatch({ type: ADD_PLANT_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ADD_PLANT_FAILURE, payload: error.message });
      });
  };
};

export const editPlant = (plant) => {
  return (dispatch) => {
    dispatch({ type: EDIT_PLANT_START });
    axiosWithAuth()
      .put(`/users/${plant.id}`, plant)
      .then((response) => {
        dispatch({ type: EDIT_PLANT_SUCCESS, payload: {...response.data, id: plant.id}})
      })
      .catch((error) => {
        dispatch({ type: EDIT_PLANT_FAILURE, payload: error.message })
      });
  };
};

export const deletePlant = (id) => {
    return (dispatch) => {
        dispatch({ type: DELETE_PLANT_START });
        axiosWithAuth()
            .delete(`/users/${id}`)
            .then((response) => {
                dispatch({ type: DELETE_PLANT_SUCCESS, payload: id });
            })
            .catch((error) => {
                dispatch({ type: DELETE_PLANT_FAILURE, payload: error.message });
            });
    };
};
