export const addImage = data => {
  return {
    type: "ADD_IMAGE",
    data
  };
};
export const increaseCount = data => {
  return {
    type: "COUNT",
    data
  };
};
export const deleteImage = data => {
  return {
    type: "DELETE",
    data
  };
};
export const editImageinfo = data => {
  return {
    type: "EDIT",
    data
  };
};
