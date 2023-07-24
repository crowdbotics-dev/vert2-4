import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bder_list = createAsyncThunk(
  "bders/api_v1_bder_list",
  async payload => {
    const response = await apiService.api_v1_bder_list(payload)
    return response.data
  }
)
export const api_v1_bder_create = createAsyncThunk(
  "bders/api_v1_bder_create",
  async payload => {
    const response = await apiService.api_v1_bder_create(payload)
    return response.data
  }
)
export const api_v1_bder_retrieve = createAsyncThunk(
  "bders/api_v1_bder_retrieve",
  async payload => {
    const response = await apiService.api_v1_bder_retrieve(payload)
    return response.data
  }
)
export const api_v1_bder_update = createAsyncThunk(
  "bders/api_v1_bder_update",
  async payload => {
    const response = await apiService.api_v1_bder_update(payload)
    return response.data
  }
)
export const api_v1_bder_partial_update = createAsyncThunk(
  "bders/api_v1_bder_partial_update",
  async payload => {
    const response = await apiService.api_v1_bder_partial_update(payload)
    return response.data
  }
)
export const api_v1_bder_destroy = createAsyncThunk(
  "bders/api_v1_bder_destroy",
  async payload => {
    const response = await apiService.api_v1_bder_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bdersSlice = createSlice({
  name: "bders",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_bder_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bder_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bder_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bder_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bder_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bder_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bder_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bder_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_bder_list,
  api_v1_bder_create,
  api_v1_bder_retrieve,
  api_v1_bder_update,
  api_v1_bder_partial_update,
  api_v1_bder_destroy,
  slice: bdersSlice
}
