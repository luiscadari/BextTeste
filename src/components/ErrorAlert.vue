<script>
export default {
  name: "ErrorAlert",
  props: ["message"],
};
</script>

<template>
  <Alert variant="destructive">
    <AlertCircle class="w-4 h-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      {{ message }}
    </AlertDescription>
  </Alert>
</template>
