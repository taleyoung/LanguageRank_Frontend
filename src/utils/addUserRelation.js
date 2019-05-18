export function addUserRelation(that, ownId) {
  console.log("this");
  console.log("that", that.$router);
  const params = this.$router.params;
  if (params) {
    const userOne = params.userid;
    const userTwo = ownId || Taro.getStorageSync("login").userId;
    Taro.request({
      url: "http://pgrk.wizzstudio.com/updateuserrelationship",
      method: "POST",
      data: {
        userOne,
        userTwo
      }
    }).then(response => {
      const res = response.data;
      if (res.code === 0) {
        console.log("添加成功");
      }
    });
  }
}