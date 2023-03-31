import axios from "./axios.js"

export const getGradientAll = () => axios.get("/gradients")
export const updateGradientCopies = id => axios.patch(`/gradients/${id}`)
