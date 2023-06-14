export const GETBLOG = "GETBLOG";
export const getBlog = () => {
  return async (dispatch) => {
  //  await fetch("http://192.168.29.46:1234/blog").then((res) => {
  //     dispatch({
  //       type: GETBLOG,
  //       data: res.json(),
  //     });
  //   });
  const response = await fetch("http://192.168.29.46:1234/blog")
    const data = await response.json();
    
    dispatch({
      type: GETBLOG,
      data : data
    })
  };
};
