<script>
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
export default {
  name: "ErrorAlert",
  props: ["message"],
  components: {
    Alert,
    AlertDescription,
    AlertTitle,
  },
};
</script>

<template>
  <Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      {{ message }}
    </AlertDescription>
  </Alert>
</template>
