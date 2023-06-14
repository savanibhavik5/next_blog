export const GETBLOG = "GETBLOG";
export const getBlog = () => {
  return async (dispatch) => {
    const response = await fetch("http://192.168.29.46:1234/blog");
    const data = await response.json();

    dispatch({
      type: GETBLOG,
      data: data,
    });
  };
};
