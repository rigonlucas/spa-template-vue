<template>
    <div>
        <notifications-bell/>
        <user-bar/>
    </div>
</template>

<script>
import UserBar from "@/components/System/User/UserBar"
import NotificationsBell from "@/components/System/Bar/NotificationsBell"
export default {
  name: "BarHeaderRight",
  components: {
    NotificationsBell,
    UserBar,
  },
}
</script>

<style scoped>

</style>
