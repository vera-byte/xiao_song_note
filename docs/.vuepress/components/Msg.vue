<!--
 * @Author: your name
 * @Date: 2021-05-21 14:03:38
 * @LastEditTime: 2021-05-21 17:43:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /note/docs/.vuepress/components/Msg.vue
-->
<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let readkey = localStorage.getItem("20210516");
    if (readkey == false || readkey == null) {
      localStorage.setItem("20210516", "true");
      this.$notification.open({
        message: "欢迎",
        description: "本网址已经全面升级！",
        icon: <a-icon type="exclamation-circle" style="color: #1890ff" />,
        duration: 0,
        placement: "bottomRight",
        // btn: h => {
        //   return h(
        //     "a-button",
        //     {
        //       props: {
        //         type: "primary",
        //         size: "small"
        //       },
        //       on: {
        //         click: () => window.location.href="/guide/changelog.html"
        //       }
        //     },
        //     "查看更新"
        //   );
        // },
        key: "20210516",
      });
    }
  },
};
</script>
